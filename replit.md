# Fourth Dimension Tech

## Overview

Fourth Dimension Tech is a woman-owned technology consultancy website built as a full-stack application. The site showcases technology services including data services, cloud engineering, quality engineering, product engineering, and AI solutions. It targets industries like banking, insurance, and transportation. The application features a contact form that stores inquiries in a database and optionally sends email notifications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **State Management**: TanStack React Query for server state and data fetching
- **Animations**: Framer Motion for page transitions and UI animations
- **UI Components**: Extensive shadcn/ui component library with Radix UI primitives

The frontend follows a pages-based structure where each route maps to a component in `client/src/pages/`. Shared components live in `client/src/components/` with UI primitives in the `ui/` subdirectory.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with tsx for TypeScript execution
- **API Design**: RESTful endpoints under `/api/` prefix
- **Build Strategy**: esbuild for server bundling with selective dependency bundling to optimize cold start times

The server uses a simple architecture with routes defined in `server/routes.ts` and storage abstraction in `server/storage.ts`. Development uses Vite middleware for HMR while production serves static files from the built output.

### Data Storage
- **Database**: PostgreSQL via Neon serverless driver
- **ORM**: Drizzle ORM with Zod schema validation
- **Schema Location**: `shared/schema.ts` contains all table definitions shared between client and server
- **Tables**: 
  - `users`: Basic user authentication (id, username, password)
  - `inquiries`: Contact form submissions (name, company, email, message)

### Code Organization
- `client/`: Frontend React application
- `server/`: Backend Express application  
- `shared/`: Shared types and database schema
- `migrations/`: Drizzle database migrations

## External Dependencies

### Third-Party Services
- **Resend**: Email delivery service for contact form notifications (optional, requires `RESEND_API_KEY`)
- **Neon**: Serverless PostgreSQL database (requires `DATABASE_URL`)

### Key Libraries
- **@neondatabase/serverless**: PostgreSQL client for serverless environments
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas
- **@tanstack/react-query**: Data fetching and caching
- **framer-motion**: Animation library
- **Radix UI**: Accessible component primitives (accordion, dialog, dropdown, tabs, etc.)

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `RESEND_API_KEY`: Resend API key for email notifications (optional)