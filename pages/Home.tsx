import React, { useState } from 'react';
import { ArrowRight, Building2, ShieldCheck, Target, Cpu, Zap, Clock, Infinity, RefreshCw, ScanLine, Webhook, Database, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOGOS = [
  "https://assets.channelinsider.com/uploads/2022/08/CI.BCG_.Profile.png",
  "https://muddymats.com/cdn/shop/articles/Is_Muddy_Mat_A_Legit_Company_5cd37497-5c40-430d-80ce-ca8c2f79067d.png?v=1742796297",
  "https://play-lh.googleusercontent.com/O7VJWFkx8kwZ3-Lh9WutnGhvb781o1TBkQ7eTQ9cyCmGF1gsLyqSGTMegcTHHjitVm0",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosM-lOX92wpdNNSVyCM3QbFI1mLTP_CVIkg&s",
  "https://static1.squarespace.com/static/646d7fcc041c0a51245304a0/t/6479170b6f690d78f18f3ad2/1685657359922/Zoe-Home-SocialImage.jpg?format=1500w",
  "https://www.ambrosiabakery.in/cdn/shop/files/ambrosialogozoomed_135x@2x.png?v=1613709932",
  "https://assets.cdn.filesafe.space/TOke3l5JIz3qqeafaEbt/media/6448af7d2191d0f2033b2242.webp",
  "https://instig8.ai/assets/images/image07.png?v=1eb8f38d"
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
    icon: <Target size={24} />,
    title: "500+ Leads / Week",
    desc: "Highly qualified leads generated weekly for B2B systems."
  },
  {
    icon: <Cpu size={24} />,
    title: "Multi-AI Orchestration",
    desc: "Powered by GPT-5.2, Claude 4.5 Opus, & Perplexity."
  },
  {
    icon: <Zap size={24} />,
    title: "4 Systems / Month",
    desc: "Average project delivery velocity for production-ready agents."
  },
  {
    icon: <Clock size={24} />,
    title: "90% Time Reduction",
    desc: "Massive efficiency gains based on recent project impact."
  },
  {
    icon: <Infinity size={24} />,
    title: "End-to-End Systems",
    desc: "Complete automation solutions, not point fixes—built for scale."
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Real-Time Data Sync",
    desc: "Live data synchronization between CRMs, databases, and tools."
  },
  {
    icon: <ScanLine size={24} />,
    title: "Lead Enrichment Engine",
    desc: "Automated qualification, scoring, and enrichment pipelines."
  },
  {
    icon: <Webhook size={24} />,
    title: "Custom Webhook Architecture",
    desc: "Event-driven systems with custom triggers and data flows."
  },
  {
    icon: <Database size={24} />,
    title: "Database Design & Management",
    desc: "Airtable, PostgreSQL, and NoSQL solutions for automation backends."
  },
  {
    icon: <Briefcase size={24} />,
    title: "5+ Industries Served",
    desc: "Media, Biotech, Consulting, Fintech, and Construction expertise."
  }
];

const Home = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-10">
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter leading-[0.9]">
            I BUILD <br/>
            <span className="text-brand-red">AUTOMATION</span> <br/>
            SYSTEMS.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 font-medium italic leading-relaxed max-w-2xl border-l-4 border-gray-200 pl-6">
            I build AI automation systems that turn manual work into scalable processes. Working with enterprise clients to deliver measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            {/* Primary Button - Discovery Call */}
            <Link 
              to="/discovery"
              className="group flex items-center justify-between bg-black text-white px-8 py-4 min-w-[200px] hover:bg-brand-red transition-all duration-300"
            >
              <span className="font-bold tracking-widest text-sm uppercase">Discovery Call</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0">
           <div className="relative w-full max-w-[400px] aspect-square group">
              {/* Decorative Offset Border */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-black rounded-3xl z-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              
              {/* Main Image */}
              <img 
                src="https://raw.githubusercontent.com/ashwanth2007/test/refs/heads/main/out-25.webp" 
                alt="Ashwanth S" 
                className="relative z-10 w-full h-full object-cover rounded-3xl border-2 border-black shadow-2xl bg-gray-100"
              />
           </div>
        </div>
      </div>

      {/* Client Logos Scroll */}
      <div className="mt-20 border-t border-b border-gray-100 bg-white/50 backdrop-blur-sm py-8 md:py-12 overflow-hidden -mx-6 w-[calc(100%+3rem)] md:w-auto md:mx-0">
         <div className="relative w-full flex overflow-hidden group">
            <div className="flex w-max animate-marquee pause-on-hover items-center">
               {/* First Set */}
               {LOGOS.map((logo, index) => (
                 <div key={index} className="flex-shrink-0 h-12 md:h-16 w-32 md:w-40 flex items-center justify-center mr-16 md:mr-24">
                    <img 
                      src={logo} 
                      alt="Client Logo" 
                      className="max-w-full max-h-full object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply" 
                    />
                 </div>
               ))}
               
               {/* Second Set (Duplicate for Loop) */}
               {LOGOS.map((logo, index) => (
                 <div key={`dup-${index}`} className="flex-shrink-0 h-12 md:h-16 w-32 md:w-40 flex items-center justify-center mr-16 md:mr-24">
                    <img 
                      src={logo} 
                      alt="Client Logo" 
                      className="max-w-full max-h-full object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply" 
                    />
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Achieved Metrics Section */}
      <div className="mt-32">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-12 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red"></span>
            Achieved Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
           {[
             { value: '$50k+', label: 'Worth of Systems Delivered' },
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
      <div className="mt-32">
           <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-12 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-brand-red"></span>
              Core Capabilities
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((feature, index) => (
                <div key={index} className="group border border-gray-200 p-8 hover:border-black hover:shadow-xl transition-all duration-300 bg-white flex flex-col items-start gap-6">
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
      
    </div>
  );
};

export default Home;