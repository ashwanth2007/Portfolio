import React from 'react';
import { ArrowRight, Building2, ShieldCheck, Zap, Clock, Infinity, RefreshCw, Database, Briefcase, ExternalLink, Cpu, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import ScreenshotShowcase from '../components/ScreenshotShowcase';
import { TESTIMONIALS } from '../data';

const LOGOS = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/BCG_Corporate_Logo.svg/1280px-BCG_Corporate_Logo.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosM-lOX92wpdNNSVyCM3QbFI1mLTP_CVIkg&s",
  "https://static1.squarespace.com/static/646d7fcc041c0a51245304a0/t/6479170b6f690d78f18f3ad2/1685657359922/Zoe-Home-SocialImage.jpg?format=1500w",
  "https://www.ambrosiabakery.in/cdn/shop/files/ambrosialogozoomed_135x@2x.png?v=1613709932",
  "https://images.ctfassets.net/ktn111j92rjl/QJUGNfyrlW58EgayGLDPZ/7eb8f1578b469c85104643ec883fbba2/Logotype.svg",
  "https://shop.muddymats.com/product/muddy-mat-csb/app/desktop/images/LogoMuddyMat.png",
  "https://storage.getlatka.com/images/onindus.com.png",
  "https://avanew.ai/wp-content/uploads/2025/11/new-fav.png",
  "/clients/calcuquote.jpg",
  "https://www.boomshare.ai/assets/BoomLightIconLogo.svg",
  "/clients/falke-media.png",
  "https://www.xpertlink.ai/wp-content/uploads/2022/04/xpertlink_ai.png"
];

const FEATURES = [
  {
    icon: <Building2 size={24} />,
    title: "Fortune 500 Trusted",
    desc: "Trusted by Fortune 500s & Enterprises for critical automation."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "GDPR Compliant",
    desc: "Fully compliant solutions ensuring data sovereignty and privacy."
  },
  {
    icon: <Zap size={24} />,
    title: "4 Systems / Month",
    desc: "Average project delivery velocity for production-ready agents."
  },
  {
    icon: <Briefcase size={24} />,
    title: "5+ Industries Served",
    desc: "Media, Biotech, Consulting, Fintech, and Construction expertise."
  },
  {
    icon: <Clock size={24} />,
    title: "90% Time Reduction",
    desc: "Massive efficiency gains based on recent project impact."
  },
  {
    icon: <Infinity size={24} />,
    title: "End-to-End Systems",
    desc: "Complete automation solutions, not point fixes built for scale."
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Real-Time Data Sync",
    desc: "Live data synchronization between CRMs, databases, and tools."
  },
  {
    icon: <Database size={24} />,
    title: "Database Design & Management",
    desc: "Airtable, PostgreSQL, and NoSQL solutions for automation backends."
  },
  {
    icon: <Cpu size={24} />,
    title: "Agentic Infrastructure",
    desc: "Leveraging advanced AI models to deploy and build complex systems faster than traditional methods."
  }
];

const DEPLOYMENTS = [
  {
    title: "AI Sales Agent",
    projectId: "zoro-onindus",
    description: "An AI-driven prospect research system that builds a complete intelligence profile for any target company. It analyzes financial signals, technology stack, decision-maker roles, competitive positioning, and buying psychology, then produces a clear engagement and approach strategy. The agent gives sales teams everything they need to run informed, high-confidence conversations without manual research.",
    video: "https://raw.githubusercontent.com/ashwanth2007/Resources/867ec75289e2ba238c5c30226c5dbf8ccb1181d1/ai_sdr.mp4"
  },
  {
    title: "AI Ad Creative Agent",
    projectId: "zoro-ad-intel",
    description: "An end-to-end AI system that turns any product into ready-to-launch ad creatives. It analyzes the brand’s visual style and audience psychology, generates multiple hooks and messages, and automatically produces platform-specific ad visuals for social channels like Instagram, Facebook, and TikTok. The system removes manual creative work, speeds up testing, and gives brands a continuous flow of high-quality ad assets without relying on agencies or designers.",
    video: "https://raw.githubusercontent.com/ashwanth2007/Resources/867ec75289e2ba238c5c30226c5dbf8ccb1181d1/ad_creatives_form.mp4"
  },
  {
    title: "Viral AI Agent",
    projectId: "instig8-boom",
    description: "An AI-powered content system that monitors what is working across major social platforms, understands audience emotions and trends, and turns those insights into platform-specific content plans. It identifies high-impact topics, audience intent, and viral angles, then generates ready-to-use scripts, hooks, captions, and posting frameworks for LinkedIn, TikTok, Instagram, YouTube, X, and Facebook so teams can publish consistently without manual research or creative guesswork.",
    video: "https://raw.githubusercontent.com/ashwanth2007/Resources/867ec75289e2ba238c5c30226c5dbf8ccb1181d1/viral_playbook.mp4"
  },
  {
    title: "AI Audience Intelligence Agent",
    projectId: "instig8-zoefoundry",
    description: "An AI system that tracks real-time activity in a brand’s niche to find both high-value customers and relevant creators in one workflow. It scans viral content and engagement, analyzes profiles and language to detect intent and fit, ranks people by conversion potential, and automatically generates personalized outreach messages for partnerships, demos, or sales turning social activity into a continuous lead and influencer pipeline.",
    video: "https://raw.githubusercontent.com/ashwanth2007/Resources/867ec75289e2ba238c5c30226c5dbf8ccb1181d1/audience_intelligence.mp4"
  }
];

const ARSENAL_LOGOS = [
  { name: "n8n", logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/n8n-icon.png" },
  { name: "Claude Sonnet 4.6", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg" },
  { name: "Code Rabbit", logo: "https://intodot.net/wp-content/uploads/2025/06/coderabbit.png" },
  { name: "Cursor", logo: "https://img.utdstc.com/icon/a2c/de1/a2cde158af82ba714c9c50acfb13b930312e231596805f4a1a9d7ec6d8059dba:200" },
  { name: "Make.com", logo: "https://europe1.discourse-cdn.com/flex013/uploads/make/optimized/1X/694f3217def943314071cd7a9a61f8c14bce26a5_2_500x500.png" },
  { name: "Obsidian", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2023_Obsidian_logo.svg/1280px-2023_Obsidian_logo.svg.png" },
  { name: "Airtable", logo: "https://keycombiner.com/media/application-icons/airtable.png" },
  { name: "Vercel", logo: "https://smlvqzf0a1b66cku.public.blob.vercel-storage.com/images/Vercel%20Logo-IMoeV2W33gFclXzAfZxmAHqtjBuTzP.png" },
  { name: "Render", logo: "https://assets.findstack.com/hf8tetz6wrjfxx6vxooc6igw3tah" },
  { name: "Supabase", logo: "https://monkedo-static.s3.eu-central-1.amazonaws.com/component-icons/supabase.png" },
  { name: "Hermes", logo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/hermesagent.png" },
  { name: "HeyReach", logo: "https://cdn.prod.website-files.com/65492afe86bfa964d89f2005/682dda971399f5cd7b96726b_HQ-Favicon-1000x1000.png" },
  { name: "SmartLead", logo: "https://play-lh.googleusercontent.com/3TRenpb3zBDoRTurTpPFsmFPQYeByFoqKDxBIQ_nayEo3qUYw8bDiB0lYGUf9d3QiQ=w240-h480-rw" }
];

const TECH_STACK = [
  { name: "Next.js", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s", desc: "Backend / full-stack apps" },
  { name: "FastAPI", logo: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg", desc: "Backend APIs" },
  { name: "Node.js", logo: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-svg-download-png-3030179.png?f=webp", desc: "Server-side Runtime" },
  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg", desc: "Frontend" },
  { name: "MongoDB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s", desc: "Database layer" },
  { name: "Airtable", logo: "https://keycombiner.com/media/application-icons/airtable.png", desc: "Database layer" },
  { name: "Supabase", logo: "https://monkedo-static.s3.eu-central-1.amazonaws.com/component-icons/supabase.png", desc: "Backend + DB + Auth" },
  { name: "Advanced CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg", desc: "Modern Styling & Layouts" },
  { name: "Java", logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg", desc: "Enterprise SDK" },
  { name: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1280px-ISO_C%2B%2B_Logo.svg.png", desc: "Performance Systems" },
  { name: "Render", logo: "https://assets.findstack.com/hf8tetz6wrjfxx6vxooc6igw3tah", desc: "Backend Hosting" },
  { name: "Vercel", logo: "https://smlvqzf0a1b66cku.public.blob.vercel-storage.com/images/Vercel%20Logo-IMoeV2W33gFclXzAfZxmAHqtjBuTzP.png", desc: "Deployment & Edge" }
];

const Home = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ashwanth S",
    "jobTitle": "AI Systems Architect",
    "url": "https://ashwanth.in",
    "email": "me@ashwanth.dev",
    "sameAs": [
      "https://linkedin.com/in/ashwanth-s"
    ],
    "knowsAbout": ["AI Automation", "System Architecture", "Multi-Agent Orchestration", "Enterprise Systems"]
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto flex flex-col">
      <SEO 
        title="Ashwanth S | AI Systems Architect" 
        description="I build autonomous AI agents that turn manual work into scalable processes. Trusted by top consulting firms and growth-stage companies."
        schema={personSchema}
        keywords={["AI Architect", "Automation", "N8N", "Enterprise AI", "System Architecture"]}
      />
      
      {/* Hero Section - stacks on tablets; 5/7 split at xl with controlled breakout on 2xl */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-center py-6 md:py-10 2xl:mr-[-6rem]">

        {/* Left: Text Content (narrower so showcase gets more room) */}
        <div className="xl:col-span-5 space-y-6 md:space-y-7 text-center xl:text-left">

          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[3.5rem] 2xl:text-[4rem] font-black text-black dark:text-white tracking-tight leading-[1.05] transition-colors">
            <span className="text-brand-red">Self-improving</span>
            <br className="hidden xl:block" />
            <span> AI agents.</span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl mx-auto xl:mx-0 transition-colors">
            Trusted by 40+ companies across consulting, B2B, and growth-stage to ship autonomous AI agents into production.
          </p>

          <div className="flex flex-col gap-3 pt-2 items-center xl:items-start w-full">
            {/* Primary Button - Discovery Call */}
            <Link
              to="/discovery"
              className="group flex items-center justify-between bg-black dark:bg-white border-2 border-black dark:border-white text-white dark:text-black px-7 py-4 w-full sm:w-auto sm:min-w-[300px] rounded-xl hover:bg-brand-red hover:border-brand-red dark:hover:bg-brand-red dark:hover:border-brand-red dark:hover:text-white transition-colors duration-300 shadow-xl"
            >
              <span className="font-semibold text-sm sm:text-base">Discovery call</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary Button - Case Studies */}
            <Link
              to="/case-studies"
              className="group flex items-center justify-between bg-brand-red border-2 border-brand-red text-white px-7 py-4 w-full sm:w-auto sm:min-w-[300px] rounded-xl hover:bg-black hover:border-black transition-colors duration-300"
            >
              <span className="font-semibold text-sm sm:text-base">Case studies</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right: Auto-rotating screenshot showcase (gets the wider 7/12 column) */}
        <div className="xl:col-span-7 w-full max-w-2xl md:max-w-3xl mx-auto xl:max-w-none">
          <ScreenshotShowcase />
        </div>
      </div>

      {/* Client Logos Scroll - full bleed */}
      <div className="mt-6 relative w-screen left-1/2 -translate-x-1/2 border-t border-b border-gray-100 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-sm py-6 md:py-8 overflow-hidden transition-colors">
         <div className="relative w-full flex overflow-hidden group">
            <div className="flex w-max animate-marquee pause-on-hover items-center">
               {/* First Set */}
               {LOGOS.map((logo, index) => (
                 <div key={index} className="flex-shrink-0 h-10 md:h-12 w-28 md:w-36 flex items-center justify-center mr-16 md:mr-24">
                    <img
                      src={logo}
                      alt="Client Logo"
                      className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300 dark:invert dark:brightness-200"
                    />
                 </div>
               ))}

               {/* Second Set (Duplicate for Loop) */}
               {LOGOS.map((logo, index) => (
                 <div key={`dup-${index}`} className="flex-shrink-0 h-10 md:h-12 w-28 md:w-36 flex items-center justify-center mr-16 md:mr-24">
                    <img
                      src={logo}
                      alt="Client Logo"
                      className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300 dark:invert dark:brightness-200"
                    />
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Achieved Metrics Section */}
      <Reveal as="section" className="mt-24">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red"></span>
            Achieved Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
           {[
             { value: '$450k+', label: 'In client systems impact' },
             { value: '$100k+', label: 'Worth of systems delivered' },
             { value: '40+', label: 'Systems deployed' }
           ].map(item => (
             <div key={item.label} className="group">
                <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black dark:text-white tracking-tighter mb-4 group-hover:text-brand-red transition-colors">
                  {item.value}
                </h3>
                <p className="text-sm font-bold tracking-wide text-gray-500 dark:text-gray-400 border-l-4 border-gray-200 dark:border-white/10 pl-4 group-hover:border-brand-red transition-colors">
                  {item.label}
                </p>
             </div>
           ))}
        </div>

        {/* Inline CTA after Achieved Metrics */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-black dark:bg-[#0a0a0a] border border-black dark:border-white/10 px-6 sm:px-10 py-8 md:py-10">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-brand-red/15 blur-3xl rounded-full pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <p className="text-[10px] md:text-xs font-black text-brand-red uppercase tracking-[0.3em]">Want this on your team?</p>
              <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight">
                Book a Call <span className="text-brand-red">Right Now</span>
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
                30-minute discovery call. We map the agent, the metric, and what shipping it would actually cost.
              </p>
            </div>
            <Link
              to="/discovery"
              className="group inline-flex items-center justify-center gap-3 bg-brand-red text-white px-7 py-4 sm:px-9 sm:py-5 font-black uppercase tracking-[0.2em] text-xs sm:text-sm rounded-full hover:bg-white hover:text-black transition-colors duration-300 shadow-2xl whitespace-nowrap shrink-0"
            >
              <Calendar size={16} />
              Schedule a Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Reveal>

      {/* About Section */}
      <Reveal as="section" className="mt-32">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red"></span>
            WHO BUILDS THIS?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter uppercase leading-none transition-colors">
              I'M <span className="text-brand-red">ASHWANTH.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed transition-colors">
              I'm an AI systems architect who builds production-grade automation infrastructure for consulting firms, B2B sales teams, and growth-stage companies. I've shipped agents for clients including BCG, handling lead intelligence, outbound pipelines, and content systems at scale.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed transition-colors">
              I don't build demos. I build things that run in production and generate measurable output from day one. Every system I ship is owned end to end, from architecture down to the deploy pipeline, and the only metric that matters is whether it returns measurable revenue or hours back to the business.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 dark:bg-white/5 rounded-[3rem] overflow-hidden border-2 border-black dark:border-white shadow-[20px_20px_0px_0px_rgba(220,38,38,1)]">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-black uppercase tracking-widest">
                <img 
                  src="https://raw.githubusercontent.com/ashwanth2007/Resources/main/profile-pic.jpg" 
                  alt="Ashwanth S" 
                  className="about-photo w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Core Capabilities Section */}
      <Reveal as="section" className="mt-32 relative">
           <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-12 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-brand-red"></span>
              Core Capabilities
           </h2>
           
           <div className="border border-gray-800 rounded-[3rem] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                 {FEATURES.map((feature, index) => (
                   <div 
                     key={index} 
                     className="group relative p-8 md:p-10 border-b border-gray-800 md:border-r last:border-b-0 bg-black transition-all duration-500 overflow-hidden flex flex-col justify-center min-h-[300px] md:min-h-[350px]"
                   >
                      {/* Background Number Accent */}
                      <span className="absolute -bottom-2 -right-2 text-7xl font-black text-white/[0.03] pointer-events-none group-hover:text-brand-red/10 transition-colors duration-500">
                         {(index + 1).toString().padStart(2, '0')}
                      </span>

                      <div className="relative z-10 space-y-8">
                         <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-xl">
                            {feature.icon}
                         </div>
                         
                         <div className="space-y-4">
                            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter group-hover:text-brand-red transition-colors duration-500">
                              {feature.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                              {feature.desc}
                            </p>
                         </div>

                         <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="h-1 w-12 bg-brand-red"></div>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
      </Reveal>

      {/* Inline CTA between Core Capabilities and Arsenal */}
      <Reveal as="section" className="mt-32">
        <div className="relative overflow-hidden rounded-3xl bg-black dark:bg-[#0a0a0a] border border-black dark:border-white/10 px-6 sm:px-10 py-8 md:py-10">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-brand-red/15 blur-3xl rounded-full pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <p className="text-[10px] md:text-xs font-black text-brand-red uppercase tracking-[0.3em]">Got a system in mind?</p>
              <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight">
                Book a Call <span className="text-brand-red">Right Now</span>
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
                30-minute discovery call. We map the agent, the metric, and what shipping it would actually cost.
              </p>
            </div>
            <Link
              to="/discovery"
              className="group inline-flex items-center justify-center gap-3 bg-brand-red text-white px-7 py-4 sm:px-9 sm:py-5 font-black uppercase tracking-[0.2em] text-xs sm:text-sm rounded-full hover:bg-white hover:text-black transition-colors duration-300 shadow-2xl whitespace-nowrap shrink-0"
            >
              <Calendar size={16} />
              Schedule a Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Arsenal Section */}
      <Reveal as="section" className="mt-32 relative overflow-hidden">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red"></span>
            Arsenal
        </h2>

        <div className="relative bg-[#050505] rounded-[3rem] p-12 md:p-24 overflow-hidden border border-white/5 shadow-[0_0_100px_-20px_rgba(235,54,54,0.1)]">
            {/* Animated Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-red/10 blur-[150px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-red/5 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 border border-brand-red/20 rounded-full">
                        <div className="w-2 h-2 bg-brand-red rounded-full animate-ping"></div>
                        <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.3em]">Tech Stack 2026</span>
                    </div>

                    <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85]">
                        THE TOOLS <br/>
                        THAT <span className="text-brand-red">POWER</span> <br/>
                        THE AGENTS
                    </h3>
                    
                    <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                        A futuristic stack designed for speed, reliability, and autonomous intelligence. We don't just use tools; we orchestrate them.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        {['AUTONOMOUS', 'SCALABLE', 'SECURE', 'INTELLIGENT', 'PERSISTENT MEMORY', 'SELF-HEALING', 'PRODUCTION-GRADE'].map(tag => (
                            <span key={tag} className="px-6 py-3 bg-white/[0.04] border border-white/10 rounded-2xl text-[11px] font-black tracking-[0.2em] text-gray-300 uppercase hover:bg-white/[0.08] hover:border-brand-red/30 transition-colors duration-300 cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="relative flex justify-center items-center aspect-square w-full max-w-[550px] mx-auto">
                    {/* Rotating Logos Container */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Center Logo (Claude) */}
                        <div className="relative z-30 w-36 h-36 bg-white/[0.04] border border-white/20 rounded-[2.5rem] p-8 shadow-[0_0_80px_-10px_rgba(235,54,54,0.3)] flex items-center justify-center group">
                            <img src={ARSENAL_LOGOS[1].logo} alt="Claude" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-brand-red/5 rounded-[2.5rem] animate-pulse"></div>
                        </div>

                        {/* Orbiting Logos */}
                        {ARSENAL_LOGOS.map((item, index) => {
                            if (index === 1) return null; // Skip Claude as it's in center
                            const adjustedIndex = index < 1 ? index : index - 1;
                            const totalOrbiting = ARSENAL_LOGOS.length - 1;
                            const angleDeg = adjustedIndex * (360 / totalOrbiting);

                            return (
                                <div
                                    key={item.name}
                                    className="absolute w-20 h-20 md:w-24 md:h-24 bg-white/[0.04] border border-white/10 rounded-3xl p-5 flex items-center justify-center hover:bg-white/[0.08] hover:border-brand-red/40 transition-colors duration-300 group cursor-pointer z-20 will-change-transform"
                                    style={{
                                        ['--start-rot' as any]: `${angleDeg}deg`,
                                        ['--start-rot-neg' as any]: `${-angleDeg}deg`,
                                        ['--end-rot' as any]: `${angleDeg + 360}deg`,
                                        ['--end-rot-neg' as any]: `${-(angleDeg + 360)}deg`,
                                        animation: 'arsenal-orbit 60s linear infinite',
                                    }}
                                >
                                    <img src={item.logo} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />

                                    {/* Tooltip */}
                                    <div className="absolute -bottom-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-black text-white uppercase tracking-widest whitespace-nowrap z-50">
                                        {item.name}
                                    </div>
                                </div>
                            );
                        })}

                        {/* Orbit Rings with Glow */}
                        <div className="absolute w-[360px] h-[360px] border border-white/[0.03] rounded-full shadow-[inset_0_0_50px_rgba(255,255,255,0.01)]"></div>
                        <div className="absolute w-[500px] h-[500px] border border-white/[0.02] rounded-full"></div>
                        
                        {/* Floating Particles */}
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(6)].map((_, i) => (
                                <div 
                                    key={i}
                                    className="absolute w-1 h-1 bg-brand-red/40 rounded-full animate-ping"
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        animationDelay: `${i * 0.5}s`,
                                        animationDuration: '3s'
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </Reveal>

      {/* Few Deployed Agents Section */}
      <Reveal as="section" className="mt-32">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red"></span>
            Few Deployed Agents
        </h2>

        <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter uppercase leading-none transition-colors">
                FEW <br/>
                <span className="text-brand-red">DEPLOYED AGENTS</span>
            </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {DEPLOYMENTS.map((deployment, index) => (
              <div
                key={index}
                className="group flex flex-col bg-black border border-white/10 rounded-3xl overflow-hidden hover:border-brand-red/50 hover:shadow-[0_0_60px_-10px_rgba(235,54,54,0.35)] transition-colors duration-300"
              >
                {/* Video */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  <video
                    className="w-full h-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={deployment.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Text */}
                <Link
                  to={`/case-studies/${deployment.projectId}`}
                  className="p-6 md:p-8 flex flex-col justify-between gap-5 flex-1 hover:bg-white/[0.03] transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-brand-red font-black text-xl">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="h-px w-8 bg-white/10"></div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-tight text-white group-hover:text-brand-red transition-colors">
                      {deployment.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed font-medium line-clamp-5">
                      {deployment.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:text-brand-red transition-colors mt-auto">
                    View Case Study <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </div>
            ))}
        </div>

        {/* More Agents Button */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/case-studies"
            className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-brand-red transition-all duration-300 shadow-xl hover:shadow-brand-red/20"
          >
            More Agents
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Inline CTA after Few Deployed Agents */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-black dark:bg-[#0a0a0a] border border-black dark:border-white/10 px-6 sm:px-10 py-8 md:py-10">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-brand-red/15 blur-3xl rounded-full pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <p className="text-[10px] md:text-xs font-black text-brand-red uppercase tracking-[0.3em]">Ready to ship one of these?</p>
              <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight">
                Book a Call <span className="text-brand-red">Right Now</span>
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
                30-minute discovery call. We map the agent, the metric, and what shipping it would actually cost.
              </p>
            </div>
            <Link
              to="/discovery"
              className="group inline-flex items-center justify-center gap-3 bg-brand-red text-white px-7 py-4 sm:px-9 sm:py-5 font-black uppercase tracking-[0.2em] text-xs sm:text-sm rounded-full hover:bg-white hover:text-black transition-colors duration-300 shadow-2xl whitespace-nowrap shrink-0"
            >
              <Calendar size={16} />
              Schedule a Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Tech Stack Section */}
      <Reveal as="section" className="mt-32 relative overflow-hidden">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red"></span>
            Tech Stack
        </h2>

        <div className="relative bg-[#050505] rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 overflow-hidden border border-white/5">
            {/* Unique Motion Graphics: The "Neural Grid" */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute inset-0" style={{ 
                    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '100px 100px'
                }}></div>
                
                {/* Random Glowing Nodes */}
                {[...Array(12)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute w-1 h-1 bg-brand-red rounded-full data-node"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.4}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative z-10">
                <div className="max-w-2xl mb-12">
                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-6">
                        THE <span className="text-brand-red">ARCHITECTURE</span> <br/>
                        OF SCALE
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed">
                        Tools and frameworks powering our automation systems. We build on the edge of what's possible.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
                    {TECH_STACK.map((tech) => (
                        <div
                            key={tech.name}
                            title={tech.name}
                            className="group relative aspect-square bg-white/[0.04] border border-white/10 rounded-xl flex items-center justify-center p-3 md:p-4 hover:bg-white/[0.08] hover:border-brand-red/40 hover:shadow-[0_0_24px_-10px_rgba(235,54,54,0.3)] transition-colors duration-300"
                        >
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="max-w-[78%] max-h-[78%] object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </Reveal>

      {/* Schedule Discovery Section */}
      <Reveal as="section" className="mt-32">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red"></span>
            Contact
        </h2>
        
        <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter uppercase leading-none mb-6 transition-colors">
                SCHEDULE A <br/>
                <span className="text-brand-red">DISCOVERY CALL</span>
            </h1>
            
            <div className="flex items-center gap-4">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] whitespace-nowrap">
                    TRUSTED BY <span className="text-brand-red">40+</span> COMPANIES ACROSS CONSULTING, B2B, AND GROWTH-STAGE.
                </p>
                <div className="h-px flex-grow bg-gray-200 dark:bg-white/10 transition-colors"></div>
            </div>
        </div>

        <div className="w-full h-[700px] bg-black border border-white/10 shadow-2xl rounded-xl overflow-hidden relative z-10">
            <iframe
              src="https://cal.com/ashwanthofficial/custom-ai-agent-consultation?embed=true&theme=dark&layout=month_view"
              title="Schedule a Discovery Call"
              loading="lazy"
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full"
              allow="camera; microphone; autoplay; clipboard-read; clipboard-write"
            />
        </div>
      </Reveal>

      {/* Recommendations Section */}
      <Reveal as="section" className="mt-32">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red"></span>
            Recommendations
        </h2>
        
        <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter uppercase leading-none transition-colors">
                TRUSTED <br/>
                <span className="text-brand-red">BY</span>
            </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {TESTIMONIALS.map((person, index) => (
                <div
                    key={index}
                    className="group relative bg-white dark:bg-black border-2 border-black dark:border-white rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.08)] hover:shadow-[10px_10px_0px_0px_rgba(235,54,54,1)] transition-shadow duration-300"
                >
                    {/* Header */}
                    <div className="px-4 py-3 border-b-2 border-black dark:border-white flex items-center gap-3 bg-gray-50 dark:bg-white/5">
                        <img
                            src={person.image}
                            alt={person.name}
                            className="w-10 h-10 rounded-full border border-black dark:border-white object-cover shrink-0"
                            referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-black text-black dark:text-white uppercase tracking-tight group-hover:text-brand-red transition-colors truncate">
                                {person.name}
                            </h3>
                            <p className="text-[9px] font-bold text-brand-red uppercase tracking-widest truncate">
                                {person.headline}
                            </p>
                        </div>
                        <a
                            href={person.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-full hover:bg-brand-red dark:hover:bg-brand-red dark:hover:text-white transition-colors flex items-center justify-center shrink-0"
                            aria-label={`Open ${person.name} profile`}
                        >
                            <ExternalLink size={14} />
                        </a>
                    </div>

                    {/* Testimonial screenshot */}
                    <div className="w-full bg-white dark:bg-black p-3">
                        <img
                            src={person.testimonial}
                            alt={`${person.name} Recommendation`}
                            className="w-full h-auto max-h-[320px] object-contain block rounded-lg border border-gray-100 dark:border-white/10"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>
            ))}
        </div>
      </Reveal>

    </div>
  );
};

export default Home;