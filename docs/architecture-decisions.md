# Case Study: ARCHITECT_CONSOLE Architecture

##  Project Overview
This portfolio is designed to showcase not just code, but **Engineering Decisions**. The goal was to build a secure, scalable, and observable system using modern cloud-native patterns.

##  Technical Decisions

### 1. Why NestJS?
- **Modularity**: NestJS's module-based architecture allows for a clean separation of concerns (e.g., `ContactModule`).
- **Type Safety**: Built with TypeScript from the ground up, reducing runtime errors.
- **Middleware Support**: Easy integration for observability (Pino) and security (Throttler).

### 2. Why Next.js 15?
- **Server Components**: Leveraged for performance and SEO.
- **App Router**: Provides a modern, intuitive routing system.
- **Optimization**: Built-in support for image optimization and metadata management.

### 3. Database & Storage: Supabase
- **Postgres-as-a-Service**: High reliability without the overhead of managing a database server.
- **Row Level Security (RLS)**: Essential for a secure public-facing contact form.
- **Developer Experience**: Simple API and excellent dashboard.

### 4. Email Service: Resend
- **Modern API**: Clean, developer-friendly SDK compared to older SMTP-based solutions.
- **Reliability**: High delivery rates and easy tracking.

##  Deployment & CI/CD Flow
The project uses a complete automated pipeline:
1. **Linting & Formatting**: Ensures code quality across the monorepo.
2. **Security Scanning**: `npm audit` integrated into the CI to detect vulnerable dependencies.
3. **Automated Testing**:
   - **Backend**: Jest for unit and integration tests.
   - **Frontend**: Playwright for E2E flows (simulating real user interactions).
4. **Containerization**: Docker Compose for consistent local development and production-ready images.

##  Security Hardening
- **Rate Limiting**: Throttling requests to prevent brute-force/DOS attacks on the contact API.
- **Validation**: Strict DTO validation using `class-validator`.
- **Honeypot**: Client-side field to trap simple spam bots.
- **Environment Isolation**: Secure management of secrets via GitHub Secrets.

##  Observability
- **Structured Logging**: Using Pino for machine-readable logs.
- **Tracing**: Request-ID assigned to every incoming contact request for easy debugging.
