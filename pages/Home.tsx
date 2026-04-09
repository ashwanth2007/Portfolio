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
    link: "https://www.linkedin.com/in/aryanmahajaninstig8/"
  },
  {
    name: "Avinash Mada",
    image: "https://raw.githubusercontent.com/ashwanth2007/Resources/main/avinash_mada.jpg",
    testimonial: "https://lh3.googleusercontent.com/d/1xFOlidtCqE6AlnacRmWnw98gnoI0exlO",
    link: "https://www.instagram.com/meetavinash"
  },
  {
    name: "Mani Kanasani",
    image: "https://raw.githubusercontent.com/ashwanth2007/Resources/main/mani_kanasani.jpg",
    testimonial: "https://lh3.googleusercontent.com/d/1dHDTcgQM9rF3O717_gd8PgtcoXRReBa1",
    link: "https://www.youtube.com/@ManiKanasani"
  }
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
      "https://x.com/ashwanth_off",
      "https://www.youtube.com/@ashwanthdotdev"
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-6">
          
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-black text-black tracking-tighter leading-[0.9]">
            I BUILD <br/>
            <span className="text-brand-red">AUTOMATION</span> <br/>
            SYSTEMS.
          </h1>

          <p className="text-base md:text-lg text-gray-600 font-medium italic leading-relaxed max-w-2xl border-l-4 border-gray-200 pl-6">
            I build AI automation systems that turn manual work into scalable processes. Working with enterprise clients to deliver measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            {/* Primary Button - Discovery Call */}
            <Link 
              to="/discovery"
              className="group flex items-center justify-between bg-white border-2 border-black text-black px-8 py-4 min-w-[200px] hover:bg-brand-red hover:border-brand-red hover:text-white transition-all duration-300"
            >
              <span className="font-bold tracking-widest text-sm uppercase">Discovery Call</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary Button - Case Studies */}
            <Link 
              to="/case-studies"
              className="group flex items-center justify-between bg-brand-red border-2 border-brand-red text-white px-8 py-4 min-w-[200px] hover:bg-black hover:border-black transition-all duration-300"
            >
              <span className="font-bold tracking-widest text-sm uppercase">Case Studies</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
           <div className="relative w-full max-w-[300px] lg:max-w-[380px] aspect-square group">
              {/* Decorative Offset Border */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-black rounded-3xl z-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              
              {/* Main Image */}
              <img 
                src="https://raw.githubusercontent.com/ashwanth2007/Resources/main/profile-pic.jpg" 
                alt="Ashwanth S" 
                className="relative z-10 w-full h-full object-cover rounded-3xl border-2 border-black shadow-2xl bg-gray-100"
              />
           </div>
        </div>
      </div>

      {/* Client Logos Scroll */}
      <div className="mt-8 border-t border-b border-gray-100 bg-white/50 backdrop-blur-sm py-6 md:py-8 overflow-hidden -mx-6 w-[calc(100%+3rem)] md:w-auto md:mx-0">
         <div className="relative w-full flex overflow-hidden group">
            <div className="flex w-max animate-marquee pause-on-hover items-center">
               {/* First Set */}
               {LOGOS.map((logo, index) => (
                 <div key={index} className="flex-shrink-0 h-10 md:h-12 w-28 md:w-36 flex items-center justify-center mr-16 md:mr-24">
                    <img 
                      src={logo} 
                      alt="Client Logo" 
                      className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300" 
                    />
                 </div>
               ))}
               
               {/* Second Set (Duplicate for Loop) */}
               {LOGOS.map((logo, index) => (
                 <div key={`dup-${index}`} className="flex-shrink-0 h-10 md:h-12 w-28 md:w-36 flex items-center justify-center mr-16 md:mr-24">
                    <img 
                      src={logo} 
                      alt="Client Logo" 
                      className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300" 
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
           {[
             { value: '$100k+', label: 'Worth of Systems Delivered' },
             { value: '100+', label: 'Hours Saved Per Month' },
             { value: '20+', label: 'Production Ready Systems' }
           ].map(item => (
             <div key={item.label} className="group">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter mb-4 group-hover:text-brand-red transition-colors">
                  {item.value}
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500 border-l-4 border-gray-200 pl-4 group-hover:border-brand-red transition-colors">
                  {item.label}
                </p>
             </div>
           ))}
        </div>
      </div>

      {/* Core Capabilities Section */}
      <div className="mt-24">
           <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-12 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-brand-red"></span>
              Core Capabilities
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FEATURES.map((feature, index) => (
                <div 
                  key={index} 
                  className="group border border-gray-200 p-8 hover:border-black hover:shadow-xl transition-all duration-300 bg-white flex flex-col items-start gap-6"
                >
                   <div className="p-3 bg-gray-50 rounded-sm group-hover:bg-black group-hover:text-white transition-all duration-300 text-brand-red shadow-sm">
                      {feature.icon}
                   </div>
                   <div>
                      <h3 className="text-xl font-black text-black uppercase tracking-tight mb-3 group-hover:text-brand-red transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed">
                        {feature.desc}
                      </p>
                   </div>
                </div>
              ))}
           </div>
      </div>

      {/* Few Deployed Agents Section */}
      <div className="mt-32">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red"></span>
            Few Deployed Agents
        </h2>

        <div className="space-y-12">
            {DEPLOYMENTS.map((deployment, index) => (
              <Link 
                key={index}
                to={`/case-studies/${deployment.projectId}`}
                className="block group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-black hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Video Side */}
                  <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden" onClick={(e) => e.stopPropagation()}>
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
                  <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-brand-red font-black text-2xl">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="h-px w-8 bg-gray-200"></div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none group-hover:text-brand-red transition-colors">
                      {deployment.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                      {deployment.description}
                    </p>

                    <div className="flex items-center gap-2 text-black font-bold text-sm uppercase tracking-widest group-hover:text-brand-red transition-colors">
                      View Case Study <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
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

      {/* Schedule Discovery Section */}
      <div className="mt-32">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red"></span>
            Contact
        </h2>
        
        <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase leading-none">
                SCHEDULE A <br/>
                <span className="text-brand-red">DISCOVERY CALL</span>
            </h1>
        </div>

        <div className="w-full h-[700px] bg-white border border-gray-200 shadow-2xl rounded-xl overflow-hidden relative z-10">
            <div style={{width:"100%", height:"100%", overflow:"scroll"}} id="my-cal-inline-custom-ai-agent-consultation"></div>
        </div>

        <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-grow bg-gray-200"></div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] whitespace-nowrap">
                Trusted by <span className="text-brand-red">5,500+</span> operators on LinkedIn
            </p>
            <div className="h-px flex-grow bg-gray-200"></div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="mt-32">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red"></span>
            Recommendations
        </h2>
        
        <div className="flex flex-col gap-16">
            {TRUSTED_BY.map((person, index) => (
                <div 
                    key={index} 
                    className="group relative bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(235,54,54,1)] transition-all duration-500"
                >
                    {/* Header with Profile Photo and Name */}
                    <div className="p-6 border-b-2 border-black flex items-center gap-4 bg-gray-50">
                        <img 
                            src={person.image} 
                            alt={person.name} 
                            className="w-14 h-14 rounded-full border-2 border-black object-cover"
                            referrerPolicy="no-referrer"
                        />
                        <div>
                            <h3 className="text-xl font-black text-black uppercase tracking-tight group-hover:text-brand-red transition-colors">
                                {person.name}
                            </h3>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">LinkedIn Recommendation</p>
                        </div>
                        
                        <div className="ml-auto">
                            <a 
                                href={person.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-black text-white p-3 rounded-full hover:bg-brand-red transition-colors flex items-center justify-center shadow-lg"
                            >
                                <ExternalLink size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="w-full bg-white p-4 md:p-8">
                        <img 
                            src={person.testimonial} 
                            alt={`${person.name} Recommendation Screenshot`} 
                            className="w-full h-auto block rounded-xl border border-gray-100 shadow-sm"
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