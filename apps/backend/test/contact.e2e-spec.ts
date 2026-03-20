import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

// Mock Supabase and Resend
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn().mockReturnThis(),
    insert: jest.fn().mockResolvedValue({ error: null }),
  })),
}));

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ error: null }),
    },
  })),
}));

describe('ContactController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    // Provide env vars for the mock
    process.env.SUPABASE_URL = 'http://mock.supabase.co';
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'mock-key';
    process.env.RESEND_API_KEY = 'mock-resend-key';
    process.env.OWNER_EMAIL = 'test@example.com';

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/contact (POST) - Valid Data', () => {
    return request(app.getHttpServer())
      .post('/contact')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello, this is a test message with enough length.',
      })
      .expect(200)
      .expect({ success: true, message: 'Message received!' });
  });

  it('/contact (POST) - Invalid Email', () => {
    return request(app.getHttpServer())
      .post('/contact')
      .send({
        name: 'John Doe',
        email: 'not-an-email',
        message: 'Hello, this is a test message.',
      })
      .expect(400);
  });

  it('/contact (POST) - Message Too Short', () => {
    return request(app.getHttpServer())
      .post('/contact')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Short',
      })
      .expect(400);
  });
});
