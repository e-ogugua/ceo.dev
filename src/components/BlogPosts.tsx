'use client'

import { motion } from 'framer-motion'
import { Clock, Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
const blogPosts = [
  {
    id: 1,
    title: 'Bridging the Gap: From Logic Gates to Leadership',
    excerpt: 'A narrative piece detailing my transition and growth from a technical role to leading businesses like CEOTR and PoshPOULE, highlighting key lessons learned in merging technical acumen with strategic leadership.',
    category: 'Personal Journey',
    readTime: '8 min read',
    publishedDate: '2024-01-15',
    author: 'Emmanuel Chukwuka Ogugua',
    featured: true,
    slug: 'bridging-the-gap-logic-gates-leadership',
    image: '/images/blogPostBridgingTheGap.webp',
    content: `
# Bridging the Gap: From Logic Gates to Leadership

Have you ever found yourself drawn to two seemingly different worlds? For many of us in the tech space, it starts with a fascination for logic. The satisfaction of a perfectly written line of code, the elegance of a robust system architecture, the thrill of debugging a complex problem – these are the foundational joys that pull us into software development.

My own early journey was no different. I spent years immersed in the technical side: understanding how computers worked, troubleshooting systems, and building digital solutions. The world of IT and coding felt like a puzzle, constantly challenging me to find the most efficient and beautiful answers. It was about mastering the tools, understanding the languages, and bringing digital concepts to life, one meticulous step at a time.

But as I honed my technical craft, I began to see another dimension. I realized that the most brilliant code, the most sophisticated system, only truly shines when it serves a purpose in the real world. It's not enough for an application to run flawlessly; it needs to solve a genuine problem, create value for users, and contribute to a larger vision.

This awareness sparked a new kind of curiosity – one that veered into the realm of business. I started asking questions that went beyond syntax and algorithms:
- How does this technology translate into market opportunity?
- What strategic decisions drive successful product adoption?
- How do you build a team, nurture a brand, and navigate the complexities of an industry?

This wasn't a sudden leap, but a gradual, organic transition. It was about recognizing that the same problem-solving mindset I applied to debugging code could be equally powerful in dissecting market trends or crafting a compelling business strategy. The discipline of development taught me iteration, resilience, and attention to detail, all invaluable traits when launching a new venture or leading a team.

The 'gap' between code and co-founder isn't really a gap at all; it's a bridge. A bridge built with technical proficiency on one side and strategic foresight on the other. It's understanding that a successful product requires both elegant engineering and a clear business model. A thriving team needs both technical leadership and visionary direction.

For anyone who feels this dual pull, who loves the logic of code but also dreams of shaping markets and leading ventures, the journey is about integrating these passions. It's about seeing technology not just as an end in itself, but as a powerful lever for strategic growth. It's a continuous learning process, where every line of code informs a business decision, and every business challenge inspires a new technical solution.

Embrace both sides. That's where true innovation often lies.

Have you experienced a similar journey bridging different disciplines? Share your insights below!
    \\`
  },
  {
    id: 2,
    title: 'Beyond the Screen: How Gardening Sharpens My Problem-Solving Skills',
    excerpt: 'This post leverages my "Gardening is my therapy" fact. Explore the surprising parallels between nurturing a garden and debugging code or growing a business.',
    category: 'Personal Growth',
    readTime: '8 min read',
    publishedDate: '2024-01-10',
    author: 'Emmanuel Chukwuka Ogugua',
    featured: true,
    slug: 'gardening-problem-solving',
    image: '/images/blogPostBeyondTheScreens.webp',
    content: `
# Beyond the Screen: How Gardening Sharpens My Problem-Solving Skills

Some days, the code just refuses to make sense. The logic is clean, the syntax checks out, but something still breaks. That kind of frustration sits heavy — like a stone in your chest. On days like that, I step away from the laptop and head outside.

The air hits different on the farm. Warm, a little dusty, carrying the faint smell of earth and poultry feed. I don't go out there with a plan — I just start doing small things. Pulling weeds, checking the beds, clearing the path by the cassava rows. My mind, still buzzing from code, slowly starts to quiet down.

One evening, I was stuck on a backend issue that had eaten half my day. I'd rewritten the same function five times, convinced the bug was hiding in my logic. It wasn't. Frustration pushed me outside. The sun was slipping behind the trees, painting everything gold. I noticed some plants drooping — their leaves tired, edges curling.

I fetched the watering can. As I poured, the soil soaked unevenly. Some patches stayed dry even after a good soak. I dug a bit deeper and realized the compost mix underneath was too compact — water couldn't get through. The roots were struggling, not because they lacked water, but because I hadn't prepared the base well enough.

It clicked. My code problem wasn't in the visible logic; it was buried in the setup — a missed environment variable choking the process. I laughed out loud, half from relief, half from the irony. Farming had debugged my code.

That's been the quiet gift of working the soil. It slows me down, forces me to observe instead of rush. Plants don't argue back, they just reflect what's working and what's not. You can't trick them with shortcuts — same way clean code can't hide under clever syntax.

These days, when I hit a wall in my projects, I don't panic. I step away, get my hands dirty, and listen. The garden always finds a way to speak back — sometimes in wilted leaves, sometimes in new sprouts. And somewhere between both worlds — the soil and the screen — I keep learning what real problem-solving looks like.

— Emmanuel Ogugua
    \\`
  },
  {
    id: 3,
    title: 'The Digital Farmer: Leveraging Tech for Sustainable Agriculture (Lessons from PoshPOULE)',
    excerpt: 'Dive into my experience with PoshPOULE Farms Ltd. Discuss specific technologies or strategic approaches for making organic farming more efficient and sustainable.',
    category: 'Business Strategy',
    readTime: '12 min read',
    publishedDate: '2024-01-08',
    author: 'Emmanuel Chukwuka Ogugua',
    featured: true,
    slug: 'digital-farmer-poshpoule',
    image: '/images/blogPostDigitalFarmer.webp',
    content: `
# The Digital Farmer: Leveraging Tech for Sustainable Agriculture (Lessons from PoshPOULE)

At first glance, farming and technology might seem like strangers. One smells of soil, the other hums with circuits. But at PoshPOULE Farms Ltd, I've spent years proving they can not only coexist — they can strengthen each other.

When we started, the goal was simple: grow clean, organic food while keeping the process efficient and scalable. The challenge? Organic farming thrives on intuition and observation — two things that can be unpredictable. I knew if we could bring data and structure into that mix, we could create something truly sustainable.

Smart Systems, Simple Tools
We began small. A digital logbook replaced paper records for feed schedules, egg counts, and weather conditions. It wasn't fancy, but it brought consistency. With time, we integrated basic IoT sensors to monitor temperature and humidity in the poultry houses — data that used to rely on guesswork now lived on my phone.

These small changes had a big effect. Productivity improved because decisions became data-driven. Instead of reacting to problems, we could anticipate them. When humidity rose too high, we got alerts before it affected the birds. When feed consumption dropped, it flagged possible health issues early.

Strategy Meets Soil
Technology was only part of the story. The other half was strategy — building systems that could scale without losing authenticity. We leaned on local partnerships for organic input sourcing, trained staff to use digital tools, and set up structured feedback loops. Every week's data helped shape the next week's plan.

We also began exploring blockchain-based traceability models — a way for customers to scan a code and see where their food came from, when it was harvested, and how it was handled. Transparency isn't just marketing; it's trust.

A Vision for the Future
The future I see for PoshPOULE is one where farms operate like smart ecosystems. Imagine an AI dashboard that tracks soil health, predicts yield, and automates irrigation based on live weather data. Farmers become analysts and strategists, guiding systems instead of fighting fires.

For me, "The Digital Farmer" isn't about trading hands-on work for screens. It's about balance — using technology to give farmers more control, insight, and sustainability. It's the same principle that drives my approach to tech startups: build tools that empower, not replace.

At PoshPOULE, every harvest is a reminder that innovation doesn't have to come from a lab — sometimes, it grows straight out of the soil.

— Emmanuel Ogugua
    \\`
  },
  {
    id: 4,
    title: 'My Go-To Tech Stack for Building Robust Web Applications in 2025',
    excerpt: 'A practical post detailing my preferred tools and frameworks for full-stack development, including why I chose them and introducing EmmanuelOS.',
    category: 'Technology',
    readTime: '10 min read',
    publishedDate: '2024-01-05',
    author: 'Emmanuel Chukwuka Ogugua',
    featured: false,
    slug: 'tech-stack-2025',
    image: '/images/blogGotoTechStack.webp',
    content: `
# My Go-To Tech Stack for Building Robust Web Applications in 2025

If there's one thing I've learned after building and breaking countless apps, it's that your tech stack should work with you, not against you. The web world evolves fast, but 2025 feels different — tools are maturing, AI integration is becoming standard, and developers have more power than ever to ship scalable, polished products solo.

I've spent the past year refining my workflow across dozens of real-world projects, from experimental apps to systems that will eventually form the backbone of EmmanuelOS — my personal digital operating system that ties together all my apps, businesses, and productivity systems into one cohesive environment.

Here's the tech stack I now rely on to build robust, modern, and future-proof web apps.

\`1. Next.js — The Engine That Powers My Frontend
Next.js is my default framework for anything web-based. The combination of React + file-based routing + server actions makes it seamless to build fast, SEO-friendly apps without juggling separate frontend and backend repos.

In 2025, with Next.js 15's improvements in Server Components, React Compiler, and edge-first architecture, it's never felt smoother to scale projects from MVP to production. I use it for everything from dashboards to full SaaS platforms.

Why I love it: performance out of the box, flexibility with API routes, and a thriving ecosystem. It's also the ideal frontend layer for EmmanuelOS — handling all UI modules that plug into my core system.

\`2. Tailwind CSS — Clean Design, Minimal Effort
If you care about design but don't want to wrestle with CSS files all day, Tailwind is the way to go. It's lightweight, composable, and forces clarity in structure.

For me, Tailwind shines in its ability to keep interfaces consistent and fast to iterate. I pair it with Framer Motion for smooth transitions and shadcn/ui components for a clean, modern aesthetic.

Why I love it: fast prototyping, design precision, and no "CSS fatigue."

\`3. Supabase — My Default Backend-as-a-Service
I used to build APIs and auth flows manually with Django REST Framework or Node, but Supabase changed the game. It gives me PostgreSQL, Auth, Edge Functions, and Realtime out of the box — with strong open-source principles.

For EmmanuelOS, Supabase serves as a unified backend for multiple modules (productivity, finance, AI assistants). It handles user data securely while letting me scale without heavy infrastructure overhead.

Why I love it: It feels like Firebase for grown-ups — SQL-based, open, and infinitely customizable.

\`4. Python + Django (for Specialized Systems)
When a project needs deep business logic, data analytics, or AI integrations, Django still earns its place. Its ORM and admin panel make it unbeatable for data-heavy apps and internal tools.

In EmmanuelOS, Django handles the intelligence layer — managing analytics, automation scripts, and AI workflow orchestration that supports the various app modules.

Why I love it: battle-tested, structured, and perfect for serious backend logic.

\`5. GitHub + Vercel + Docker — My Deployment Trinity
GitHub handles my CI/CD workflows, while Vercel deploys all Next.js apps with ease. For complex systems or microservices, Docker keeps everything portable and environment-agnostic.

This trio ensures I can move from idea to live app in hours, not days.

Why I love it: reliability, automation, and zero-config deployments that scale.

\`6. AI Integration Layer
In 2025, every serious product has an AI layer. I integrate OpenAI API, LangChain, and lightweight Python agents to automate workflows and personalize user experiences.

For EmmanuelOS, AI isn't an add-on — it's woven into the architecture. Each module (whether it's finance, productivity, or business management) connects through an AI interface that learns and adapts to user behavior.

Why I love it: it turns apps into assistants.

\`Bringing It All Together — EmmanuelOS
Every app I build now lives as a future "module" inside EmmanuelOS — a digital operating system that combines my tools, ventures, and learning systems into one connected ecosystem.

Each module shares the same stack: Next.js + Supabase + Python at its core, styled with Tailwind, and enhanced by AI. It's modular, scalable, and deeply personal — designed to manage not just work, but life itself.

In a world overflowing with tech choices, simplicity wins. These tools keep me moving fast, staying creative, and building systems that last.

— Emmanuel Ogugua
    \\`
  },
  {
    id: 5,
    title: 'From Byte to Brand: Crafting a Compelling Identity in the Digital Age',
    excerpt: 'Share insights into building strong brand narratives and identities for new ventures. Draw on your experience in business development and strategic partnerships from CEOTR Limited.',
    category: 'Brand Strategy',
    readTime: '11 min read',
    publishedDate: '2024-01-03',
    author: 'Emmanuel Chukwuka Ogugua',
    featured: false,
    slug: 'from-byte-to-brand',
    image: '/images/blogPostByteToBrand.webp',
    content: `
# From Byte to Brand: Crafting a Compelling Identity in the Digital Age

In today's world, a brand isn't built in a boardroom — it's built in the little interactions people have with your product, your message, and your story. The digital age leveled the playing field. A startup with vision and clarity can stand shoulder-to-shoulder with established giants, as long as its brand feels real.

At CEOTR Limited, I've had the chance to work with emerging ventures trying to find their footing — from small local enterprises to growing tech startups. One pattern always stands out: many founders understand their product, but not their identity. And in the noise of today's online world, identity is what cuts through.

1. Your Brand Is a Promise, Not a Logo
When people think "brand," they often think colors, fonts, or taglines. Those are expressions — not the essence. A real brand starts with a clear promise: what do you stand for, and what will you consistently deliver?

For CEOTR, that promise has always been reliability and innovation in business systems. Every project, partnership, or communication flows from that core. It's the anchor that guides design, tone, and behavior.

If you're building your own venture, start there. Ask yourself: What do I want people to feel when they interact with us — trust, curiosity, empowerment, belonging? Then build everything else around that emotional truth.

2. Craft a Narrative, Not Just a Name
Stories move people more than specifications ever will. In an age where attention is scarce, your brand's story must feel alive. Talk about the "why" — the challenge you're solving, the journey behind it, and the humans making it happen.

When CEOTR started, our story was simple: two founders tired of fragmented business systems decided to build tools that actually made management easier. That authenticity resonated with partners more than any sales pitch could.

Your audience doesn't just want to know what you do — they want to know why it matters.

3. Build Consistency Into Every Touchpoint
A strong brand is predictable in the best way. Whether it's your website, emails, product UI, or how your team speaks on a call, the voice should feel unified.

Consistency isn't about sameness — it's about coherence. At CEOTR, we use digital brand systems that define tone, visual identity, and content rhythm. It helps our message stay aligned even as the company evolves.

If you're running lean, tools like Notion, Figma, or Framer can help you document and visualize your brand elements early on. Treat your brand kit like code — version, refine, and push updates when needed.

4. Authenticity Beats Perfection Every Time
The internet can spot insincerity instantly. The brands that win today are the ones that sound human — a little imperfect, but deeply consistent. Show your process. Share lessons learned. Let your audience grow with you.

Your brand doesn't need to shout; it just needs to resonate.

5. Bridge Strategy and Emotion
What makes a digital brand powerful isn't just great visuals or smart positioning — it's the balance between logic and feeling. A well-designed system tells people what you do; a well-told story tells them why they should care.

That's where I see the future of branding heading — toward human-centered ecosystems. Brands that feel personal, connected, and alive across every platform.

The Future of Identity: Human, Digital, and Evolving
In 2025 and beyond, your brand isn't a static identity — it's a living interface. It grows with your business, your audience, and your values.

From my journey at CEOTR, one thing is clear: every byte of data and every story you share contributes to the same thing — your brand's heartbeat. The challenge is keeping that rhythm steady while the world keeps changing.

Build from truth. Speak with clarity. Let your digital presence reflect the values you live offline. That's how brands endure — not by chasing trends, but by staying human.

— Emmanuel Ogugua
    \\`
  },
  {
    id: 6,
    title: 'Navigating Unstructured Environments: Lessons from the Nupe Cultural Resource Centre',
    excerpt: 'Reflect on your experience in Niger State. Discuss challenges you faced in less structured IT and administrative roles and the creative, flexible problem-solving strategies you employed.',
    category: 'Leadership',
    readTime: '14 min read',
    publishedDate: '2024-01-01',
    author: 'Emmanuel Chukwuka Ogugua',
    featured: true,
    slug: 'navigating-unstructured-environments',
    image: '/images/blogPostNavigatingUnstructuredEnvironment.webp',
    content: `
# Navigating Unstructured Environments: Lessons from the Nupe Cultural Resource Centre, Bida, Niger State, Nigeria

When I first arrived in Bida for my NYSC posting, I expected a typical IT or administrative environment — systems, structure, maybe even a workflow chart on the wall. What I found instead at the Nupe Cultural Resource Centre was closer to organized chaos. Records were mostly paper-based, devices were few, and "process" often meant memory and goodwill.

For someone fresh out of university, armed with theory and curiosity, it was both disorienting and intriguing. But it turned out to be one of the most formative seasons of my career.

Learning to Lead Without a Manual
There was no defined IT department. My role as Personal Assistant / Information Technologist meant everything and nothing at once — drafting letters, troubleshooting computers, typing reports, even helping organize cultural events. Every day began with a new version of "figure it out."

At first, I tried to create structure by force — folders, checklists, templates. But it didn't stick. People weren't resisting out of laziness; they just worked differently. I realized leadership here meant adapting to context, not imposing control.

So, instead of enforcing my way, I started observing theirs — the unwritten systems that already existed. Who people trusted for certain decisions. How information actually moved. Once I mapped that flow, I began introducing small, respectful upgrades.

A simple digital record system for documents. A shared USB drive for storing templates. Naming conventions that made retrieval easier. Nothing fancy — just enough order to make the work lighter.

Flexibility Is a Skill, Not a Compromise
Working in a low-resource environment forced creativity. When the only office printer broke, I figured out a way to connect a borrowed one through a laptop as a print server. When internet access failed, I used my phone hotspot to sync files or send urgent messages.

Those small wins built confidence — in me and in others. It wasn't about showing off tech skills; it was about proving that systems could work here, too.

I learned that sometimes efficiency doesn't come from new tools, but from how well you adapt old ones.

The Human Side of Systems
Technology solves problems, but people sustain the solutions. Once colleagues saw that digital tools made their work easier, they became open to learning more. I started informal training sessions — short, practical, and focused on what mattered to their roles.

Those sessions did more than improve workflow; they built trust. It reminded me that transformation, no matter how technical, always starts with people feeling seen and capable.

What That Experience Taught Me
Looking back, my time in Bida was less about IT and more about leadership in its rawest form — making progress with limited tools, listening more than instructing, and finding clarity in messy realities.

Every structured system I build today, every company I've co-founded since, carries that lesson: if you can bring order to unstructured spaces without killing their spirit, you can lead anywhere.

In a world obsessed with optimization and frameworks, the real test of skill is how you perform when there's none to lean on. Bida taught me that structure isn't always a prerequisite for progress — sometimes, it's the result of patience, humility, and persistence.

— Emmanuel Ogugua
    \\`
  }
]

export function BlogPosts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, stories, and practical wisdom from the intersection of technology, business, and life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            console.log(`Rendering post ${post.id}:`, post.title);
            return (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 ${
                post.featured
                  ? 'border-green-400/30 hover:border-green-400/50'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-green-500/20 backdrop-blur-sm text-green-400 text-xs rounded-full border border-green-400/30">
                    Featured
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    console.error('Image failed to load:', post.image);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/20">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.category === 'Technology'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                        : post.category === 'Business Strategy'
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-400/30'
                        : post.category === 'Personal Growth'
                        ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                        : 'bg-orange-500/20 text-orange-400 border border-orange-400/30'
                    }`}>
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link href={`/blog/${post.slug}`}>
                  <motion.button
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Read Article
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                post.featured
                  ? 'from-green-600/10'
                  : 'from-blue-600/10'
              }`}></div>
            </motion.div>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-400/20 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-white mb-4">Never Miss an Insight</h3>
            <p className="text-gray-300 mb-6">
              Join my newsletter for weekly insights on technology, business strategy, and personal growth. No spam, just valuable content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
              />
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Join 500+ readers who get my latest articles and insights
            </p>
          </div>
        </motion.div>
      </div>
  )
}
