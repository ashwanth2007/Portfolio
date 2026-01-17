import React from 'react';
import { ExternalLink, Linkedin, Phone, Globe, ShieldCheck, Mail } from 'lucide-react';
import SEO from '../components/SEO';

const Verification = () => {
  const verifiers = [
    {
      company: "Zoro Corp & Instig8.ai",
      poc: "Aryan Mahajan",
      role: "Co-Founder",
      links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/aryanmahajaninstig8/", icon: <Linkedin size={14} /> },
        { label: "Instig8.ai", url: "https://www.instig8.ai/", icon: <Globe size={14} /> },
        { label: "Zoro Corp", url: "https://zorocorp.com/", icon: <Globe size={14} /> },
        { label: "Twitter (X)", url: "https://x.com/aryanXmahajan", icon: <ExternalLink size={14} /> },
      ]
    },
    {
      company: "Freedom With AI",
      poc: "Kundan Sappa",
      role: "Community Manager (Reporting Authority)",
      details: ["POC Contact: +91 7032031038"],
      links: [
        { label: "Company Website", url: "https://freedomwithai.com/home-page-v2-mobile-page", icon: <Globe size={14} /> },
        { label: "Founder's LinkedIn (Avinash Mada)", url: "https://www.linkedin.com/in/avinash-mada/", icon: <Linkedin size={14} /> },
      ]
    },
    {
      company: "BCG Services",
      sub: "(BCG Immigration Consultancy Ltd / Insurelife Financial Group)",
      poc: "Dr. Charanjit S Kalra",
      role: "Managing Director",
      links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/dr-cj-kalra/", icon: <Linkedin size={14} /> },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <SEO 
        title="Verification Center" 
        description="Official verification sources and contact points for the projects and employment history of Ashwanth S."
        keywords={["Verification", "Reference Check", "Work History", "Project Verification"]}
      />

      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-brand-red" size={32} />
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
            Data Verification Center
            </h2>
        </div>
        <div className="w-24 h-2 bg-brand-red mb-6"></div>
        <p className="text-gray-500 text-lg font-medium max-w-2xl border-l-4 border-gray-200 pl-6">
          Trust is the currency of the digital age. Below are the direct points of contact and verification sources for the projects and experiences listed in this portfolio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {verifiers.map((verifier, index) => (
          <div key={index} className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
                <ShieldCheck size={100} />
             </div>
             
             <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">{verifier.company}</h3>
             {verifier.sub && <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">{verifier.sub}</p>}
             
             <div className="mt-6 space-y-4 relative z-10">
                <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Point of Contact</p>
                    <p className="text-lg font-bold text-black">{verifier.poc}</p>
                    <p className="text-sm font-medium text-brand-red">{verifier.role}</p>
                </div>

                {verifier.details && (
                    <div className="space-y-1">
                        {verifier.details.map((detail, i) => (
                            <p key={i} className="text-sm text-gray-600 font-mono">{detail}</p>
                        ))}
                    </div>
                )}

                <div className="pt-4 flex flex-wrap gap-3">
                    {verifier.links.map((link, i) => (
                        <a 
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
                        >
                            {link.icon}
                            {link.label}
                        </a>
                    ))}
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Verification;