import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Award, FileCheck, ExternalLink, Eye, X, BadgeCheck, FileText, Medal, Star } from 'lucide-react';
import SEO from '../components/SEO';
import { TESTIMONIALS } from '../data';

type CertType = 'award' | 'lor' | 'certificate' | 'course';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  type: CertType;
  description: string;
  url: string;
}

const CERTIFICATES: Certificate[] = [
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

type Tab = 'certifications' | 'achievements' | 'recommendations';

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: 'certifications', label: 'Certifications', icon: <BadgeCheck size={16} /> },
  { id: 'achievements', label: 'Achievements', icon: <Medal size={16} /> },
  { id: 'recommendations', label: 'Recommendations', icon: <Star size={16} /> },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('certifications');

  const getIcon = (type: string) => {
    switch (type) {
      case 'award': return <Medal className="text-brand-red" size={28} />;
      case 'lor': return <FileText className="text-brand-red" size={28} />;
      case 'course': return <FileCheck className="text-brand-red" size={28} />;
      default: return <BadgeCheck className="text-brand-red" size={28} />;
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

  const certifications = CERTIFICATES.filter(c => c.type === 'certificate' || c.type === 'course');
  const achievements = CERTIFICATES.filter(c => c.type === 'award' || c.type === 'lor');

  const renderCertGrid = (items: Certificate[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((cert) => (
        <div
          key={cert.id}
          onClick={() => setSelectedCert(cert)}
          className="group relative bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-8 cursor-pointer hover:border-black dark:hover:border-white transition-colors duration-300 hover:shadow-xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 dark:bg-white/10 group-hover:bg-brand-red transition-colors duration-300"></div>

          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-sm group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300">
              {getIcon(cert.type)}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-gray-100 dark:border-white/10 px-2 py-1 bg-gray-50 dark:bg-white/5">
              {getLabel(cert.type)}
            </span>
          </div>

          <h3 className="text-xl font-black uppercase tracking-tighter mb-2 group-hover:text-brand-red transition-colors text-black dark:text-white">
            {cert.title}
          </h3>

          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
            Issued by {cert.issuer}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 leading-relaxed">
            {cert.description}
          </p>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black dark:text-white group-hover:text-brand-red transition-colors">
            <Eye size={16} />
            <span>View Document</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <SEO
        title="Credentials"
        description="Official credentials, achievements, and recommendations from leaders in AI architecture, growth, and consulting."
        keywords={["Credentials", "Awards", "AI Credentials", "Recommendations", "Testimonials"]}
      />

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Award className="text-black dark:text-white" size={32} />
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-black dark:text-white">
            Credentials
          </h1>
        </div>
        <div className="w-24 h-2 bg-brand-red mb-6"></div>
        <p className="text-gray-500 dark:text-gray-400 text-lg font-medium max-w-2xl">
          Formal recognition of expertise, achievements from across the industry, and recommendations from leaders I've worked with.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-12 border-b border-gray-200 dark:border-white/10">
        <div className="flex gap-1 overflow-x-auto -mb-px">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group inline-flex items-center gap-2.5 px-5 py-4 text-xs md:text-sm font-black uppercase tracking-[0.2em] border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'border-brand-red text-black dark:text-white'
                    : 'border-transparent text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <span className={isActive ? 'text-brand-red' : 'text-current'}>{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      {activeTab === 'certifications' && renderCertGrid(certifications)}
      {activeTab === 'achievements' && renderCertGrid(achievements)}

      {activeTab === 'recommendations' && (
        <div className="flex flex-col gap-12">
          {TESTIMONIALS.map((person, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-black border-2 border-black dark:border-white rounded-3xl overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.08)] hover:shadow-[14px_14px_0px_0px_rgba(235,54,54,1)] transition-shadow duration-300"
            >
              {/* Header */}
              <div className="px-5 py-4 md:px-6 md:py-5 border-b-2 border-black dark:border-white flex flex-col md:flex-row md:items-center gap-4 md:gap-6 bg-gray-50 dark:bg-white/5">
                <div className="flex items-center gap-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-14 h-14 rounded-full border-2 border-black dark:border-white object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-lg font-black text-black dark:text-white uppercase tracking-tight group-hover:text-brand-red transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest">
                      {person.headline}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:ml-4">
                  {person.stats?.map((stat, i) => (
                    <span key={i} className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                      {stat}
                    </span>
                  ))}
                </div>

                <div className="md:ml-auto">
                  <a
                    href={person.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-full hover:bg-brand-red dark:hover:bg-brand-red dark:hover:text-white transition-colors flex items-center justify-center"
                    aria-label={`Open ${person.name} profile`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Testimonial screenshot */}
              <div className="w-full bg-white dark:bg-black p-4 md:p-6">
                <img
                  src={person.testimonial}
                  alt={`${person.name} Recommendation`}
                  className="w-full h-auto block rounded-xl border border-gray-100 dark:border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Portal */}
      {selectedCert && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8">
          <div
            className="absolute inset-0 bg-black/95"
            onClick={() => setSelectedCert(null)}
          ></div>

          <div className="relative bg-white dark:bg-black w-full h-full max-w-6xl flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/10 bg-white dark:bg-black z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-sm">
                  {getIcon(selectedCert.type)}
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-black uppercase tracking-tighter leading-none text-black dark:text-white">
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
                  className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/5 text-xs font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors text-black dark:text-white"
                >
                  <ExternalLink size={14} />
                  Open Original
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-brand-red hover:text-white transition-colors text-black dark:text-white"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-100 dark:bg-white/5 relative w-full h-full overflow-hidden">
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
