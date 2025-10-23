# CEO Portfolio Platform

Professional portfolio and business development platform for Emmanuel Chukwuka Ogugua, combining software engineering expertise with business strategy consulting. Built to streamline client acquisition and project management through integrated contact forms and portfolio presentation.

## Project Purpose

This platform serves as both a technical portfolio and business development tool, enabling direct client engagement across multiple service verticals. The architecture supports real-time form submissions, subscription management, and responsive portfolio presentation while maintaining professional standards for accessibility and performance.

## Technical Architecture

### Frontend Architecture
- **Next.js 15 App Router**: Server-side rendering with App Router for optimal performance and SEO
- **TypeScript**: Full type safety across all components and API routes
- **Component Architecture**: Modular component system with dynamic imports for code splitting
- **State Management**: React Server Components with client-side interactivity where needed

### Styling and UI
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Performance-optimized animations with accessibility considerations
- **Responsive Design**: Mobile-first approach with consistent breakpoints
- **Dark Theme**: Unified dark theme baseline with glassmorphism effects

### Backend Integration
- **Supabase**: PostgreSQL database for subscription and form data management
- **Email Integration**: Nodemailer with Gmail SMTP for automated notifications
- **API Routes**: Next.js API routes for form handling and data processing

## Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Framework** | Next.js 15 | App Router, SSR, performance optimization |
| **Language** | TypeScript | Type safety, developer experience |
| **Styling** | Tailwind CSS | Responsive design, component styling |
| **Animation** | Framer Motion | Smooth interactions, accessibility |
| **Icons** | Lucide React | Consistent iconography |
| **Database** | Supabase | Data persistence, user management |
| **Email** | Nodemailer | Automated notifications |
| **Deployment** | Vercel | Production hosting, CDN |

## Installation and Setup

### Prerequisites
- Node.js 18 or later
- npm or pnpm package manager
- Git for version control

### Quick Start

```bash
# Clone the repository
git clone https://github.com/e-ogugua/ceo.dev.git
cd ceo.dev

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```bash
# Required: Email Configuration
SMTP_USER=e.ogugua.dev@gmail.com
SMTP_PASS=your-gmail-app-password
ORDER_EMAIL_FROM=e.ogugua.dev@gmail.com
ORDER_NOTIFICATIONS_EMAIL=emmachuka@gmail.com

# Required: Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Optional: EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
```

Initialize the database:

```bash
# Execute the Supabase setup script in your Supabase dashboard
# File: supabase-setup.sql contains all required table schemas
```

Start development server:

```bash
npm run dev
```

Access the application at `http://localhost:3000`.

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm run start

# Analyze bundle size (optional)
ANALYZE=true npm run build
```

## Project Structure

```
ceo.dev/
├── src/
│   ├── app/                    # Next.js App Router pages and API routes
│   │   ├── api/               # Serverless API endpoints (forms, subscriptions)
│   │   ├── services/          # Service-specific pages with contact forms
│   │   ├── portfolio-ventures/ # Portfolio and ventures showcase
│   │   └── components/        # Page-level components
│   ├── components/            # Reusable UI components
│   │   ├── forms/             # Form components with validation
│   │   ├── layout/           # Navigation, footer, layout components
│   │   └── features/          # Feature-specific components
│   └── lib/                   # Utility functions and configurations
├── supabase/                  # Database migrations and configuration
├── public/                   # Static assets and images
├── scripts/                  # Build and deployment utilities
└── configuration files       # Next.js, TypeScript, Tailwind configs
```

## Development Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run test` | Run Jest test suite |
| `npm run analyze` | Analyze bundle size and dependencies |
| `npm run deploy` | Deploy to Vercel production environment |

## Deployment

### Automatic Production Deployment
The project is configured for **automatic production deployment** through GitHub Actions. Every push to the `main` branch triggers:

1. **Automated Testing**: All tests run to ensure code quality
2. **Production Build**: Optimized build is created
3. **Vercel Deployment**: Deployed to production environment (not preview)

### GitHub Actions Workflow
- **File**: `.github/workflows/deploy-production.yml`
- **Trigger**: Push to `main` branch or manual workflow dispatch
- **Environment**: Production deployment with all environment variables
- **Testing**: Full test suite runs before deployment

### Manual Deployment Options

#### Vercel CLI (Alternative)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to production
vercel --prod

# Set production environment variables
vercel env add SMTP_USER production
vercel env add SMTP_PASS production
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
```

#### Direct Push Method
```bash
# Push to main branch (triggers automatic deployment)
git add .
git commit -m "feat: update for production deployment"
git push origin main
```

### Environment Variables Setup

**Required for Production:**
```bash
# Email Configuration (Gmail SMTP)
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
ORDER_EMAIL_FROM=your-email@gmail.com
ORDER_NOTIFICATIONS_EMAIL=admin@yourdomain.com

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Vercel Configuration (for GitHub Actions)
VERCEL_TOKEN=your-vercel-token
VERCEL_ORG_ID=your-org-id
VERCEL_PROJECT_ID=your-project-id
```

**Note:** Set these as GitHub repository secrets for automatic deployment to work properly.

### Performance Considerations
- **Image Optimization**: Next.js Image component with WebP/AVIF formats
- **Bundle Splitting**: Dynamic imports for non-critical components
- **Caching**: 1-year cache TTL for optimized images
- **Compression**: Gzip enabled for 60-80% size reduction

## Architecture Decisions

- **App Router**: Used for improved performance and SEO over Pages Router
- **Dynamic Imports**: Implemented to reduce initial bundle size by 15-66% through code splitting
- **Server Components**: Used for static content to improve performance and reduce JavaScript bundle size
- **Client Components**: Used only for interactive elements requiring browser APIs
- **Glassmorphism Design**: Applied for modern aesthetic while maintaining accessibility contrast requirements
- **Form Validation**: Client-side validation with server-side processing to ensure data integrity

## Contributing

See [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md) for development workflow and conventions.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines and pull request standards.

## License

ISC License

## Support

For technical issues or questions about the codebase:
- Create an issue in the GitHub repository
- Review the development guide for architecture details
- Check the changelog for recent updates

Developed by CEO – Chukwuka Emmanuel Ogugua
