# ARCHITECT_CONSOLE | DevOps Portfolio

Welcome to the **ARCHITECT_CONSOLE** repository, a comprehensive DevOps & Cloud Engineering portfolio showcasing infrastructure design, scalable applications, and CI/CD pipelines.

> [!TIP]
> **Check out the [Architecture Decisions & Case Study](docs/architecture-decisions.md)** to understand the "Why" behind the "How".

## Tech Stack

This repository is built as a monorepo containing a full-stack application and its supporting infrastructure.

### Frontend (`apps/frontend`)
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Testing:** [Playwright](https://playwright.dev/) for End-to-End (E2E) testing
- **Optimizations:** `next/image` for dynamic image resolving and integrated OpenGraph/Twitter SEO tags.

### Backend (`apps/backend`)
- **Framework:** [NestJS](https://nestjs.com/)
- **Database integration:** [Supabase](https://supabase.com/)
- **Testing:** [Jest](https://jestjs.io/) for robust unit testing

### Infrastructure
- **Containerization:** Docker & Docker Compose (`docker-compose.yml`)

## Getting Started

### Prerequisites
- Node.js (v20+)
- Docker & Docker Compose (for local database/services if applicable)
- npm or yarn

### Installation
Clone the repository and install dependencies for both applications:
```bash
# Install backend dependencies
cd apps/backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Running Locally
To spin up the development servers:

**Backend (Port 3001 or as configured):**
```bash
cd apps/backend
npm run start:dev
```

**Frontend (Port 3000):**
```bash
cd apps/frontend
npm run dev
```

### Testing
Both applications feature modern testing suites.

**Backend Unit Tests:**
```bash
cd apps/backend
npm run test
```

**Frontend E2E Tests:**
Ensure the development server can be spawned, then run Playwright:
```bash
cd apps/frontend
npx playwright test
```

## SEO & Analytics
The application is pre-configured with Google Analytics (`gtag.js`). To enable tracking in production, provide the `NEXT_PUBLIC_GA_ID` environment variable.

---
*Developed by Nguyễn Đức Tuấn - Cloud & DevOps Engineer*
