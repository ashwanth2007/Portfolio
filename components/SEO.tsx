import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  name?: string;
  image?: string;
  schema?: Record<string, any>;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  name = 'Ashwanth S',
  image = 'https://raw.githubusercontent.com/ashwanth2007/test/refs/heads/main/out-25.webp',
  schema,
  keywords = []
}) => {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = `${title} | AI Systems Architect`;
    document.title = fullTitle;

    // 2. Helper to set meta tags
    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Helper to set link tags (canonical)
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // --- Execute Updates ---

    // Standard Meta
    setMetaTag('name', 'description', description);
    if (keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }

    // Canonical
    const siteUrl = 'https://ashwanth.dev';
    const currentUrl = canonical ? canonical : window.location.href;
    setLinkTag('canonical', currentUrl);

    // Open Graph
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:site_name', name);

    // Twitter
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:creator', '@ashwanth_off');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // JSON-LD Schema Injection
    const scriptId = 'seo-structured-data';
    let script = document.getElementById(scriptId);

    if (schema) {
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else {
      if (script) {
        script.remove();
      }
    }

  }, [title, description, canonical, type, name, image, schema, keywords]);

  return null;
};

export default SEO;