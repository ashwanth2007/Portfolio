import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Award, FileCheck, ExternalLink, Eye, X, BadgeCheck, FileText, Medal, ShieldAlert } from 'lucide-react';

const CERTIFICATES = [
  {
    id: 'freedom-award',
    title: 'Freedom Finisher Award',
    issuer: 'Freedom With AI',
    type: 'award',
    description: 'Winner of the 10-Week Hackathon Season 1. Recognition for outstanding performance in AI automation challenges.',
    url: 'https://drive.google.com/file/d/1iP-kHWJf03mp1ai82n3iPYwi2uKft35U/preview'
  },
  {
    id: 'lor-freedom',
    title: 'Letter of Recommendation',
    issuer: 'Freedom With AI',
    type: 'lor',
    description: 'Official endorsement of performance during the AI Systems Architect Internship from Avinash Mada.',
    url: 'https://drive.google.com/file/d/1JPCyYsTWqj-wl27Da57HEbeIkHhFPW8G/preview'
  },
  {
    id: 'intern-cert',
    title: 'Internship Completion',
    issuer: 'Freedom With AI',
    type: 'certificate',
    description: 'Certification of completing the rigorous AI Systems Architect internship program.',
    url: 'https://drive.google.com/file/d/1JNoCACOwQPnDyQEAEUox4UfY092A-gob/preview'
  },
  {
    id: 'adv-ai',
    title: 'Advance AI & ChatGPT Expert',
    issuer: 'Freedom With AI',
    type: 'certificate',
    description: 'Advanced proficiency certification in LLM prompting, system design, and AI workflow architecture.',
    url: 'https://drive.google.com/file/d/1mTAqb6EnVkmkHufAxxz-tKYN62O-xD86/preview'
  },
  {
    id: 'blueprint',
    title: 'Blueprint Course Completion',
    issuer: 'Freedom With AI',
    type: 'course',
    description: 'Mastery of AI automation blueprints and enterprise workflow architecture.',
    url: 'https://drive.google.com/file/d/1lHjACaT0RHXjrsguMHD1dEtcq_wM79ON/preview'
  },
  {
    id: 'l2-web',
    title: 'L2 Web Developer',
    issuer: 'Code Young',
    type: 'certificate',
    description: 'Advanced web development certification focusing on application logic and interactivity.',
    url: 'https://drive.google.com/file/d/1k7oaECGXHDEOBO-42uXGeJlq3tHw7__h/preview'
  },
  {
    id: 'l1-web',
    title: 'L1 Web Developer',
    issuer: 'Code Young',
    type: 'certificate',
    description: 'Foundational web development skills certification including HTML5 and CSS3 mastery.',
    url: 'https://drive.google.com/file/d/196zJWgpPuRZ64oF8WE5JFPh_tdYfAkYT/preview'
  },
  {
    id: 'prompt-mastery',
    title: 'Prompt Library Mastery',
    issuer: 'Freedom With AI',
    type: 'certificate',
    description: 'Specialized certification in constructing high-performance prompt libraries for enterprise AI systems.',
    url: 'https://drive.google.com/file/d/1RSVxxdAkV_WNhbQ-_VA2e6fNsFpagZfk/preview'
  },
  {
    id: 'fwai-bootcamp',
    title: 'AI Bootcamp Completion',
    issuer: 'Freedom With AI',
    type: 'course',
    description: 'Intensive bootcamp covering the complete landscape of generative AI tools and deployment strategies.',
    url: 'https://drive.google.com/file/d/1B-IU3UFtSJCux6A6eGaM0P6PPq0HMV7Z/preview'
  },
  {
    id: 'ai-tools-arsenal',
    title: 'AI Tools Arsenal',
    issuer: 'Freedom With AI',
    type: 'certificate',
    description: 'Comprehensive training on integrating diverse AI tools into cohesive automation workflows.',
    url: 'https://drive.google.com/file/d/11YRSpjRrhZkuO9NjzjcdJhqqmKNOQ3KX/preview'
  },
  {
    id: 'fwai-masterclass',
    title: 'AI Master Class',
    issuer: 'Freedom With AI',
    type: 'course',
    description: 'Advanced master class focused on strategic implementation of AI in business processes.',
    url: 'https://drive.google.com/file/d/1UrbZTZUYNQnv1julLOl0TpvyI-acXtUU/preview'
  },
  {
    id: 'udemy-social-eng',
    title: 'Social Engineering from Scratch',
    issuer: 'Udemy',
    type: 'course',
    description: 'Cybersecurity certification focusing on human psychology, persuasion, and security vulnerabilities.',
    url: 'https://www.udemy.com/certificate/UC-7a86357b-1a6f-43ac-82e8-3065a5a7280c/'
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES[0] | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'award': return <Medal className="text-brand-red" size={32} />;
      case 'lor': return <FileText className="text-brand-red" size={32} />;
      case 'course': return <FileCheck className="text-brand-red" size={32} />;
      default: return <BadgeCheck className="text-brand-red" size={32} />;
    }
  };

  const getLabel = (type: string) => {
    switch (type) {
      case 'lor': return 'Recommendation';
      case 'award': return 'Achievement';
      case 'course': return 'Coursework';
      default: return 'Certification';
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-32 px-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
            <Award className="text-black" size={32} />
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Credentials
            </h2>
        </div>
        <div className="w-24 h-2 bg-brand-red mb-6"></div>
        <p className="text-gray-500 text-lg font-medium max-w-2xl">
          Formal recognition of expertise, awards, and completed qualifications. 
          Verified documentation of the journey.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATES.map((cert) => (
          <div 
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="group relative bg-white border border-gray-200 p-8 cursor-pointer hover:border-black transition-all duration-300 hover:shadow-xl overflow-hidden"
          >
            {/* Hover Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-brand-red transition-colors duration-300"></div>

            <div className="flex justify-between items-start mb-6">
               <div className="p-3 bg-gray-50 rounded-sm group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  {getIcon(cert.type)}
               </div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-gray-100 px-2 py-1 bg-gray-50">
                 {getLabel(cert.type)}
               </span>
            </div>

            <h3 className="text-xl font-black uppercase tracking-tighter mb-2 group-hover:text-brand-red transition-colors">
              {cert.title}
            </h3>
            
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
              Issued by {cert.issuer}
            </p>

            <p className="text-sm text-gray-600 mb-8 line-clamp-3 leading-relaxed">
              {cert.description}
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:text-brand-red transition-colors">
               <Eye size={16} />
               <span>View Document</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Portal */}
      {selectedCert && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-black/95 backdrop-blur-sm"
             onClick={() => setSelectedCert(null)}
           ></div>

           {/* Modal Content */}
           <div className="relative bg-white w-full h-full max-w-6xl flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
              
              {/* Toolbar */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white z-10">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-black text-white rounded-sm">
                        {getIcon(selectedCert.type)}
                    </div>
                    <div>
                        <h3 className="text-sm md:text-lg font-black uppercase tracking-tighter leading-none">
                            {selectedCert.title}
                        </h3>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                            {selectedCert.issuer}
                        </p>
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-2">
                    <a 
                      href={selectedCert.url.replace('/preview', '/view')} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 text-xs font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors"
                    >
                        <ExternalLink size={14} />
                        Open Original
                    </a>
                    <button 
                        onClick={() => setSelectedCert(null)}
                        className="p-2 hover:bg-brand-red hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                 </div>
              </div>

              {/* Iframe Container */}
              <div className="flex-1 bg-gray-100 relative w-full h-full overflow-hidden">
                 <iframe 
                    src={selectedCert.url}
                    className="w-full h-full border-0"
                    title={selectedCert.title}
                    allow="autoplay"
                 ></iframe>
              </div>
           </div>
        </div>,
        document.body
      )}

    </div>
  );
};

export default Certifications;