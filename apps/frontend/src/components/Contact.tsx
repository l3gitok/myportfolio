'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [lastSubmit, setLastSubmit] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check
    if (honeypot) {
      console.warn('Bot detected via honeypot');
      setStatus('success'); // Silent fail for bots
      return;
    }

    // 2. Client-side throttling (5 seconds)
    const now = Date.now();
    if (now - lastSubmit < 5000) {
      setErrorMsg('Please wait a few seconds before sending another message.');
      setStatus('error');
      return;
    }

    setLastSubmit(now);
    setStatus('loading');
    setErrorMsg('');
    try {
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      const res = await fetch(`${backendUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(Array.isArray(data.message) ? data.message.join(', ') : data.message || 'Failed to send message');
      }
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-24 px-8 bg-surface-container-lowest section-blend" id="contact">
      <div className="max-w-4xl mx-auto group">
        {/* Terminal window title bar */}
        <div
          className="bg-surface-container-highest rounded-t-lg flex items-center justify-between px-4 py-2 border-b border-outline-variant/20">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
          </div>
          <span
            className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">session://contact_portal</span>
          <div className="w-12"></div>
        </div>

        <div className="bg-surface-container-low p-8 rounded-b-lg border-x border-b border-outline-variant/20">
          <div className="mb-8">
            <div className="font-label text-sm text-primary mb-2">
              tuannd@portfolio:~$ ./send_message.sh
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tight">INITIALIZE_COMMUNICATION</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field (hidden from users) */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label text-[10px] uppercase text-on-surface-variant">IDENTIFIER (NAME)</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-outline-variant/20 rounded p-3 text-sm focus:outline-none focus:border-primary transition-colors font-label"
                  placeholder="your_name" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] uppercase text-on-surface-variant">CALLBACK_URI (EMAIL)</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-outline-variant/20 rounded p-3 text-sm focus:outline-none focus:border-primary transition-colors font-label"
                  placeholder="user@domain.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase text-on-surface-variant">DATA_PAYLOAD (MESSAGE)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-background border border-outline-variant/20 rounded p-3 text-sm focus:outline-none focus:border-primary transition-colors font-label resize-none"
                placeholder="Enter message payload here..." rows={4}></textarea>
            </div>

            {/* Status messages */}
            {status === 'success' && (
              <div className="font-label text-xs text-green-400 bg-green-400/10 border border-green-400/20 rounded p-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                MESSAGE_TRANSMITTED // You&apos;ll receive a reply at your email soon.
              </div>
            )}
            {status === 'error' && (
              <div className="font-label text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded p-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">error</span>
                TRANSMISSION_FAILED // {errorMsg}
              </div>
            )}

            <button
              className="w-full bg-primary-container text-on-primary-container font-headline font-bold uppercase py-4 rounded tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>TRANSMITTING... <span className="material-symbols-outlined text-sm animate-spin">autorenew</span></>
              ) : (
                <>EXECUTE_SEND <span className="material-symbols-outlined text-sm">send</span></>
              )}
            </button>
          </form>

          {/* Social links */}
          <div
            className="mt-12 pt-8 border-t border-outline-variant/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <a className="font-label text-[10px] text-on-surface-variant hover:text-primary transition-colors uppercase"
              href="https://github.com/l3gitok" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a className="font-label text-[10px] text-on-surface-variant hover:text-primary transition-colors uppercase"
              href="https://www.linkedin.com/in/%C4%91%E1%BB%A9c-tu%E1%BA%A5n-6a14013b6/?trk=public-profile-join-page" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a className="font-label text-[10px] text-on-surface-variant hover:text-primary transition-colors uppercase"
              href="mailto:[EMAIL_ADDRESS]">EMAIL</a>
            <a className="font-label text-[10px] text-on-surface-variant hover:text-primary transition-colors uppercase"
              href="https://github.com/l3gitok/CKCNNT" target="_blank" rel="noopener noreferrer">PROJECTS</a>
          </div>
        </div>
      </div>
    </section>
  );
}
