import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  private supabase: SupabaseClient;
  private resend: Resend;
  private ownerEmail: string;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_SERVICE_ROLE_KEY');
    const resendApiKey = this.configService.get<string>('RESEND_API_KEY');
    this.ownerEmail = this.configService.get<string>('OWNER_EMAIL');

    if (!supabaseUrl || !supabaseKey || !resendApiKey || !this.ownerEmail) {
      throw new Error('❌ Missing required environment variables: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, or OWNER_EMAIL');
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
    this.resend = new Resend(resendApiKey);
  }

  async create(dto: CreateContactDto) {
    // 1. Save to Supabase (Non-blocking)
    try {
      const { error } = await this.supabase
        .from('contact_messages')
        .insert([{ name: dto.name, email: dto.email, message: dto.message }]);

      if (error) {
        console.error('❌ Supabase save failed:', error.message);
      } else {
        console.log('✅ Message saved to Supabase');
      }
    } catch (err: any) {
      console.error('❌ Supabase error:', err.message);
    }

    // 2. Send email notification via Resend
    try {
      const { data, error: emailError } = await this.resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [this.ownerEmail],
        replyTo: dto.email,
        subject: `[Portfolio] New message from ${dto.name}`,
        html: `
          <div style="font-family: monospace; background: #10141a; color: #dfe2eb; padding: 24px; border-radius: 8px;">
            <h2 style="color: #ffc082; margin-top: 0;">[PORTFOLIO] New Contact Message</h2>
            <p><strong style="color: #9ccaff;">FROM:</strong> ${dto.name} &lt;${dto.email}&gt;</p>
            <hr style="border: 1px solid #554434; margin: 16px 0;" />
            <p><strong style="color: #9ccaff;">MESSAGE:</strong></p>
            <p style="white-space: pre-wrap;">${dto.message}</p>
            <hr style="border: 1px solid #554434; margin: 16px 0;" />
            <p style="font-size: 11px; color: #dbc2ad; opacity: 0.6;">Sent from Portfolio Contact Form</p>
          </div>
        `,
      });

      if (emailError) {
        console.error('❌ Email send failed:', emailError);
        throw new InternalServerErrorException('Message received but failed to send email notification.');
      }
      
      console.log('✅ Email sent successfully:', data?.id);
    } catch (err: any) {
      if (err instanceof InternalServerErrorException) throw err;
      console.error('❌ Resend error:', err.message);
      throw new InternalServerErrorException('Failed to process message submission.');
    }

    return { success: true, message: 'Message received! I will get back to you soon.' };
  }
}
