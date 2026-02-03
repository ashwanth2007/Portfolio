import React from 'react';
import { BookOpen } from 'lucide-react';
import SEO from '../components/SEO';

const RESOURCES = [
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7418405108117450752?collapsed=1",
    height: 541,
    width: 504,
    title: "Latest Update"
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7383807742794223617?collapsed=1",
    height: 545,
    width: 504,
    title: "Resource 1"
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7409505485059686400?collapsed=1",
    height: 616,
    width: 504,
    title: "Resource 2"
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7414363831335870464?collapsed=1",
    height: 541,
    width: 504,
    title: "Resource 3"
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7401616723038396417?collapsed=1",
    height: 668,
    width: 504,
    title: "Resource 4"
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7375954528698839040?collapsed=1",
    height: 498,
    width: 504,
    title: "Resource 5"
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7360275897725186048?collapsed=1",
    height: 541,
    width: 504,
    title: "Resource 6"
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7382513060269395968?collapsed=1",
    height: 590,
    width: 504,
    title: "Resource 7"
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7405884342071197696?collapsed=1",
    height: 541,
    width: 504,
    title: "Resource 8"
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen pt-32 pb-32 px-6 max-w-[1600px] mx-auto">
      <SEO 
        title="Resources & Insights" 
        description="Free professional resources, open-access knowledge, and curated insights on AI automation and system architecture."
        keywords={["AI Resources", "LinkedIn Insights", "Automation Learning", "Free Knowledge"]}
      />
      
      {/* Header */}
      <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-black" size={32} />
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Resources
            </h1>
        </div>
        <div className="w-24 h-2 bg-brand-red mb-6"></div>
        <p className="text-gray-500 text-lg font-medium max-w-2xl">
          Open-access professional resources and high-value insights. 
          Curated knowledge shared directly from the field.
        </p>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
        {RESOURCES.map((resource, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 p-2 shadow-sm hover:shadow-2xl transition-all duration-300 rounded-sm animate-in fade-in zoom-in duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
             <div className="overflow-hidden custom-scrollbar max-w-[90vw] md:max-w-full">
               <iframe 
                src={resource.src} 
                height={resource.height} 
                width={resource.width} 
                frameBorder="0" 
                allowFullScreen={true} 
                title={resource.title}
                className="mx-auto"
                style={{maxWidth: '100%'}}
               ></iframe>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;