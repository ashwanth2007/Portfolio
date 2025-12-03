import { Project, Experience, ToolCategory } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'zoro',
    period: 'Present',
    company: 'Zoro Corp',
    role: 'AI Systems Architect',
    type: 'work',
    description: 'The Scale Phase. Architecting autonomous systems for Fortune 500s. Building AI agent systems for capital-intensive B2B firms and expanding capabilities in multi-agent orchestration.'
  },
  {
    id: 'instig8',
    period: 'May 2025 - Present',
    company: 'Instig8.AI',
    role: 'AI Automation Developer',
    type: 'work',
    description: 'The Build Phase. Architecting complex B2B automation systems. Developed N8N workflow engineering patterns and multi-AI orchestration for high-ticket clients.'
  },
  {
    id: 'freedom',
    period: 'Feb 2025 - June 2025',
    company: 'Freedom With AI',
    role: 'Intern',
    type: 'internship',
    description: 'The Foundation Phase. Community & Tools Research. Managed 160+ members, researched emerging AI tools, and built initial workflow automations.'
  },
  {
    id: 'college',
    period: '2024 - 2028',
    company: 'VIT Vellore',
    role: 'BTech Computer Science',
    type: 'education',
    description: 'Pursuing degree while building real-world enterprise infrastructure. Choosing the outcome-driven engineering path over traditional theory.'
  }
];

export const TOOL_ARSENAL: ToolCategory[] = [
  {
    name: "AI Models & LLMs",
    tools: ["Claude 4.5", "Gemini 3 Pro", "GPT-4o", "Perplexity Pro", "o3-mini"]
  },
  {
    name: "Orchestration & Workflow",
    tools: ["N8N Enterprise", "Make.com", "Retell AI", "Bland AI"]
  },
  {
    name: "Intelligence & Data",
    tools: ["Apollo.io", "Explorium", "Clay", "Instantly", "FireCrawl", "Apify"]
  },
  {
    name: "Infrastructure & DB",
    tools: ["Airtable", "Supabase", "Pinecone", "HubSpot", "SmartLead"]
  }
];

export const PROJECTS: Project[] = [
  // --- ZORO CORP CASE STUDIES ---
  {
    id: 'zoro-onindus',
    category: 'ZORO CORP',
    title: 'Onindus Construction Intel',
    subtitle: 'Automated signal monitoring & multi-channel outreach system.',
    client: 'Onindus (Construction Consulting)',
    role: 'Lead Developer',
    impact_summary: '50+ New Leads/Week',
    tags: ['N8N', 'HubSpot', 'Clay', 'Jiva AI'],
    context: 'The construction consulting firm was manually tracking construction projects and job changes across healthcare, education, and municipal sectors.',
    problem: 'They could only send 100 emails per day with minimal personalization, limiting their ability to scale outreach and capture opportunities from $50M+ construction projects. Manual research took 2+ hours per company.',
    solution: 'Designed and built N8N workflows for automated signal monitoring across news feeds and LinkedIn. Implemented a lead enrichment pipeline with 90%+ email validity and AI-powered message generation using Claude/GPT.',
    architecture: [
      'Automated signal monitoring (News/Press/LinkedIn)',
      'Lead enrichment pipeline (90%+ Email Validity)',
      'AI-powered message generation (Claude/GPT)',
      'Multi-domain email infrastructure'
    ],
    tech_stack: ['N8N', 'Airtable', 'Claude', 'GPT-4', 'HubSpot', 'Clay', 'Jiva AI', 'Perplexity API'],
    results: [
      '90%+ email deliverability rate',
      '10+ qualified meetings per month',
      'Scaled from 100 emails/day to 500+ emails/month',
      'Reduced research time from 2+ hours to 15 mins'
    ]
  },
  {
    id: 'zoro-bcg',
    category: 'ZORO CORP',
    title: 'BCG Executive System',
    subtitle: 'Fortune 500 intelligence & LinkedIn content automation.',
    client: 'Boston Consulting Group (Partner)',
    role: 'System Architect',
    impact_summary: '25-40 Leads/Month',
    tags: ['N8N', 'Explorium', 'GPT-4', 'Apify'],
    context: 'BCG TMT practice partner was spending excessive time manually creating LinkedIn content and researching Fortune 500 prospects for $500M-$1B revenue companies.',
    problem: 'No systematic way to monitor competitive intelligence, generate C-suite relevant content, or engage high-value enterprise prospects at scale.',
    solution: 'Built a dual-engine system: 1) Content Automation scraping social signals with AI classification, and 2) B2B Intelligence using Explorium for financial data and executive profiling.',
    architecture: [
      'Real-time monitoring scraping (TikTok/LinkedIn/X)',
      'AI Classification Engine (85% rejection rate)',
      'Stephen Edison voice profile training',
      'Explorium financial signal detection'
    ],
    tech_stack: ['N8N', 'Airtable', 'GPT-4', 'Claude', 'Perplexity Pro', 'Explorium', 'FireCrawl', 'Apify'],
    results: [
      '90% reduction in manual content creation time',
      '5-7 strategic posts per week',
      '25-40 qualified leads monthly',
      '~$1,000 monthly infrastructure cost for complete system'
    ]
  },
  {
    id: 'zoro-aliyah',
    category: 'ZORO CORP',
    title: 'Aliyah Lead Scraping',
    subtitle: 'Semantic filtering & immigration lead identification.',
    client: 'Aliyah Immigration',
    role: 'Developer',
    impact_summary: 'False Positives < 10%',
    tags: ['GPT-4', 'LinkedIn API', 'Python'],
    context: 'Clients needed to identify US-based individuals considering Jewish immigration (Aliyah) to Israel.',
    problem: 'The keyword "Aliyah" is a common name, resulting in 80%+ false positives. Manual filtering took days per week with high error rates.',
    solution: 'Designed a GPT-4 content classification system with 1-10 relevance scoring to semantically distinguish between immigration posts and name mentions, coupled with a 6-step email enrichment waterfall.',
    architecture: [
      'GPT-4 Content Classification (Semantic Analysis)',
      'LinkedIn Scraping for keyword variations',
      '6-step waterfall email enrichment',
      'US-wide geographic filtering'
    ],
    tech_stack: ['LinkedIn Scraping API', 'GPT-4', 'Apollo.io', 'Hunter.io', 'Airtable', 'Anymail API'],
    results: [
      'Reduced false positives from 80%+ to under 10%',
      '12 months of historical data processed',
      'Weekly automated monitoring setup',
      'Reduced qualification time from days to hours'
    ]
  },
  
  // --- INSTIG8.AI PROJECTS ---
  {
    id: 'instig8-recipe',
    category: 'INSTIG8',
    title: 'Recipe Automation System',
    subtitle: 'Multi-lingual content scraping & sentiment analysis',
    client: 'FalkeMedia',
    role: 'Developer',
    impact_summary: '80% Workload Reduction',
    tags: ['N8N', 'Make', 'Apify', 'Airtable'],
    context: 'A German media company with 500K newsletter subscribers needed to discover and structure air fryer recipe content from social media.',
    problem: 'Manual content curation took 10+ hours per week with inconsistent quality and no sentiment analysis. No automated way to scrape, analyze sentiment, or generate dual-language docs.',
    solution: 'Built N8N workflow for TikTok/Instagram scraping using Apify, implemented SRT transcription, AI sentiment analysis, and automated Google Doc export in English and German.',
    architecture: [
      'TikTok/Instagram scraping via Apify',
      'SRT transcription processing',
      'AI sentiment analysis system',
      'Dual-language Google Doc export'
    ],
    tech_stack: ['N8N', 'Make.com', 'Airtable', 'Apify', 'Google Docs', 'OpenAI'],
    results: [
      'Reduced curation time from 10+ hours to 2 hours/week',
      'Automated dual-language output (English/German)',
      'Structured recipe database with engagement metrics',
      'Duplicate detection preventing wasted processing'
    ]
  },
  {
    id: 'instig8-boom',
    category: 'INSTIG8',
    title: 'Viral Playbook Generator',
    subtitle: 'Multi-platform viral content analysis',
    client: 'Boom & Wisdom',
    role: 'Developer',
    impact_summary: 'Multi-Platform Analysis',
    tags: ['N8N', 'Apify', 'Airtable', 'AI'],
    context: 'Two products (Boom & Wisdom) needed to analyze viral content across 6 social platforms to understand engagement drivers in their niches.',
    problem: 'Manual research was ad-hoc with no reproducible methodology. Needed a modular system to scrape, analyze sentiment, and generate actionable viral playbooks.',
    solution: 'Designed single N8N workflow with router-based architecture for 6 platforms (TikTok, YouTube, Twitter, LinkedIn, FB, IG) with Apify scraping and AI sentiment analysis.',
    architecture: [
      'Router-based N8N workflow for 6 platforms',
      'Apify pay-per-event scraping actors',
      'AI sentiment & pattern identification',
      'Webhook-triggered on-demand execution'
    ],
    tech_stack: ['N8N', 'Apify', 'Airtable', 'AI Models'],
    results: [
      'Unified analysis across 6 social platforms',
      'Generated actionable viral playbooks for 2 products',
      'Modular architecture enabling easy replication',
      'Webhook-triggered execution for on-demand analysis'
    ]
  },
  {
    id: 'instig8-foresight',
    category: 'INSTIG8',
    title: 'LinkedIn Content Engine',
    subtitle: 'Automated discovery & draft generation',
    client: 'Foresight',
    role: 'Developer',
    impact_summary: '85% Time Reduction',
    tags: ['Make', 'GPT-4', 'Slack', 'Airtable'],
    context: 'Clients needed consistent LinkedIn content but lacked automated ways to monitor sources and generate drafts.',
    problem: 'Manual process took 4-5 hours per post. No automated discovery, relevancy filtering, or multi-variant draft generation.',
    solution: 'Built automated monitoring via Make.com, AI relevancy classification (70+ score), three-variant draft generation, and Kanban publishing workflow.',
    architecture: [
      'Automated profile & keyword monitoring',
      'AI relevancy classification & scoring',
      'Persona-specific draft generation (3 variants)',
      'Kanban publishing workflow with Slack'
    ],
    tech_stack: ['Make.com', 'Airtable', 'GPT-4', 'Slack', 'YouTube API'],
    results: [
      'Reduced content creation from 4-5 hours to 45 mins',
      'Three-variant AI draft generation per topic',
      'Automated Slack notifications for workflow status',
      'Persona-driven styling matching brand voice'
    ]
  },
  {
    id: 'instig8-zoefoundry',
    category: 'INSTIG8',
    title: 'Warm Intro Outreach',
    subtitle: 'Mutual connection mapping & outreach',
    client: 'Zoefoundry',
    role: 'Developer',
    impact_summary: '83% Research Reduction',
    tags: ['Apify', 'Texau', 'Make', 'Airtable'],
    context: 'Clients needed to leverage warm introductions via mutual LinkedIn connections systematically.',
    problem: 'Manual process took 2+ hours per prospect to map connections and generate requests. No automated way to map mutual connections or manage multi-stage campaigns.',
    solution: 'Integrated Apify (Apollo) and Texau for connection mapping, with Airtable CRM and Make.com for automated campaign triggers and multi-stage sequences.',
    architecture: [
      'Apollo.io lead scraping (Apify)',
      '1st-degree mutual connection mapping (Texau)',
      'Multi-stage email sequence (Stage 0-3)',
      'Webhook-based response handling'
    ],
    tech_stack: ['Apify', 'Texau', 'Airtable', 'Make.com', 'Apollo.io'],
    results: [
      'Reduced prospect research from 2+ hours to 20 mins',
      'Automated 1st-degree mutual connection mapping',
      'Dynamic token personalization for authenticity',
      'Real-time status tracking in Airtable'
    ]
  },
  {
    id: 'instig8-xpertlink',
    category: 'INSTIG8',
    title: 'Content Strategy Automation',
    subtitle: 'Trend analysis & SEO calendar generation',
    client: 'XpertLink',
    role: 'Developer',
    impact_summary: 'Weeks to Days Planning',
    tags: ['N8N', 'Web Scraping', 'SEO', 'AI'],
    context: 'Client needed to become a leading resource for AI business insights based on actual industry trends.',
    problem: 'Manual content planning was ad-hoc. Needed automated analysis of 1000+ articles to identify patterns and generate SEO-optimized calendar.',
    solution: 'Built system to extract data from 1000+ URLs, perform AI pattern analysis, identify strategic themes, and generate SEO-optimized content calendar.',
    architecture: [
      'Web article data extraction (1000+ URLs)',
      'AI content pattern & theme analysis',
      'SEO-optimized calendar generation',
      'Strategic theme classification'
    ],
    tech_stack: ['N8N', 'Web Scraping Tools', 'AI Models', 'SEO Systems'],
    results: [
      'Annual content calendar generated from 1000+ articles',
      'Identified 6 key strategic themes',
      'SEO-optimized categorization across 8 types',
      'Data-driven topic selection vs manual guessing'
    ]
  },
  {
    id: 'instig8-teknova',
    category: 'INSTIG8',
    title: 'Teknova Lead Journey',
    subtitle: 'Biotech qualification & product matching',
    client: 'Teknova',
    role: 'Developer',
    impact_summary: '900+ Companies Qualified',
    tags: ['Clay', 'GPT-4', 'N8N', 'Apollo'],
    context: 'Teknova (biotech reagent manufacturer) needed to qualify 900+ companies and recommend exactly 3 relevant products per prospect.',
    problem: 'Manual research took 30+ minutes per company. Needed to synthesize complex data (modality, stage, manufacturing) into high-confidence recommendations.',
    solution: 'Built 6-stage AI classification suite (Modality, Stage, Product Match) and conditional waterfall email recovery system.',
    architecture: [
      '6-Stage AI Classification Suite',
      'Conditional waterfall email recovery',
      'Campaign segmentation by modality',
      'Unified Airtable data hub'
    ],
    tech_stack: ['Clay', 'Apollo.io', 'N8N', 'Airtable', 'GPT-4', 'Enrichley', 'LeadMagic'],
    results: [
      'Automated qualification of 900+ companies',
      'Reduced research time by 95% (30m to automation)',
      'Science-first product recommendations (3 per prospect)',
      'Revenue-preservation email stack'
    ]
  },
  {
    id: 'instig8-patent',
    category: 'INSTIG8',
    title: 'Patent Data Integration',
    subtitle: 'Automated retrieval & entity linking',
    client: 'Biotech Firm',
    role: 'Developer',
    impact_summary: 'Automated Data Entry',
    tags: ['N8N', 'Airtable', 'API'],
    context: 'Clients needed to collect and organize biotech patent data with proper linking between patents, inventors, and assignees.',
    problem: 'Manual data entry was error-prone and time-consuming. Needed systematic duplicate detection and entity linking.',
    solution: 'Built N8N workflow for patent retrieval, duplicate detection, and automated linking of Patents, Inventors, and Assignees in Airtable.',
    architecture: [
      'Patent API retrieval workflow',
      'Duplicate detection logic',
      'Entity linking (Patent ↔ Inventor ↔ Assignee)',
      'Structured claims formatting'
    ],
    tech_stack: ['N8N', 'Airtable', 'Patent API'],
    results: [
      'Automated retrieval and processing (10 patents/run)',
      'Maintained data integrity via automated linking',
      'Structured claims with numbers and dependencies',
      'Reduced data entry time from hours to minutes'
    ]
  },
  {
    id: 'instig8-ambrosia',
    category: 'INSTIG8',
    title: 'Ambrosia Email Automation',
    subtitle: 'Dynamic customer segmentation',
    client: 'Ambrosia',
    role: 'Developer',
    impact_summary: '80% Setup Reduction',
    tags: ['Airtable', 'Beehiiv', 'Make'],
    context: 'Ambrosia needed to send hyper-targeted weekly emails to 7 distinct customer segments but lacked a zero-code solution.',
    problem: 'Manual segmentation took 3-4 hours per week. Needed to sync Airtable segments to Beehiiv with dynamic exclusions.',
    solution: 'Designed 7-segment structure with dual static/dynamic versions, CSV export workflow, and Beehiiv integration with post-send tagging.',
    architecture: [
      'Dynamic segment definition & exclusion',
      'CSV export & Beehiiv sync workflow',
      'Post-send tagging protocol',
      'Template duplication system'
    ],
    tech_stack: ['Airtable', 'Beehiiv', 'Make.com'],
    results: [
      'Reduced campaign setup from 4 hours to 20 mins',
      'Automated 7 unique customer segments',
      'Eliminated duplicate sends via auto-exclusion',
      'Zero-code operation for non-technical staff'
    ]
  },

  // --- FREEDOM WITH AI PROJECTS ---
   {
    id: 'freedom-tracking',
    category: 'FREEDOM WITH AI',
    title: 'Diamond Member Tracking',
    subtitle: 'Engagement & Progress Monitoring System',
    client: 'Freedom With AI',
    role: 'Intern',
    impact_summary: '60% Response Rate',
    tags: ['Google Sheets', 'Fathom', 'CRM'],
    context: 'Freedom With AI had 160+ Diamond Certification Members across 3 batches with no systematic way to track individual progress, identify blockers, or ensure completion.',
    problem: 'Members were dropping off silently, and leadership had no visibility into completion rates or specific obstacles. Needed a way to conduct 1-on-1 tracking.',
    solution: 'Built a comprehensive member engagement system with 1-on-1 progress calls, 3-tier follow-up protocol, color-coded status tracking, and international time-zone coordination.',
    architecture: [
      'Google Calendar Booking System',
      'Fathom Transcription Analysis',
      '3-Tier Follow-up Protocol',
      'Color-coded Status Dashboard'
    ],
    tech_stack: ['Google Meet', 'WhatsApp', 'Fathom', 'Google Sheets', 'Google Calendar'],
    results: [
      '50-60% response rate from Indian members',
      'Identified 49 unreachable members for attention',
      'Documented 35 work pressure & 25 technical cases',
      'Facilitated batch transitions for stalled members'
    ]
  },
  {
    id: 'freedom-support',
    category: 'FREEDOM WITH AI',
    title: 'Community Tech Support',
    subtitle: 'Query Resolution & Escalation Matrix',
    client: 'Freedom With AI',
    role: 'Intern',
    impact_summary: 'Same-day Resolution',
    tags: ['WhatsApp', 'Make', 'Retell AI'],
    context: 'Diamond members facing daily technical issues with CRM access, tool integrations (Make.com, Retell AI), and platform configurations.',
    problem: 'No dedicated support channel existed, causing frustration and delays. Queries piled up with no systematic resolution process.',
    solution: 'Established a primary support system with a 3-tier escalation hierarchy (Self-resolution → Manager → Tech Lead) and query categorization.',
    architecture: [
      '3-Tier Escalation Hierarchy',
      'Query Categorization System',
      'Knowledge Base Creation',
      'Platform-specific Troubleshooting'
    ],
    tech_stack: ['WhatsApp', 'CRM', 'Make.com', 'Retell AI', 'Millis AI', 'Bolt.new'],
    results: [
      'Reduced queries from 40 to 20 per week',
      'Same-day resolution for majority of technical issues',
      'Prevented member dropoff by removing blockers',
      'Identified systematic platform infrastructure issues'
    ]
  },
  {
    id: 'freedom-lms',
    category: 'FREEDOM WITH AI',
    title: 'LMS Content Optimization',
    subtitle: 'Curriculum Audit & Quality Assurance',
    client: 'Freedom With AI',
    role: 'Intern',
    impact_summary: '100% Curriculum Audit',
    tags: ['LMS', 'Google Docs', 'QA'],
    context: 'LMS content had missing resources, broken links, duplicate content, and misaligned tasks across Diamond Circle sessions.',
    problem: 'Member confusion and reduced course effectiveness due to lack of systematic audit. Important blueprints and templates were missing.',
    solution: 'Conducted comprehensive content audit, identified gaps, recommended video enhancements, and coordinated with LMS manager to restore missing resources.',
    architecture: [
      'Comprehensive Content Audit Protocol',
      'Missing Resource Restoration',
      'Video Enhancement Recommendations',
      'Task Synchronization Check'
    ],
    tech_stack: ['Tag Mango (LMS)', 'Google Docs', 'Google Sheets'],
    results: [
      'Comprehensive audit of entire Diamond Circle curriculum',
      'Restored missing JSON files, templates, and slides',
      'Improved navigation via better resource organization',
      'Reduced member confusion through clearer structure'
    ]
  },
  {
    id: 'freedom-research',
    category: 'FREEDOM WITH AI',
    title: 'AI Tools Research',
    subtitle: 'Video/Audio Generation Tool Evaluation',
    client: 'Freedom With AI',
    role: 'Intern',
    impact_summary: '3 Categories Tested',
    tags: ['Kling AI', 'Suno', 'Pika'],
    context: 'Content team needed evaluation of emerging AI tools for video generation, music creation, and deepfakes but lacked bandwidth.',
    problem: 'No comprehensive testing across platforms to identify limitations, compatibility issues, or technical feasibility for content ideas.',
    solution: 'Researched and tested tools across 3 categories (Video, Music, Deepfake), documenting capabilities, limitations, and platform compatibility.',
    architecture: [
      'Multi-platform Testing Protocol (Web/Mobile)',
      'Capability & Limitation Documentation',
      'Technical Feasibility Assessment',
      'Workaround Identification'
    ],
    tech_stack: ['Kling AI', 'Pika.art', 'Suno.com', 'CapCut', 'Hypic', 'Asana'],
    results: [
      'Evaluated Video, Music, and Deepfake tool ecosystems',
      'Documented platform compatibility (Windows vs Mobile)',
      'Provided technical feasibility assessments',
      'Established recommendation framework for future tools'
    ]
  },
  {
    id: 'freedom-kt',
    category: 'FREEDOM WITH AI',
    title: 'Knowledge Transfer System',
    subtitle: 'Intern Transition & Process Documentation',
    client: 'Freedom With AI',
    role: 'Intern',
    impact_summary: 'Zero Knowledge Loss',
    tags: ['Documentation', 'Training', 'Video'],
    context: 'Incoming intern needed to take over 160+ member tracking and support operations with no existing training materials.',
    problem: 'Risk of service disruption and massive knowledge loss during transition. No written guides existed for complex processes.',
    solution: 'Created comprehensive bilingual handover documentation (English/Tamil), conducted detailed KT sessions, and built a call recording archive.',
    architecture: [
      'Bilingual Documentation (English/Tamil)',
      'Process Workflow Mapping',
      'Escalation Protocol Guides',
      'Call Recording Archive'
    ],
    tech_stack: ['Google Meet', 'Google Sheets', 'Video Recording', 'Google Docs'],
    results: [
      'Zero knowledge loss during transition period',
      'Seamless handover to successor',
      'Created comprehensive bilingual training assets',
      'Preserved institutional knowledge systematically'
    ]
  },
  {
    id: 'freedom-events',
    category: 'FREEDOM WITH AI',
    title: 'Live Event Support',
    subtitle: 'Bootcamp & Hackathon Coordination',
    client: 'Freedom With AI',
    role: 'Intern',
    impact_summary: 'Real-time Incident Mgmt',
    tags: ['Live Support', 'Event Mgmt'],
    context: 'Live bootcamps, hackathons, and community events needed real-time technical support and coordination during critical moments.',
    problem: 'Limited bandwidth led to potential member issues during live sessions. Needed real-time query resolution and submission management.',
    solution: 'Provided real-time support during bootcamps/hackathons, managed submissions, resolved tool issues (Bolt.new tokens), and coordinated announcements.',
    architecture: [
      'Real-time Query Resolution Protocol',
      'Submission Management System',
      'Announcement Coordination',
      'Task Clarification Protocol'
    ],
    tech_stack: ['Zoom/Meet', 'WhatsApp', 'Bolt.new', 'NotebookLM', 'Community Platforms'],
    results: [
      'Zero major technical disruptions during live events',
      'Managed Hackathon Season 3 submissions successfully',
      'Facilitated member networking and job connections',
      'Coordinated global marketing testimonial session'
    ]
  },

  // --- PERSONAL / OTHER ---
  {
    id: 'personal-bcg',
    category: 'PERSONAL',
    title: 'BCG Services Automation',
    subtitle: 'End-to-end Voice AI & CRM automation',
    client: 'BCG Services',
    role: 'AI Engineer',
    impact_summary: '90% Manual Work Reduction',
    tags: ['Retell AI', 'Chatling', 'Make.com'],
    context: 'Dr. Charanjit S Kalra, a former ENT surgeon turned insurance advisor, needed to modernize his digital presence and automate lead handling for insurance and immigration services.',
    problem: 'Manual workload in handling contact forms, no 24/7 support, and need to convert visitors into qualified discovery calls without hiring more staff.',
    solution: 'Built an end-to-end AI automation system with Retell AI voice agent, Chatling chatbot, Make.com workflows, and Cal.com integration for seamless lead capture and booking.',
    architecture: [
      'Retell AI Voice Agent for inbound calls',
      'Chatling AI Chatbot with knowledge base',
      'Make.com workflow automation',
      'Cal.com Discovery Call Booking'
    ],
    tech_stack: ['Retell AI', 'Chatling', 'Make.com', 'OpenAI', 'Cal.com', 'Hostinger', 'Gamma.app'],
    results: [
      'Reduced lead response time to < 5 mins',
      '24/7 availability via Voice Agent & Chatbot',
      'Automated discovery call qualification & booking',
      'Eliminated need for additional admin staff'
    ]
  },
  {
    id: 'personal-user-discovery',
    category: 'PERSONAL',
    title: 'User Discovery Automation',
    subtitle: 'End-to-end feedback analysis & Jira integration',
    client: 'Finance Tech Firm',
    role: 'Automation Architect',
    impact_summary: '90% Process Time Saved',
    tags: ['Make.com', 'Fireflies AI', 'Jira'],
    context: 'Product team manually scheduling discovery calls, recording meetings, transcribing feedback, and creating Jira tickets.',
    problem: 'Process took 3-4 hours per call with inconsistent feedback classification and missed insights.',
    solution: 'Automated workflow using Fireflies AI for transcription, GPT-4o for categorization (Issues, Features, Pain Points), and Zapier/Make for Jira ticket creation.',
    architecture: [
      'Calendly & Fireflies AI integration',
      'GPT-4o Feedback Categorization',
      'Airtable Database Structure',
      'Jira Ticket Creation Workflow'
    ],
    tech_stack: ['Make.com', 'Zapier', 'Airtable', 'Calendly', 'Fireflies AI', 'GPT-4o', 'Slack', 'Jira'],
    results: [
      'Reduced processing time from 4 hours to ~20 mins',
      '100% automated transcription & categorization',
      '24-hour reporting cycle via Slack',
      'Zero missed discovery calls'
    ]
  },
  {
    id: 'personal-linkedin-engine',
    category: 'PERSONAL',
    title: 'LinkedIn Content Engine',
    subtitle: 'AI-powered discovery & draft generation',
    client: 'Finance Tech Firm',
    role: 'Automation Developer',
    impact_summary: '10+ Hrs/Week Saved',
    tags: ['Make.com', 'Airtable', 'Apify'],
    context: 'Marketing team manually creating LinkedIn content by searching sources, analyzing relevance, and writing posts.',
    problem: 'Consumed 10+ hours per week with inconsistent quality and missed trending topics.',
    solution: 'AI-powered system scraping LinkedIn/YouTube, filtering for relevance (70+ score), generating 3 draft variants, and managing publishing via Airtable Kanban.',
    architecture: [
      'Automated scraping (LinkedIn/YouTube)',
      'AI Relevancy Scoring (70+ threshold)',
      'Multi-variant Draft Generation',
      'Kanban Publishing Workflow'
    ],
    tech_stack: ['Make.com', 'Airtable', 'GPT-4', 'Slack', 'Apify', 'YouTube API'],
    results: [
      'Daily automated scraping with no manual intervention',
      '3 draft variants per high-scoring topic',
      'Persona-specific styling for brand voice',
      'Automated Slack notifications for approvals'
    ]
  }
];