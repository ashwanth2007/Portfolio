// Maps every label that appears in a project's tech_stack/tags array to a logo path.
// Logos live in /public/tech (copied from Downloads/Logos) plus a few external URLs
// for Render/Vercel/Next.js which are already used on the home tech-stack section.

const RENDER_LOGO = 'https://assets.findstack.com/hf8tetz6wrjfxx6vxooc6igw3tah';
const VERCEL_LOGO = 'https://smlvqzf0a1b66cku.public.blob.vercel-storage.com/images/Vercel%20Logo-IMoeV2W33gFclXzAfZxmAHqtjBuTzP.png';
const NEXTJS_LOGO = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s';

export const TECH_LOGOS: Record<string, string> = {
  // Models / LLMs
  'Claude': '/tech/claude.png',
  'Claude 4.6': '/tech/claude.png',
  'Claude Sonnet': '/tech/claude.png',
  'Claude Sonnet 4.6': '/tech/claude.png',
  'OpenAI': '/tech/openai.png',
  'OpenAI 5.4': '/tech/openai.png',
  'OpenAI GPT': '/tech/openai.png',
  'GPT 4.2': '/tech/openai.png',
  'GPT 5.2': '/tech/openai.png',
  'Gemini 3 Pro': '/tech/gemini.jpg',
  'Perplexity': '/tech/perplexity.png',
  'Perplexity API': '/tech/perplexity.png',
  'Perplexity Pro': '/tech/perplexity.png',

  // Automation
  'n8n': '/tech/n8n.png',
  'N8N': '/tech/n8n.png',
  'Make': '/tech/make.png',
  'Make.com': '/tech/make.png',
  'make.com': '/tech/make.png',
  'Zapier': '/tech/zapier.png',

  // Frameworks / Hosting
  'Next.js': NEXTJS_LOGO,
  'FastAPI': '/tech/fastapi.jpeg',
  'Vercel': VERCEL_LOGO,
  'Render': RENDER_LOGO,
  'Hostinger': '/tech/hostinger.png',

  // Database / CRM / PM
  'Airtable': '/tech/airtable.jpg',
  'HubSpot': '/tech/hubspot.jpg',
  'GoHighLevel CRM': '/tech/ghl.png',
  'Jira': '/tech/jira.png',

  // Lead enrichment / scraping
  'Apollo': '/tech/apollo.jpg',
  'Apollo.io': '/tech/apollo.jpg',
  'Apify': '/tech/apify.png',
  'Apify API': '/tech/apify.png',
  'Apify Custom Actors': '/tech/apify.png',
  'Clay': '/tech/clay.png',
  'Explorium': '/tech/explorium.jpg',
  'LeadMagic': '/tech/leadmagic.png',
  'Hunter.io': '/tech/hunter.png',
  'DataForSEO': '/tech/dataforseo.jpg',
  'FireCrawl': '/tech/firecrawl.png',
  'Texau': '/tech/texau.jpg',

  // Outreach / Communication
  'SmartLead': '/tech/smartlead.jpg',
  'LinkedIn': '/tech/linkedin.jpg',
  'LinkedIn API': '/tech/linkedin.jpg',
  'LinkedIn Scraping API': '/tech/linkedin.jpg',
  'Beehiiv': '/tech/beehiiv.jpg',
  'Slack': '/tech/slack.png',
  'Cal.com': '/tech/calcom.png',
  'Calendly': '/tech/calendly.png',

  // Creative / Media
  'fal.ai': '/tech/fal.png',
  'kie.ai': '/tech/kie.png',
  'Foreplay': '/tech/foreplay.jpg',
  'Gamma.app': '/tech/gamma.jpg',

  // Voice / Meetings / Reader
  'Retell AI': '/tech/retell.png',
  'Fireflies AI': '/tech/fireflies.jpg',
  'Inoreader': '/tech/inoreader.jpg',

  // Industry / Other
  'Lovable.app': '/tech/lovable.jpg',
  'Chatling': '/tech/chatling.jpg',

  // External APIs (rendered with parent brand logo)
  'Facebook Graph API': '/tech/facebook.png',
  'Google Docs API': '/tech/googledocs.png',
  'Google Docs': '/tech/googledocs.png',
  'Google Drive API': '/tech/googledrive.png',
  'Google Drive': '/tech/googledrive.png',
  'YouTube API': '/tech/youtube.png',
  'YouTube': '/tech/youtube.png',

  // Social platforms
  'Instagram': '/tech/instagram.jpg',
  'TikTok': '/tech/tiktok.jpg',
};

export const techLogo = (name: string): string | undefined => TECH_LOGOS[name];
