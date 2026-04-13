import React, { useState, useEffect } from 'react';
import { ArrowRight, Building2, ShieldCheck, Zap, Clock, Infinity, RefreshCw, ScanLine, Webhook, Database, Briefcase, ChevronLeft, ChevronRight, ExternalLink, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const LOGOS = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/BCG_Corporate_Logo.svg/1280px-BCG_Corporate_Logo.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosM-lOX92wpdNNSVyCM3QbFI1mLTP_CVIkg&s",
  "https://static1.squarespace.com/static/646d7fcc041c0a51245304a0/t/6479170b6f690d78f18f3ad2/1685657359922/Zoe-Home-SocialImage.jpg?format=1500w",
  "https://www.ambrosiabakery.in/cdn/shop/files/ambrosialogozoomed_135x@2x.png?v=1613709932",
  "https://images.ctfassets.net/ktn111j92rjl/QJUGNfyrlW58EgayGLDPZ/7eb8f1578b469c85104643ec883fbba2/Logotype.svg",
  "https://shop.muddymats.com/product/muddy-mat-csb/app/desktop/images/LogoMuddyMat.png",
  "https://storage.getlatka.com/images/onindus.com.png"
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
  },
  {
    title: "AI Ad Creative Generation Agent",
    projectId: "zoro-ad-intel",
    description: "An AI system that transforms any product into conversion-ready ad creatives. It studies brand visuals, audience psychology, and winning ad patterns, then generates high-impact hooks, messages, and platform-specific visuals for Instagram, Facebook, and TikTok. The agent delivers complete, ready-to-run ad assets without designers, copywriters, or long production cycles.",
    video: "https://raw.githubusercontent.com/ashwanth2007/Resources/main/ad_creatives_qn_1.mp4"
  }
];

const TRUSTED_BY = [
  {
    name: "Aryan Mahajan",
    image: "https://raw.githubusercontent.com/ashwanth2007/Resources/main/aryan.jpg",
    testimonial: "https://lh3.googleusercontent.com/d/1dHDTcgQM9rF3O717_gd8PgtcoXRReBa1",
    link: "https://www.linkedin.com/in/aryanmahajaninstig8/",
    headline: "AI Systems Architect for Fortune 500",
    stats: ["50,000 LinkedIn followers", "20,000 Twitter followers", "Fortune 500 Growth Consultant"]
  },
  {
    name: "Avinash Mada",
    image: "https://raw.githubusercontent.com/ashwanth2007/Resources/main/avinash_mada.jpg",
    testimonial: "https://lh3.googleusercontent.com/d/1xFOlidtCqE6AlnacRmWnw98gnoI0exlO",
    link: "https://www.instagram.com/meetavinash",
    headline: "AI Visionary & Entrepreneur",
    stats: ["500K Instagram followers", "Top coach in India", "3 Lakh+ inner circle members"]
  },
  {
    name: "Mani Kanasani",
    image: "https://raw.githubusercontent.com/ashwanth2007/Resources/main/mani_kanasani.jpg",
    testimonial: "https://lh3.googleusercontent.com/d/1qUnk3Fp9YgRSTG96rPSgR2Yff__5Pyj7",
    link: "https://www.youtube.com/@ManiKanasani",
    headline: "Agency Owner & Content Creator",
    stats: ["15,000 YouTube subscribers", "10,000 Skool community members", "Agency owner making $100K+/month"]
  },
  {
    name: "Kanchan Bhatta",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEVXAJ0JLLxUA/profile-displayphoto-scale_400_400/B56ZsrA0DAHsAk-/0/1765953192842?e=1777507200&v=beta&t=SqxV5Bc6S2IR14PzUiIZerk0kvMVoJILajzN8RdJrKM",
    testimonial: "https://lh3.googleusercontent.com/d/1KtK-TQqGAs7nzid33reDNwTluDsYyxmP",
    link: "https://www.linkedin.com/in/growthxkanchan/",
    headline: "GTM & LinkedIn Expert",
    stats: ["GTM Expert", "LinkedIn Expert", "Growth Strategy"]
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
  { name: "Supabase", logo: "https://monkedo-static.s3.eu-central-1.amazonaws.com/component-icons/supabase.png" }
];

const TECH_STACK = [
  { name: "Next.js", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVW3qpDKsp9c6aqWdkAsVTiqhOOxNxJbk8dg&s", desc: "Backend / full-stack apps" },
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
  const [currentDeploymentIndex, setCurrentDeploymentIndex] = useState(0);

  const nextDeployment = () => {
    setCurrentDeploymentIndex((prev) => (prev + 1) % DEPLOYMENTS.length);
  };

  const prevDeployment = () => {
    setCurrentDeploymentIndex((prev) => (prev - 1 + DEPLOYMENTS.length) % DEPLOYMENTS.length);
  };

  useEffect(() => {
    (function (C: any, A: string, L: string) { 
      let p = function (a: any, ar: any) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    if (Cal) {
      Cal("init", "custom-ai-agent-consultation", {origin:"https://app.cal.com"});

      Cal.ns["custom-ai-agent-consultation"]("inline", {
        elementOrSelector:"#my-cal-inline-custom-ai-agent-consultation",
        config: {"layout":"month_view"},
        calLink: "ashwanthofficial/custom-ai-agent-consultation",
      });

      Cal.ns["custom-ai-agent-consultation"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    }
  }, []);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ashwanth S",
    "jobTitle": "AI Systems Architect",
    "url": "https://ashwanth.dev",
    "sameAs": [
      "https://www.linkedin.com/in/ashwanthofficial/",
      "https://x.com/ashwanth_ai",
      "https://www.instagram.com/ashwanth_pvt.in/"
    ],
    "knowsAbout": ["AI Automation", "System Architecture", "Multi-Agent Orchestration", "Enterprise Systems"]
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 max-w-7xl mx-auto flex flex-col">
      <SEO 
        title="Home" 
        description="Ashwanth S - AI Systems Architect specializing in enterprise automation, multi-agent systems, and scalable workflows. Trusted by Fortune 500s."
        schema={personSchema}
        keywords={["AI Architect", "Automation", "N8N", "Enterprise AI", "System Architecture"]}
      />
      
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-12 py-16 md:py-24">
        
        {/* Text Content */}
        <div className="max-w-5xl space-y-10 flex flex-col items-center">
          
          <h1 className="text-[2.5rem] sm:text-6xl md:text-8xl lg:text-[10rem] font-black text-black dark:text-white tracking-tighter leading-[0.85] uppercase transition-colors">
            I BUILD <br/>
            <span className="text-brand-red">AUTONOMOUS</span> <br/>
            AI AGENTS.
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-medium italic leading-relaxed max-w-3xl transition-colors">
            I build autonomous AI agents that turn your manual work into scalable processes that agents handle for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 w-full justify-center px-4 sm:px-0">
            {/* Primary Button - Discovery Call */}
            <Link 
              to="/discovery"
              className="group flex items-center justify-between bg-black dark:bg-white border-2 border-black dark:border-white text-white dark:text-black px-8 sm:px-10 py-4 sm:py-5 w-full sm:min-w-[260px] sm:w-auto hover:bg-brand-red hover:border-brand-red dark:hover:bg-brand-red dark:hover:border-brand-red dark:hover:text-white transition-all duration-300 animate-glow shadow-2xl"
            >
              <span className="font-bold tracking-[0.2em] text-xs sm:text-sm uppercase">Discovery Call</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary Button - Case Studies */}
            <Link 
              to="/case-studies"
              className="group flex items-center justify-center bg-brand-red border-2 border-brand-red text-white px-8 sm:px-10 py-4 sm:py-5 w-full sm:min-w-[260px] sm:w-auto hover:bg-black hover:border-black transition-all duration-300"
            >
              <span className="font-bold tracking-[0.2em] text-xs sm:text-sm uppercase">Case Studies</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Client Logos Scroll */}
      <div className="mt-8 border-t border-b border-gray-100 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-sm py-6 md:py-8 overflow-hidden -mx-6 w-[calc(100%+3rem)] md:w-auto md:mx-0 transition-colors">
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
      <div className="mt-24">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red"></span>
            Achieved Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
           {[
             { value: '$100k+', label: 'Worth of Systems Delivered' },
             { value: '100+', label: 'Hours Saved Per Month' },
             { value: '20+', label: 'Production Ready Systems' }
           ].map(item => (
             <div key={item.label} className="group">
                <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black dark:text-white tracking-tighter mb-4 group-hover:text-brand-red transition-colors">
                  {item.value}
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 border-l-4 border-gray-200 dark:border-white/10 pl-4 group-hover:border-brand-red transition-colors">
                  {item.label}
                </p>
             </div>
           ))}
        </div>
      </div>

      {/* Core Capabilities Section */}
      <div className="mt-32 relative">
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
      </div>

      {/* Arsenal Section */}
      <div className="mt-32 relative overflow-hidden">
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
                        {['AUTONOMOUS', 'SCALABLE', 'SECURE', 'INTELLIGENT'].map(tag => (
                            <span key={tag} className="px-6 py-3 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl text-[11px] font-black tracking-[0.2em] text-gray-300 uppercase hover:bg-white/[0.08] hover:border-brand-red/30 transition-all duration-300 cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="relative flex justify-center items-center aspect-square w-full max-w-[550px] mx-auto">
                    {/* Rotating Logos Container */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Center Logo (Claude) */}
                        <div className="relative z-30 w-36 h-36 bg-white/[0.03] backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-8 shadow-[0_0_80px_-10px_rgba(235,54,54,0.3)] flex items-center justify-center group">
                            <img src={ARSENAL_LOGOS[1].logo} alt="Claude" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-brand-red/5 rounded-[2.5rem] animate-pulse"></div>
                        </div>

                        {/* Orbiting Logos */}
                        {ARSENAL_LOGOS.map((item, index) => {
                            if (index === 1) return null; // Skip Claude as it's in center
                            const angle = (index * (360 / (ARSENAL_LOGOS.length - 1))) * (Math.PI / 180);
                            const radius = 220; // Increased radius for better spacing
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                                <div 
                                    key={item.name}
                                    className="absolute w-20 h-20 md:w-24 md:h-24 bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl p-5 flex items-center justify-center hover:bg-white/[0.08] hover:border-brand-red/40 transition-all duration-500 group cursor-pointer z-20"
                                    style={{
                                        transform: `translate(${x}px, ${y}px)`,
                                        animation: `orbit ${30 + index * 2}s linear infinite`
                                    }}
                                >
                                    <img src={item.logo} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                    
                                    {/* Tooltip */}
                                    <div className="absolute -bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-black text-white uppercase tracking-widest whitespace-nowrap z-50">
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

        <style dangerouslySetInnerHTML={{ __html: `
            @keyframes orbit {
                from { transform: rotate(0deg) translateX(220px) rotate(0deg); }
                to { transform: rotate(360deg) translateX(220px) rotate(-360deg); }
            }
            @keyframes glow {
                0%, 100% { box-shadow: 0 0 20px rgba(235, 54, 54, 0.2); }
                50% { box-shadow: 0 0 40px rgba(235, 54, 54, 0.6); }
            }
            .animate-glow {
                animation: glow 2s ease-in-out infinite;
            }
            @keyframes float {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-10px) rotate(1deg); }
            }
            .animate-float {
                animation: float 6s ease-in-out infinite;
            }
            @keyframes data-pulse {
                0% { opacity: 0; transform: scale(0.5); }
                50% { opacity: 1; transform: scale(1.2); }
                100% { opacity: 0; transform: scale(0.5); }
            }
            .data-node {
                animation: data-pulse 3s ease-in-out infinite;
            }
        `}} />
      </div>

      {/* Few Deployed Agents Section */}
      <div className="mt-32">
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

        <div className="space-y-12">
            {DEPLOYMENTS.map((deployment, index) => (
              <div 
                key={index}
                className="block group bg-black border border-white/10 rounded-3xl overflow-hidden hover:border-brand-red/50 hover:shadow-[0_0_80px_-10px_rgba(235,54,54,0.4)] transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Video Side */}
                  <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
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

                  {/* Text Side */}
                  <Link 
                    to={`/case-studies/${deployment.projectId}`}
                    className="p-8 md:p-12 flex flex-col justify-center space-y-6 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-brand-red font-black text-2xl">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="h-px w-8 bg-white/10"></div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none text-white group-hover:text-brand-red transition-colors">
                      {deployment.title}
                    </h3>
                    
                    <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                      {deployment.description}
                    </p>

                    <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group-hover:text-brand-red transition-colors">
                      View Case Study <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>

        {/* View More Case Studies Button */}
        <div className="mt-16 flex justify-center">
          <Link 
            to="/case-studies"
            className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-brand-red transition-all duration-300 shadow-xl hover:shadow-brand-red/20"
          >
            View More Case Studies
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-32 relative overflow-hidden">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red"></span>
            Tech Stack
        </h2>

        <div className="relative bg-[#050505] rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 overflow-hidden border border-white/5">
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
                <div className="max-w-2xl mb-20">
                    <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8">
                        THE <span className="text-brand-red">ARCHITECTURE</span> <br/>
                        OF SCALE
                    </h3>
                    <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                        Tools and frameworks powering our automation systems. We build on the edge of what's possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TECH_STACK.map((tech, index) => (
                        <div 
                            key={tech.name}
                            className="group relative bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-brand-red/40 hover:shadow-[0_0_40px_-10px_rgba(235,54,54,0.2)] hover:-translate-y-2 transition-all duration-500 animate-float"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="mb-6 w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl p-2 group-hover:scale-110 transition-transform duration-500">
                                <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                            </div>
                            
                            <h4 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-brand-red transition-colors">
                                {tech.name}
                            </h4>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                                {tech.desc}
                            </p>

                            {/* Decorative Corner */}
                            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20 group-hover:border-brand-red/50 transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* Schedule Discovery Section */}
      <div className="mt-32">
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
                    Trusted by <span className="text-brand-red">5,500+</span> operators on LinkedIn
                </p>
                <div className="h-px flex-grow bg-gray-200 dark:bg-white/10 transition-colors"></div>
            </div>
        </div>

        <div className="w-full h-[700px] bg-black border border-white/10 shadow-2xl rounded-xl overflow-hidden relative z-10">
            <div style={{width:"100%", height:"100%", overflow:"scroll"}} id="my-cal-inline-custom-ai-agent-consultation"></div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="mt-32">
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
        
        <div className="flex flex-col gap-16">
            {TRUSTED_BY.map((person, index) => (
                <div 
                    key={index} 
                    className="group relative bg-white dark:bg-black border-2 border-black dark:border-white rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[16px_16px_0px_0px_rgba(235,54,54,1)] transition-all duration-500"
                >
                    {/* Header with Profile Photo and Name */}
                    <div className="p-6 border-b-2 border-black dark:border-white flex flex-col md:flex-row md:items-center gap-6 bg-gray-50 dark:bg-white/5 transition-colors">
                        <div className="flex items-center gap-4">
                            <img 
                                src={person.image} 
                                alt={person.name} 
                                className="w-16 h-16 rounded-full border-2 border-black dark:border-white object-cover"
                                referrerPolicy="no-referrer"
                            />
                            <div>
                                <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-tight group-hover:text-brand-red transition-colors">
                                    {person.name}
                                </h3>
                                <p className="text-xs font-bold text-brand-red uppercase tracking-widest">
                                    {person.headline}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 md:ml-8">
                            {person.stats?.map((stat, i) => (
                                <span key={i} className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest rounded-full transition-colors">
                                    {stat}
                                </span>
                            ))}
                        </div>
                        
                        <div className="md:ml-auto">
                            <a 
                                href={person.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-full hover:bg-brand-red dark:hover:bg-brand-red dark:hover:text-white transition-colors flex items-center justify-center shadow-lg"
                            >
                                <ExternalLink size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="w-full bg-white dark:bg-black p-4 md:p-8 transition-colors">
                        <img 
                            src={person.testimonial} 
                            alt={`${person.name} Recommendation Screenshot`} 
                            className="w-full h-auto block rounded-xl border border-gray-100 dark:border-white/10 shadow-sm"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>
            ))}
        </div>
      </div>
      
    </div>
  );
};

export default Home;