# Development Guide

Technical documentation for developers working on the CEO Portfolio Platform. This guide covers project structure, coding conventions, theming implementation, and development workflows.

## Project Structure

### Directory Overview

```
src/
├── app/                          # Next.js App Router (pages and API routes)
│   ├── api/                      # Serverless API endpoints
│   │   ├── contact/              # Contact form processing
│   │   ├── newsletter/           # Subscription management
│   │   └── [...other routes]     # Additional API endpoints
│   ├── services/                 # Service-specific pages
│   │   ├── custom-development/   # Web development service page
│   │   ├── business-strategy/    # Strategy consulting page
│   │   ├── training/             # Training services page
│   │   └── consulting/           # Technical consulting page
│   ├── portfolio-ventures/       # Portfolio and business ventures page
│   ├── about/                    # About page
│   ├── blog/                     # Blog pages
│   ├── learn/                    # Learning resources
│   ├── contact/                  # Contact page
│   ├── story/                    # Personal story page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Home page
├── components/                   # Reusable UI components
│   ├── forms/                    # Form components with validation
│   │   ├── BusinessDealForm.tsx  # Multi-step business inquiry form
│   │   ├── ContactForm.tsx       # General contact form
│   │   └── ServiceContactForm.tsx # Service-specific contact forms
│   ├── layout/                   # Layout and navigation components
│   │   ├── Navigation.tsx        # Main navigation bar
│   │   ├── Footer.tsx            # Site footer
│   │   └── ThemeToggle.tsx       # Dark/light theme switcher
│   ├── features/                 # Feature-specific components
│   │   ├── HeroSection.tsx       # Main hero component
│   │   ├── PortfolioHero.tsx     # Portfolio-specific hero
│   │   ├── ServicesHero.tsx      # Services hero section
│   │   └── BlogHero.tsx          # Blog hero component
│   ├── DynamicComponents.tsx     # Dynamic imports for code splitting
│   └── [...other components]     # Additional UI components
└── lib/                          # Utilities and configurations
    ├── supabase.ts               # Supabase client configuration
    └── utils.ts                  # General utility functions
```

### Component Organization

Components are organized by functionality:

- **Forms**: All form components with validation logic
- **Layout**: Navigation, footer, and structural components
- **Features**: Page-specific feature components
- **Dynamic**: Components using dynamic imports for performance

## Coding Conventions

### TypeScript Standards

#### Component Structure
```typescript
// Component file naming: PascalCase
// Export naming: PascalCase
export function ComponentName() {
  // Component implementation
}

// Props interface naming: PascalCase + Props
interface ComponentNameProps {
  // Props definition
}
```

#### Type Definitions
```typescript
// Use strict typing for all props and state
interface ProjectData {
  id: number
  title: string
  description: string
  image: string
  category: string
  status: string
  techStack: string[]
  features: string[]
  liveUrl: string
  githubUrl: string
  year: string
}

// Avoid any types; use specific types or generics
type ComponentVariant = 'default' | 'minimal' | 'hero'
```

### Component Patterns

#### Dynamic Imports
Dynamic imports are used for code splitting to reduce initial bundle size:

```typescript
// DynamicComponents.tsx - Centralized dynamic imports
const DynamicBusinessVentures = dynamic(
  () => import('@/components/BusinessVentures'),
  {
    loading: () => <LoadingSkeleton />,
    ssr: true  // Enable server-side rendering for SEO
  }
)

const DynamicDevelopmentPortfolio = dynamic(
  () => import('@/components/DevelopmentPortfolio'),
  {
    loading: () => <LoadingSkeleton />,
    ssr: true
  }
)
```

#### Form Components
Form components follow a consistent pattern:

```typescript
// Form state management
const [formData, setFormData] = useState<FormDataType>(initialState)
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
const [errors, setErrors] = useState<Record<string, string>>({})

// Validation function
const validateForm = useCallback(() => {
  // Validation logic
}, [formData])

// Submission handler
const handleSubmit = useCallback(async (e: FormEvent) => {
  // Form submission logic
}, [formData])
```

## Theming System

### Design System Architecture

#### Color Palette
The project uses a unified dark theme with consistent color tokens:

```typescript
// Tailwind configuration - Custom color system
colors: {
  // Brand colors
  primary: '#00A3FF',     // Bright blue for CTAs
  secondary: '#5AC8FA',   // Ice blue for accents

  // Theme colors
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    // ... extended palette
    900: '#0f172a',
    950: '#020617',
  }
}
```

#### Responsive Breakpoints
Standard Tailwind breakpoints with mobile-first approach:

```css
/* Mobile-first responsive classes */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
2xl: 1536px /* Extra large screens */
```

### Component Theming

#### Consistent Spacing
```typescript
// Use Tailwind spacing scale consistently
p-4    /* 16px padding - standard component padding */
p-6    /* 24px padding - larger components */
p-8    /* 32px padding - page sections */
gap-4  /* 16px gaps - standard spacing */
gap-6  /* 24px gaps - larger elements */
```

#### Typography Scale
```typescript
// Consistent heading hierarchy
text-2xl md:text-3xl  /* Main headings */
text-xl md:text-2xl   /* Section headings */
text-lg               /* Subheadings */
text-base             /* Body text */
text-sm               /* Small text, labels */
text-xs               /* Metadata, badges */
```

#### Animation Standards
```typescript
// Consistent animation timing
transition-all duration-300  /* Standard transitions */
transition-all duration-200  /* Fast interactions */

// Framer Motion patterns
whileHover={{ scale: 1.05 }}           /* Button hover */
whileTap={{ scale: 0.95 }}             /* Button press */
initial={{ opacity: 0, y: 20 }}        /* Fade in up */
whileInView={{ opacity: 1, y: 0 }}     /* Scroll-triggered */
```

### Accessibility Considerations

#### Touch Targets
All interactive elements meet WCAG 2.1 AA standards:
```typescript
// Minimum 44px touch targets
min-h-[44px] min-w-[44px]  /* Buttons and links */
py-3 px-6                  /* Adequate padding */
```

#### Motion Preferences
Animations respect user preferences:
```typescript
// Reduced motion support
whileHover={
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? { scale: 1.05 }
    : {}
}
```

#### Color Contrast
All text meets contrast requirements:
```typescript
// High contrast combinations
text-slate-100    /* White text on dark backgrounds */
text-slate-300    /* Light gray for secondary text */
text-slate-400    /* Muted text for metadata */
```

## Development Scripts

### Available Commands

| Command | Purpose | Usage |
|---------|---------|-------|
| `npm run dev` | Development server | Local development with hot reload |
| `npm run build` | Production build | Optimized build for deployment |
| `npm run start` | Production server | Start built application |
| `npm run lint` | Code linting | ESLint checks for code quality |
| `npm run analyze` | Bundle analysis | Analyze bundle size and dependencies |

### Development Workflow

#### Local Development
```bash
# 1. Start development server
npm run dev

# 2. Open browser to http://localhost:3000

# 3. Make changes and see live updates
```

#### Code Quality
```bash
# Run linting
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

#### Bundle Analysis
```bash
# Analyze bundle size and dependencies
ANALYZE=true npm run build
```

## Component Development

### Creating New Components

#### File Structure
```typescript
// components/FeatureName.tsx
'use client'  // If component uses browser APIs

import { motion } from 'framer-motion'
import { ComponentIcon } from 'lucide-react'

interface FeatureNameProps {
  variant?: 'default' | 'minimal'
  className?: string
}

export function FeatureName({ variant = 'default', className }: FeatureNameProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={className}
    >
      {/* Component implementation */}
    </motion.section>
  )
}
```

#### Responsive Design
```typescript
// Mobile-first responsive patterns
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"

// Typography scaling
className="text-xl md:text-2xl lg:text-3xl font-bold"

// Spacing consistency
className="px-4 sm:px-6 lg:px-8 py-8 md:py-12"
```

### Form Development

#### Form Validation Pattern
```typescript
// Consistent validation approach
const validateForm = (data: FormData): Record<string, string> => {
  const errors: Record<string, string> = {}

  if (!data.email) {
    errors.email = 'Email is required'
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  // Additional validation...

  return errors
}

// Form submission with loading states
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()

  const validationErrors = validateForm(formData)
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors)
    return
  }

  setStatus('loading')

  try {
    // API call
    setStatus('success')
  } catch (error) {
    setStatus('error')
  }
}
```

## Performance Optimization

### Bundle Splitting
Dynamic imports reduce initial bundle size:

```typescript
// DynamicComponents.tsx - Performance optimization
export const DynamicBusinessVentures = dynamic(
  () => import('@/components/BusinessVentures'),
  {
    loading: () => <BusinessVenturesSkeleton />,
    ssr: false  // Client-side only for forms
  }
)
```

### Image Optimization
```typescript
// Responsive image sizing
<Image
  src="/path/to/image.jpg"
  alt="Description"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>
```

### Animation Performance
```typescript
// Optimized animations
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}  // Only animate once
transition={{ duration: 0.5, delay: index * 0.08 }}  // Staggered timing
```

## Testing and Quality Assurance

### Code Quality Standards
- **ESLint**: All code must pass linting without errors
- **TypeScript**: Strict type checking enabled
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Core Web Vitals optimization

### Component Testing
```typescript
// Test component rendering
// Test form validation
// Test responsive behavior
// Test accessibility features
```

## Deployment Considerations

### Environment Variables
All environment variables are documented in `.env.example` and must be configured for deployment:

```bash
# Production environment setup
NEXT_PUBLIC_SUPABASE_URL=https://production-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=production-anon-key
SMTP_USER=production-email@gmail.com
SMTP_PASS=production-app-password
```

### Build Optimization
The build process includes several optimizations:
- **Tree Shaking**: Unused code elimination
- **Minification**: JavaScript and CSS compression
- **Image Optimization**: WebP/AVIF format conversion
- **Caching**: Long-term caching for static assets

## Architecture Patterns

### Component Composition
Components are designed for reusability and composition:

```typescript
// Hero sections share common patterns
interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  ctaButton?: ReactNode
}

export function HeroSection({ title, subtitle, backgroundImage, ctaButton }: HeroProps) {
  // Shared hero implementation
}
```

### State Management
- **Server State**: API routes handle data fetching and mutations
- **Client State**: React state for UI interactions and form data
- **Global State**: Theme preferences and user settings

### Error Handling
```typescript
// Consistent error handling patterns
try {
  // API call or operation
} catch (error) {
  console.error('Operation failed:', error)
  setStatus('error')
  setMessage('An error occurred. Please try again.')
}
```

## Maintenance Guidelines

### Code Organization
- **Single Responsibility**: Each component has one clear purpose
- **DRY Principle**: Avoid code duplication through shared utilities
- **Consistent Naming**: Use descriptive names for functions and variables
- **Documentation**: Add JSDoc comments for complex functions

### Performance Monitoring
- **Bundle Analysis**: Use `npm run analyze` before releases
- **Lighthouse**: Regular performance and accessibility audits
- **Error Tracking**: Monitor console errors in production

Developed by CEO – Chukwuka Emmanuel Ogugua
