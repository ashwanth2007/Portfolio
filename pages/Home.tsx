import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOGOS = [
  "https://assets.channelinsider.com/uploads/2022/08/CI.BCG_.Profile.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmibgA_uvf99-uLSXe8snocWGP52w-k5t7A&s",
  "https://muddymats.com/cdn/shop/articles/Is_Muddy_Mat_A_Legit_Company_5cd37497-5c40-430d-80ce-ca8c2f79067d.png?v=1742796297",
  "https://play-lh.googleusercontent.com/O7VJWFkx8kwZ3-Lh9WutnGhvb781o1TBkQ7eTQ9cyCmGF1gsLyqSGTMegcTHHjitVm0",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosM-lOX92wpdNNSVyCM3QbFI1mLTP_CVIkg&s",
  "https://static1.squarespace.com/static/646d7fcc041c0a51245304a0/t/6479170b6f690d78f18f3ad2/1685657359922/Zoe-Home-SocialImage.jpg?format=1500w",
  "https://www.ambrosiabakery.in/cdn/shop/files/ambrosialogozoomed_135x@2x.png?v=1613709932",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3F2MeY60k4s3x37iAkE1cJUr-0eWLJlEKA&s",
  "https://assets.cdn.filesafe.space/TOke3l5JIz3qqeafaEbt/media/6448af7d2191d0f2033b2242.webp",
  "https://instig8.ai/assets/images/image07.png?v=1eb8f38d"
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: '01',
      title: 'PROFILE',
      content: (
        <div>
          <div className="w-12 h-1 bg-brand-red mb-4"></div>
          <p className="text-gray-400 text-xs font-mono leading-relaxed">
            ASHWANTH S.<br/>
            LOC: INDIA<br/>
            SPEC: AUTOMATION<br/>
            STATUS: ACTIVE
          </p>
        </div>
      )
    },
    {
      id: '02',
      title: 'SKILLS',
      content: (
        <div>
          <div className="w-12 h-1 bg-brand-red mb-4"></div>
          <ul className="text-gray-400 text-xs font-mono leading-relaxed space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-brand-red">::</span> Context Engineering
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-red">::</span> AI Agents & Assistants
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-red">::</span> Workflow Auto. Eng.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-red">::</span> Vibe Coding/Marketing
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-red">::</span> Web Development
            </li>
          </ul>
        </div>
      )
    },
    {
      id: '03',
      title: 'LANGUAGES',
      content: (
        <div>
           <div className="w-12 h-1 bg-brand-red mb-4"></div>
           <div className="space-y-3">
             {[
               { lang: 'English', level: 'Native / Bilingual' },
               { lang: 'Tamil', level: 'Native / Bilingual' },
               { lang: 'Telugu', level: 'Native / Bilingual' },
               { lang: 'Hindi', level: 'Limited Working' }
             ].map(l => (
               <div key={l.lang} className="flex justify-between items-end text-[10px] md:text-xs font-mono border-b border-gray-800/50 pb-1">
                 <span className="text-white font-bold">{l.lang}</span>
                 <span className="text-gray-500 text-[9px] uppercase tracking-wide">{l.level}</span>
               </div>
             ))}
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-8 space-y-10">
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter leading-[0.9]">
            I BUILD <br/>
            <span className="text-brand-red">AUTOMATION</span> <br/>
            SYSTEMS.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl border-l-4 border-gray-200 pl-6">
            Specializing in enterprise-grade AI automation, multi-agent orchestration, and scalable infrastructure. 
            I turn manual operations into revenue-generating code.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Link 
              to="/projects"
              className="group flex items-center justify-between bg-black text-white px-8 py-4 min-w-[200px] hover:bg-brand-red transition-all duration-300"
            >
              <span className="font-bold tracking-widest text-sm uppercase">View Work</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
             <Link 
              to="/journey"
              className="group flex items-center justify-between border-2 border-black text-black px-8 py-4 min-w-[200px] hover:bg-black hover:text-white transition-all duration-300"
            >
              <span className="font-bold tracking-widest text-sm uppercase">My Journey</span>
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>

        {/* Visual / Interactive Card Element */}
        <div className="lg:col-span-4 hidden lg:flex justify-center items-center h-full">
           <div className="relative w-full aspect-[3/4]">
              
              {/* Decorative Squares - Now relative to the specific card wrapper */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-black z-0"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-100 z-0"></div>

              {/* Main Card */}
              <div className="absolute inset-0 bg-brand-darkgray overflow-hidden flex flex-col justify-between transition-all duration-500 z-10 shadow-xl">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614064641938-3e852997b060?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-50 mix-blend-overlay"></div>
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
                    <div className="flex justify-between items-start">
                        <div className="text-xs font-bold text-brand-red uppercase tracking-widest bg-black/20 backdrop-blur-sm px-2 py-1">
                            {slides[currentSlide].title}
                        </div>
                        <div className="text-4xl font-black text-white tracking-tighter opacity-80">
                            {slides[currentSlide].id}
                        </div>
                    </div>
                    
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 key={currentSlide}">
                        {slides[currentSlide].content}
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="absolute bottom-0 right-0 z-20 flex border-t border-l border-white/10 bg-black/50 backdrop-blur-sm">
                    <button 
                      onClick={prevSlide}
                      className="p-3 text-white hover:bg-brand-red hover:text-white transition-colors border-r border-white/10"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="p-3 text-white hover:bg-brand-red hover:text-white transition-colors"
                      aria-label="Next Slide"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
              </div>
           </div>
        </div>

      </div>

      {/* Client Logos Scroll */}
      <div className="mt-20 border-t border-b border-gray-100 bg-white/50 backdrop-blur-sm py-8 md:py-12 overflow-hidden -mx-6 w-[calc(100%+3rem)] md:w-auto md:mx-0">
         <div className="relative w-full flex overflow-hidden group">
            {/* 
              Fixed Infinite Scroll Logic:
              1. Removed container padding and flex-gap to avoid math errors in 50% translation.
              2. Used `w-max` to ensure container fits all children width.
              3. Used explicit `mr` (margin-right) on items to handle spacing.
              4. `translateX(-50%)` now moves exactly the width of Set 1 (Items + Margins), aligning Set 2 perfectly.
            */}
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

      {/* Metrics Section */}
      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {[
             { value: '$50k+', label: 'Worth of Systems Delivered' },
             { value: '100+', label: 'Hours Saved Per Month' },
             { value: '20+', label: 'Production Ready Systems' }
           ].map(item => (
             <div key={item.label} className="group">
                <h3 className="text-6xl md:text-7xl font-black text-black tracking-tighter mb-2 group-hover:text-brand-red transition-colors">
                  {item.value}
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
                  {item.label}
                </p>
             </div>
           ))}
        </div>
      </div>
      
    </div>
  );
};

export default Home;