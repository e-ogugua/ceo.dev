# CEO Portfolio - Chukwuka Emmanuel Ogugua

A comprehensive business platform and portfolio website for Emmanuel Chukwuka Ogugua, showcasing expertise as a Software Engineer and Business Strategist. Built with Next.js 15, TypeScript, and Tailwind CSS, this platform enables seamless client engagement and business development.

## Key Features

### Business Services Platform
- Multi-Service Forms: Dedicated contact forms for Web Development, Business Strategy Consulting, Technical Consulting, and Professional Training
- Budget-Aware Pricing: Forms capture client budget ranges and project requirements
- Client Type Support: Forms tailored for customers, employers, collaborators, and investors
- Email Integration: Automatic notifications sent to emmachuka@gmail.com

### Subscription System
- Newsletter Subscription: Stay updated with insights and updates
- Blog Updates: Get notified about new articles and tutorials
- Learning Hub: Access to educational content and resources
- Supabase Integration: All subscriptions stored securely in database

### Interactive Portfolio
- Hero Section: Dynamic showcase of developer and strategist personas
- Service Pages: Detailed information for each service offering
- Project Portfolio: Showcase of development work and business ventures
- Blog and Articles: Technical insights and business strategy content
- Learning Resources: Educational content and tutorials

### Modern UI/UX
- Responsive Design: Mobile-first approach, works on all devices
- Glassmorphism Design: Modern, elegant visual design
- Smooth Animations: Framer Motion powered interactions
- Dark Mode Support: Theme switching capability

## Tech Stack

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: Lucide React
- Database: Supabase (PostgreSQL)
- Email: Nodemailer with Gmail SMTP
- Deployment: Vercel
- Forms: Custom React components with validation

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/e-ogugua/ceo.dev.git
cd ceo.dev
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

Edit .env.local with your actual values:
```bash
# Email Configuration (Required)
SMTP_USER=e.ogugua.dev@gmail.com
SMTP_PASS=your-gmail-app-password
ORDER_EMAIL_FROM=e.ogugua.dev@gmail.com
ORDER_NOTIFICATIONS_EMAIL=emmachuka@gmail.com

# Supabase Configuration (Required for subscriptions)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# EmailJS Configuration (Optional)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
```

4. Set up Supabase Database
```bash
# Run the database setup script in Supabase dashboard
# File: supabase-setup.sql
```

5. Run development server
```bash
npm run dev
```

6. Build for production
```bash
npm run build
```

## Service Offerings

### Web Development Services
- Custom Web Applications
- Responsive Design
- E-commerce Solutions
- API Integration
- Performance Optimization

### Business Strategy Consulting
- Business Model Analysis
- Growth Strategy Development
- Market Research
- Competitive Analysis
- Strategic Planning

### Technical Consulting
- Technology Assessment
- Architecture Review
- Performance Optimization
- Security Consulting
- Team Training

### Professional Training
- Technical Workshops
- Business Strategy Training
- Leadership Development
- Custom Training Programs
- Mentorship

## Client Engagement

### For Customers
- Fill out project-specific forms with budget requirements
- Get detailed proposals within 24 hours
- Direct communication for project discussions

### For Employers
- Submit hiring requirements and team needs
- Receive candidate assessment within 48 hours
- Discuss team integration and onboarding

### For Collaborators
- Propose joint projects and partnerships
- Share collaboration opportunities
- Connect for mutual growth initiatives

### For Investors
- Submit investment opportunities
- Discuss partnership structures
- Explore joint venture possibilities

## Contact and Notifications

- Primary Email: emmachuka@gmail.com
- Business Email: e.ogugua.dev@gmail.com
- Location: Enugu, Nigeria

All form submissions automatically send email notifications with complete project details and client requirements.

## Deployment

### Production Deployment
```bash
# Deploy to Vercel
vercel --prod

# Or via GitHub integration (automatic on push to main)
```

### Environment Setup
1. Create Gmail App Password for SMTP
2. Set up Supabase project and run supabase-setup.sql
3. Configure environment variables in Vercel dashboard
4. Deploy and test all forms and subscriptions

## Project Structure

```
ceo.dev/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── api/            # API routes (contact, subscriptions)
│   │   ├── services/       # Service pages with forms
│   │   └── components/     # Reusable UI components
│   ├── components/         # Shared components
│   └── lib/               # Utilities (Supabase client)
├── supabase/              # Database configuration
├── public/               # Static assets
└── .env.example          # Environment variables template
```

## Development Workflow

1. Feature Development: Create branches for new features
2. Testing: Test all forms and subscriptions locally
3. Commit: Use conventional commit messages
4. Deploy: Push to main for automatic deployment
5. Monitor: Check email notifications and Supabase dashboard

## Performance and SEO

- Lighthouse Score: 95+ across all metrics
- Core Web Vitals: Optimized for excellent user experience
- SEO Ready: Proper meta tags and structured data
- Mobile First: Responsive design for all devices

## Contributing

For collaborations or contributions:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC License - See LICENSE file for details

## Acknowledgments

Built by EmmanuelOS - CEO, Chukwuka Emmanuel Ogugua

---

Visit the live site or fill out one of the service-specific forms to get started.

Live Demo: https://ceodev.vercel.app/

Contact: emmachuka@gmail.com | e.ogugua.dev@gmail.com
