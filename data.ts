import { Project, Experience, ToolCategory } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'present',
    period: 'Present',
    company: 'Ashwanth S',
    role: 'AI Systems Architect',
    type: 'work',
    description: 'The Scale Phase. Architecting autonomous AI systems for enterprises and Fortune 500s. Building agent infrastructure for capital-intensive B2B firms and expanding capabilities in multi-agent orchestration.'
  },
  {
    id: 'zoro',
    period: 'Apr 2025 - Apr 2026',
    company: 'Zoro Corp',
    role: 'AI Systems Architect',
    type: 'work',
    description: 'Led the design and deployment of enterprise-grade AI systems for high-ticket B2B clients including BCG. Built end-to-end intelligence infrastructure spanning lead sourcing, executive profiling, outbound generation, and creative pipelines.'
  },
  {
    id: 'instig8',
    period: 'Apr 2024 - Sep 2024',
    company: 'Instig8.AI',
    role: 'AI Automation Developer',
    type: 'work',
    description: 'The Build Phase. Six months engineering complex B2B automation systems. Developed N8N workflow patterns and multi-AI orchestration for high-ticket clients.'
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
    tools: ["Claude Sonnet 4.6", "Gemini 3 Pro", "GPT 5.2", "Perplexity Pro", "o3-mini"]
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
  // 1. Enterprise AI SDR Intelligence Infrastructure
  {
    id: 'zoro-bcg',
    category: 'CASE STUDIES',
    title: 'Enterprise AI SDR Intelligence Infrastructure',
    subtitle: 'Full-stack business development intelligence system for a top-3 global consulting firm.',
    client: 'Top-3 Global Management Consulting Firm (Fortune 500)',
    role: 'System Architect',
    impact_summary: '3,000+ enterprise leads per month. $480K SDR team replaced. Deployed live on $2M+ consulting pitches.',
    tags: ['N8N', 'Explorium', 'GPT 4.2', 'Apify'],
    context: 'A top-3 global management consulting firm needed to scale its business development efforts targeting large manufacturing and distribution companies without increasing headcount.',
    problem: 'No scalable system to identify, research, and engage $500M to $2.5B manufacturing and distribution companies at executive level. Manual research took 20 to 30 minutes per prospect. Generic outbound tools produced template emails executives ignored. Hiring more SDRs was not viable at enterprise scale.',
    solution: "Built a full-stack business development intelligence system for one of the world's top consulting firms. The system sources 10,000+ contacts per month, researches every company for financial signals, hiring momentum, and operational triggers, profiles every executive for recent priorities and decision-making authority, maps pain points to the firm's specific service offerings, and generates personalized outreach across email and LinkedIn. Managing Directors began demonstrating the system directly on consulting pitches. Prospects stopped seeing theoretical AI strategy and started seeing live AI infrastructure in action. The internal tool became a consulting revenue add-on.",
    architecture: [
      'Lead sourcing layer pulling 10,000+ contacts monthly from enterprise databases',
      'Company intelligence layer analyzing financials, hiring trends, and operational signals',
      'Executive profiling layer identifying priorities, recent activity, and budget authority',
      'Pain point mapping engine trained on the firm\'s methodology and sector positioning',
      'Personalized outreach generation across email and LinkedIn at scale',
      'Campaign execution and reply management with CRM sync and real-time reporting'
    ],
    tech_stack: ['N8N', 'Airtable', 'GPT 4.2', 'Claude Sonnet 4.6', 'Perplexity Pro', 'Explorium', 'FireCrawl', 'Apify'],
    results: [
      '3,000+ qualified leads generated per month targeting $500M to $2.5B companies',
      'Replaced 6 full-time SDRs at 99% cost reduction',
      'Every prospect researched across 10+ business intelligence signals before first contact',
      'Managing Directors now open $2M to $5M pitches by demonstrating this system live',
      'Enterprise clients began requesting the system for their own sales teams',
      'Real-time targeting pivot across industries with no ramp-up time'
    ]
  },
  // 2. Ad Creator
  {
    id: 'zoro-ad-intel',
    category: 'CASE STUDIES',
    title: 'Competitor Ad Analysis to Creative Pipeline',
    subtitle: 'Automated Competitive Analysis → Systematic Winner Generation',
    client: '$2M/MRR D2C Brand',
    role: 'System Architect',
    impact_summary: '$150K to $600K monthly ad spend. 4x growth without a creative team.',
    tags: ['Gemini 3 Pro', 'Claude 4.6', 'Airtable', 'fal.ai', 'kie.ai', 'Foreplay'],
    context: 'A $2M/month D2C brand across health, auto, and digital products was spending $150K/month on ads but struggled to scale due to creative fatigue and saturation.',
    problem: 'The creative team was a bottleneck, producing only 20-40 concepts/month while competitors tested 200+. Manual research and random AI generation led to budget waste on unproven concepts.',
    solution: 'Deployed an intelligence infrastructure: Automating competitor monitoring, analyzing winning patterns via Gemini Vision/Claude 4.6, and systematically generating 400+ variations using Veo.',
    architecture: [
      'Competitor Radar (Foreplay + Facebook Graph API)',
      'Creative Scanner (Frame-by-frame Vision Analysis)',
      'Mechanistic Prompt Engine (Brand voice trained)',
      'Video Variant Generator (Veo 3.1)',
      'Performance Feedback Loop (Airtable Intelligence)'
    ],
    tech_stack: ['Airtable', 'fal.ai', 'kie.ai', 'Gemini 3 Pro', 'Claude 4.6', 'Veo 3.1', 'Facebook Graph API', 'Foreplay'],
    results: [
      'Scaled ad spend from $150K to $600K/month',
      'Increased testing from 20 to 400+ variations/month',
      'Reduced creative cost from $12k/mo to $600/mo',
      'Found 20-25 winning concepts/month (vs 2-3 previously)'
    ]
  },
  // 3. Enterprise Content Intelligence Infrastructure
  {
    id: 'enterprise-content-intel',
    category: 'CASE STUDIES',
    title: 'Enterprise Content Intelligence Infrastructure',
    subtitle: '50+ senior partners running automated thought leadership systems used directly in multi million dollar consulting pitches.',
    client: 'Global Consulting Firm, TMT Practice',
    role: 'System Architect',
    impact_summary: '50+ senior partners. Automated thought leadership deployed inside multi-million dollar consulting pitches.',
    tags: ['n8n', 'Claude Sonnet', 'Airtable', 'LinkedIn'],
    context: 'Built an enterprise content intelligence system designed to convert real time industry signals into structured thought leadership for senior partners.',
    problem: 'No systematic way for senior consulting partners to translate deep expertise into consistent, high quality thought leadership. Despite advising enterprise clients on AI and transformation, their public presence did not reflect their authority.',
    solution: 'Built an enterprise content intelligence system designed to convert real time industry signals into structured thought leadership for senior partners. The system combines: 1) Large scale intelligence monitoring across industry, competitors, and enterprise signals 2) Relevance scoring aligned to practice focus areas and individual expertise 3) Context engineered content generation trained on consulting tone and positioning 4) Multi angle output enabling strategic narrative selection per signal. This transformed thought leadership from manual effort into a repeatable infrastructure.',
    architecture: [
      'Intelligence monitoring layer across 500+ sources including competitors, industry signals, and enterprise activity',
      'Signal filtering engine rejecting approximately 95% of low value inputs',
      'Relevance scoring system aligned to practice areas and individual profiles',
      'Content generation engine trained on firm level voice and partner level communication style',
      'Multi angle output layer generating strategic positioning options per signal',
      'Review and approval layer for partner level control'
    ],
    tech_stack: ['n8n', 'Claude Sonnet', 'Airtable', 'LinkedIn', 'external intelligence sources'],
    results: [
      '50+ senior partners actively using the system',
      'Posting frequency increased from 1 to 2 posts per month to 4 to 6 strategic posts per month',
      '95% signal filtering from 500+ monitored sources',
      'Less than 10 minutes required per partner for review and approval',
      'Zero manual content creation required',
      'System integrated into 2M to 5M consulting pitch workflows',
      'Content used as direct sales asset in enterprise engagements',
      'Thought leadership became a core component of enterprise sales conversations',
      'Prospects engaged with partner insights before initial meetings',
      'Competitive positioning improved through real time narrative response',
      'System used as a live demonstration during consulting pitches',
      'Internal tool evolved into a client facing asset within engagements'
    ]
  },
  // 4. Recipe Automation
  {
    id: 'instig8-recipe',
    category: 'INSTIG8',
    title: 'Automated Viral Recipe Discovery and Production Pipeline',
    subtitle: 'Multi-lingual content scraping & sentiment analysis',
    client: 'German Recipe Media Company (500K+ Newsletter Subscribers)',
    role: 'Developer',
    impact_summary: 'ROI:\n40 to 1,000+ recipes/month. App churn cut from 28% to 12%.',
    tags: ['Make', 'OpenAI 5.4'],
    context: 'A German media company with 500K newsletter subscribers needed to discover and structure air fryer recipe content from social media.',
    problem: 'Manual content curation took 10+ hours per week with inconsistent quality and no sentiment analysis. No automated way to scrape, analyze sentiment, or generate dual-language docs.',
    solution: 'Built N8N workflow for TikTok/Instagram scraping using Apify, implemented SRT transcription, AI sentiment analysis, and automated Google Doc export in English and German.',
    architecture: [
      'TikTok/Instagram scraping via Apify',
      'SRT transcription processing',
      'AI sentiment analysis system',
      'Dual-language Google Doc export'
    ],
    tech_stack: ['make.com', 'OpenAI 5.4'],
    results: [
      'Reduced curation time from 10+ hours to 2 hours/week',
      'Automated dual-language output (English/German)',
      'Structured recipe database with engagement metrics',
      'Duplicate detection preventing wasted processing'
    ]
  },
  // 5. B2B Lead Intelligence & Outbound Pipeline
  {
    id: 'b2b-lead-intel',
    category: 'CASE STUDIES',
    title: 'B2B Lead Intelligence & Outbound Pipeline',
    subtitle: 'End-to-end outbound pipeline generating 50 to 500 enriched, outreach-ready leads per run from structured ICP inputs.',
    client: 'Industrial Software Platform (QHSE, EHS, CMMS, ESG)',
    role: 'System Architect',
    impact_summary: ' 50 to 500 enriched leads per run. Personalized outreach copy generated for every one. Zero manual prospecting.',
    tags: ['Next.js', 'FastAPI', 'n8n', 'Claude', 'Airtable', 'SmartLead', 'Lovable.app'],
    context: 'Built a full-stack lead intelligence and outbound system designed for industrial B2B targeting.',
    problem: 'No scalable system to identify, enrich, and engage high quality industrial decision makers across multiple geographies and industries. Manual prospecting limited coverage, reduced data accuracy, and made personalized outreach at scale infeasible.',
    solution: 'Built a full-stack lead intelligence and outbound system designed for industrial B2B targeting. The system combines: 1) Structured ICP intake with multi-parameter targeting across roles, industries, geographies, company size, and revenue 2) AI driven query expansion to normalize job titles and location variations for maximum dataset coverage 3) Automated lead generation and enrichment pipeline 4) AI personalized outreach copy generation for email and LinkedIn 5) Campaign routing and tracking across outreach channels. This created a repeatable outbound infrastructure instead of manual campaign execution.',
    architecture: [
      'ICP intake layer capturing targeting parameters and campaign configuration',
      'AI query expansion layer for job title and geography normalization',
      'Lead generation and enrichment pipeline',
      'Outreach copy generation engine for personalized messaging',
      'Campaign orchestration layer integrating with outreach tools',
      'Tracking layer for leads, campaigns, and replies'
    ],
    tech_stack: ['Next.js', 'FastAPI', 'n8n', 'Claude', 'Airtable', 'SmartLead', 'Lovable.app'],
    results: [
      '50 to 500 leads generated per campaign run',
      'Fully automated pipeline from ICP input to outreach launch',
      'AI query expansion improving lead match coverage across datasets',
      'Personalized email and LinkedIn outreach generated per lead',
      'Multi-input system: ICP search, lead upload, company upload, reactivation',
      'Reactivation campaigns targeting cold leads based on last contact window',
      'Centralized campaign tracking across leads, campaigns, and replies',
      '17 workflow iterations reflecting continuous system optimization'
    ]
  },
  // 6. EMS Manufacturing LinkedIn Content System
  {
    id: 'calcuquote-linkedin',
    category: 'CASE STUDIES',
    title: 'EMS Manufacturing LinkedIn Content System',
    subtitle: 'End-to-end LinkedIn content engine for manufacturing and supply chain brands.',
    client: 'EMS Manufacturing Company',
    role: 'System Architect',
    impact_summary: 'End-to-end LinkedIn content engine for manufacturing and supply chain brands.',
    tags: ['Next.js', 'FastAPI', 'Airtable', 'Claude Sonnet 4.6', 'fal.ai', 'Perplexity', 'CalcuQuote'],
    context: 'Built a full-stack LinkedIn Content Management System tailored for an EMS manufacturing software platform, designed to transform technical product data, RFQ workflows, and supply chain insights into structured, high-quality LinkedIn content.',
    problem: 'No scalable system to convert highly technical manufacturing, quoting, and supply chain data into consistent, high-quality LinkedIn content. Content creation required manual effort, lacked consistency across profiles, and failed to translate complex EMS concepts into clear, engaging narratives.',
    solution: 'Built a full-stack LinkedIn Content Management System tailored for a manufacturing software company, designed to transform technical product data, RFQ workflows, and supply chain insights into structured, high-quality LinkedIn content. The system combines: 1) Knowledge ingestion from product docs, BOM workflows, transcripts, and industry sources 2) AI-driven content generation grounded in internal data + live manufacturing and supply chain research 3) Multi-layer quality control with automated scoring and rewriting 4) Scheduling and publishing workflow with full visibility across profiles. This enabled consistent, scalable content production without manual writing.',
    architecture: [
      'Knowledge ingestion layer (product docs, BOM data context, transcripts, URLs)',
      'AI content generation engine (context-aware + industry research augmented)',
      'Quality control layer (AI scoring + auto-rewrite if below threshold)',
      'Image generation system (style-controlled visuals aligned to brand)',
      'Multi-profile management (independent voice + technical positioning per profile)',
      'Scheduling engine (calendar-based planning + execution tracking)'
    ],
    tech_stack: ['Next.js', 'FastAPI', 'Airtable', 'Claude Sonnet 4.6', 'fal.ai', 'Perplexity', 'Vercel', 'Render', 'CalcuQuote'],
    results: [
      'Fully automated content pipeline from technical source material to scheduled posts',
      'Multi-profile content generation (Personal + Company profiles)',
      '8 structured content pillars per profile for strategic coverage',
      'Built-in AI quality control layer (auto scoring + rewriting)',
      'Live industry research integration per generation cycle',
      'Auto-image generation aligned to brand and technical context',
      'End-to-end workflow: Ingest → Generate → Review → Schedule → Publish',
      'Configurable post output per profile per cycle'
    ]
  },
  // 7. Viral Content Intelligence and Playbook System
  {
    id: 'instig8-boom',
    category: 'INSTIG8',
    title: 'Viral Content Intelligence and Playbook System',
    subtitle: 'Automated social intelligence system that scrapes top-performing content across 6 platforms, analyzes sentiment and audience patterns, and generates production-ready viral playbooks.',
    client: 'Boom & Wisdom',
    role: 'Developer',
    impact_summary: '6 platforms monitored. Raw social data converted to production-ready viral playbooks. Zero manual research.',
    tags: ['n8n', 'OpenAI GPT', 'Google Drive API', 'Google Docs API', 'Apify Custom Actors', 'Airtable'],
    context: 'Two products (Boom & Wisdom) needed to analyze viral content across 6 social platforms to understand engagement drivers in their niches.',
    problem: 'Manual content research was platform-specific, ad-hoc, and produced no reusable methodology. No system existed to systematically monitor hashtags, track custom accounts, and turn raw engagement signals into actionable creative strategy.',
    solution: 'Built a 7-workflow n8n system with platform-specific Apify actors for TikTok, Instagram, YouTube, Twitter, LinkedIn, and Facebook. Each workflow handles data acquisition, trend extraction, and sentiment analysis. A final orchestration workflow synthesizes all signals into structured viral playbooks exported directly to Google Docs via Drive API.',
    architecture: [
      'Platform-level scraping via custom Apify actors for all 6 platforms',
      'Hashtag and custom account monitoring layer',
      'Sentiment and audience pattern analysis per platform',
      'Cross-platform signal aggregation workflow',
      'AI playbook generation via OpenAI',
      'Automated Google Docs export via Drive API',
      'Webhook-triggered on-demand execution'
    ],
    tech_stack: ['n8n', 'OpenAI GPT', 'Google Drive API', 'Google Docs API', 'Apify Custom Actors', 'Airtable'],
    results: [
      'Unified analysis across 6 social platforms',
      'Generated actionable viral playbooks for 2 products',
      'Modular architecture enabling easy replication',
      'Webhook-triggered execution for on-demand analysis'
    ]
  },
  // 8. Construction Market Signal Intelligence and Outbound System
  {
    id: 'zoro-onindus',
    category: 'CASE STUDIES',
    title: 'Construction Market Signal Intelligence and Outbound System',
    subtitle: 'Automated signal monitoring & multi-channel outreach system.',
    client: 'Capital Projects Advisory Consulting Firm (Healthcare, Higher Education, Municipal)',
    role: 'Lead Developer',
    impact_summary: '500 signal-triggered leads per week. Outreach scaled 25x. Call prep cut 85%.',
    tags: ['N8N', 'HubSpot', 'Clay'],
    context: 'The construction consulting firm was manually tracking construction projects and job changes across healthcare, education, and municipal sectors.',
    problem: 'Business development was running blind. The team sent 100 emails per day with no intelligence behind the timing or targeting. When a hospital announced a $100M expansion or a new VP of Facilities joined a target organization, the team had no way to know. Manual research took 2+ hours per company. Phone calls went out without context. The result was high volume, low relevance outreach that produced no meaningful pipeline.',
    solution: 'Built a signal-driven business development system for a capital projects advisory firm selling to hospitals, universities, and government agencies. The system monitors construction news, bond approvals, facility announcements, and leadership changes across target organizations in real time. When a relevant signal fires, the system automatically finds the right decision maker, verifies their contact details, and generates a personalized email sequence, LinkedIn message, and phone script grounded in that specific signal. Sales reps no longer research leads manually. They open their dashboard and find ready-to-contact prospects with pre-written outreach tied to a real business trigger happening right now.',
    architecture: [
      'Real-time monitoring of construction project announcements, bond approvals, and leadership changes across target industries',
      'Automatic identification and contact verification of decision makers triggered by each signal',
      'AI-generated personalized email sequences, LinkedIn messages, and phone scripts per lead',
      'Coordinated outreach across email and LinkedIn with no overlap or over-messaging',
      'Full CRM sync with live pipeline tracking and weekly performance reporting'
    ],
    tech_stack: ['N8N', 'Airtable', 'Claude Sonnet 4.6', 'GPT 4.2', 'HubSpot', 'Perplexity API'],
    results: [
      '500 signal-qualified leads generated per week',
      'Outreach scaled from 100 contacts per day to 2,500+ per week',
      'Every lead matched to a live construction trigger before first contact',
      'Sales team receives pre-researched talking points per lead, cutting call prep from 2 hours to 15 minutes',
      '$50M+ construction projects, bond approvals, and leadership changes tracked automatically',
      'All activity synced to CRM with real-time pipeline visibility'
    ]
  },
  // 9. Content Strategy Agent
  {
    id: 'instig8-xpertlink',
    category: 'INSTIG8',
    title: 'Content Strategy Agent',
    subtitle: 'Modular Workflow Infrastructure',
    client: 'XpertLink',
    role: 'Developer',
    impact_summary: 'Zero API spend on unapproved articles. Enrichment is approval-gated; duplicates skip billing.',
    tags: ['Make.com', 'Airtable', 'Inoreader', 'DataForSEO', 'OpenAI'],
    context: 'Paul was running a manual editorial queue on top of Inoreader. Duplicates were bleeding through, DataForSEO credits were burning on articles that would never get published, and basic AI prompts were returning keyword slop instead of real terms from the article body.',
    problem: 'Paul was running a manual editorial queue on top of Inoreader. Duplicates were bleeding through, DataForSEO credits were burning on articles that would never get published, and basic AI prompts were returning keyword slop instead of real terms from the article body. The backlog had passed 300 articles with no structured way to triage by search value or content type.',
    solution: 'A four-stage Make.com pipeline layered on an Airtable single source of truth. Inoreader feeds a deduplicated Pending queue. Operator approval is the only trigger that releases a row into paid enrichment. Keywords are extracted from full article text and checked against a Keyword Master before any DataForSEO call is made. Outline generation pulls only AI Score 5 and above sources for a chosen target keyword and returns a structured H1 to H3 outline in under ten minutes.',
    architecture: [
      'Ingest and Fetch (every 12h). Inoreader to Airtable with URL dedup, full-body fetch, and AI classification for Target Audience, Content Type, and AI Score.',
      'Approval Gate. Operator flips Status to Approved. SEO Ready flag verifies full content exists before any paid call is allowed to fire.',
      'Keyword Enrichment. AI extracts 3 primary and 5 secondary keywords from the article body. New keywords only hit DataForSEO, then write back to Keyword Master and Article Keywords.',
      'Outline Generation. Operator picks a target keyword. Collect Articles pulls linked sources scoring 5 or higher. GPT assembles the H1 to H3 outline and writes it back to Outline Generator as Draft.'
    ],
    tech_stack: ['Make.com', 'Airtable', 'Inoreader', 'DataForSEO', 'OpenAI'],
    results: [
      'Four-table Airtable state machine governs article lifecycle from Pending to publishable outline.',
      'Approval gate blocks DataForSEO calls on rejected articles, collapsing credit burn to near zero.',
      'Keyword Master dedup layer reuses prior enrichment across campaigns, so cost compounds downward.',
      'AI Score (1 to 10) filters weak sources before outline generation, so only rank-worthy inputs reach GPT.'
    ]
  },
  // 10. Aliyah Lead Scraping
  {
    id: 'zoro-aliyah',
    category: 'CASE STUDIES',
    title: 'Aliyah Lead Scraping',
    subtitle: 'Semantic filtering & immigration lead identification.',
    client: 'Aliyah Immigration',
    role: 'Developer',
    impact_summary: 'False Positives < 10%',
    tags: ['GPT 4.2', 'LinkedIn API', 'Python'],
    context: 'Clients needed to identify US-based individuals considering Jewish immigration (Aliyah) to Israel.',
    problem: 'The keyword "Aliyah" is a common name, resulting in 80%+ false positives. Manual filtering took days per week with high error rates.',
    solution: 'Designed a GPT 4.2 content classification system with 1-10 relevance scoring to semantically distinguish between immigration posts and name mentions, coupled with a 6-step email enrichment waterfall.',
    architecture: [
      'GPT 4.2 Content Classification (Semantic Analysis)',
      'LinkedIn Scraping for keyword variations',
      '6-step waterfall email enrichment',
      'US-wide geographic filtering'
    ],
    tech_stack: ['LinkedIn Scraping API', 'GPT 4.2', 'Apollo.io', 'Hunter.io', 'Airtable', 'Anymail API'],
    results: [
      'Reduced false positives from 80%+ to under 10%',
      '12 months of historical data processed',
      'Weekly automated monitoring setup',
      'Reduced qualification time from days to hours'
    ]
  },
  // 11. Teknova Lead Journey
  {
    id: 'instig8-teknova',
    category: 'INSTIG8',
    title: 'Teknova Lead Journey',
    subtitle: 'Biotech qualification & product matching',
    client: 'Teknova',
    role: 'Developer',
    impact_summary: '900+ Companies Qualified',
    tags: ['Clay', 'GPT 4.2', 'N8N', 'Apollo'],
    context: 'Teknova (biotech reagent manufacturer) needed to qualify 900+ companies and recommend exactly 3 relevant products per prospect.',
    problem: 'Manual research took 30+ minutes per company. Needed to synthesize complex data (modality, stage, manufacturing) into high-confidence recommendations.',
    solution: 'Built 6-stage AI classification suite (Modality, Stage, Product Match) and conditional waterfall email recovery system.',
    architecture: [
      '6-Stage AI Classification Suite',
      'Conditional waterfall email recovery',
      'Campaign segmentation by modality',
      'Unified Airtable data hub'
    ],
    tech_stack: ['Clay', 'Apollo.io', 'N8N', 'Airtable', 'GPT 4.2', 'Enrichley', 'LeadMagic'],
    results: [
      'Automated qualification of 900+ companies',
      'Reduced research time by 95% (30m to automation)',
      'Science-first product recommendations (3 per prospect)',
      'Revenue-preservation email stack'
    ]
  },
  // 12. Ambrosia Email Automation
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
  // 13. Automated Lead Intake and Conversion System
  {
    id: 'personal-bcg',
    category: 'PERSONAL',
    title: 'Automated Lead Intake and Conversion System',
    subtitle: 'End-to-end Voice AI & CRM automation',
    client: 'Immigration and Financial Services Consultancy (BCG Immigration Consultancy / Insurelife Financial Group)',
    role: 'AI Engineer',
    impact_summary: 'Every new lead called by AI within minutes. Discovery calls booked with zero admin.',
    tags: ['Retell AI', 'Chatling', 'Make.com', 'GoHighLevel CRM'],
    context: 'Dr. Charanjit S Kalra, a former ENT surgeon turned insurance advisor, needed to modernize his digital presence and automate lead handling for insurance and immigration services.',
    problem: 'New leads submitted forms and waited hours for a callback. No system existed to respond immediately, qualify the prospect, or book a discovery call without a staff member manually following up. Outside business hours, leads went cold. Consultants spent time on unqualified calls and had no visibility into where prospects were in the pipeline.',
    solution: "Built an automated lead conversion system where every form submission in GoHighLevel instantly triggers an outbound AI voice call to the prospect. The voice agent qualifies the lead, answers initial questions about immigration or financial services, and books a discovery call directly into the consultant's calendar via Cal.com. A separate AI chatbot on the website handles inbound FAQs and service queries around the clock. Make.com connects the entire flow and syncs all activity back into GoHighLevel CRM in real time. The result is a fully staffed intake operation running 24/7 with no human involvement.",
    architecture: [
      'GoHighLevel form submission triggers automated outbound AI voice call to new lead',
      'AI voice agent qualifies the prospect and converts to discovery call booking via Cal.com',
      'AI chatbot on website handling inbound FAQs and service queries 24/7',
      'Make.com workflow connecting form, voice agent, chatbot, and CRM in real time',
      'GoHighLevel CRM receiving all lead data, call outcomes, and bookings automatically'
    ],
    tech_stack: ['Retell AI', 'Chatling', 'Make.com', 'OpenAI', 'Cal.com', 'Hostinger', 'Gamma.app', 'GoHighLevel CRM'],
    results: [
      'Outbound AI voice agent calls every new lead automatically upon form submission',
      'Lead response time reduced to under 5 minutes from any hour of the day',
      'AI chatbot handles FAQs and service queries 24/7 from website visitors',
      'Discovery calls qualified and booked directly into consultant calendars without human intervention',
      'All form submissions, calls, and bookings synced automatically into CRM pipeline',
      'Eliminated need for admin or receptionist staff to follow up on new inquiries'
    ]
  },
  // 14. User Discovery Automation
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
    solution: 'Automated workflow using Fireflies AI for transcription, GPT 5.2 for categorization (Issues, Features, Pain Points), and Zapier/Make for Jira ticket creation.',
    architecture: [
      'Calendly & Fireflies AI integration',
      'GPT 5.2 Feedback Categorization',
      'Airtable Database Structure',
      'Jira Ticket Creation Workflow'
    ],
    tech_stack: ['Make.com', 'Zapier', 'Airtable', 'Calendly', 'Fireflies AI', 'GPT 5.2', 'Slack', 'Jira'],
    results: [
      'Reduced processing time from 4 hours to ~20 mins',
      '100% automated transcription & categorization',
      '24-hour reporting cycle via Slack',
      'Zero missed discovery calls'
    ]
  },
  // 15. LinkedIn Content Engine
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
    tech_stack: ['Make.com', 'Airtable', 'GPT 5.2', 'Slack', 'Apify API', 'YouTube API', 'FOA'],
    results: [
      'Daily automated scraping with no manual intervention',
      '3 draft variants per high-scoring topic',
      'Persona-specific styling for brand voice',
      'Automated Slack notifications for approvals'
    ]
  },
  // 16. Patent Data Integration
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
  // 17. Foresight LinkedIn Content Engine
  {
    id: 'instig8-foresight',
    category: 'INSTIG8',
    title: 'LinkedIn Content Engine',
    subtitle: 'Automated discovery & draft generation',
    client: 'Foresight',
    role: 'Developer',
    impact_summary: '85% Time Reduction',
    tags: ['Make', 'GPT 5.2', 'Slack', 'Airtable'],
    context: 'Clients needed consistent LinkedIn content but lacked automated ways to monitor sources and generate drafts.',
    problem: 'Manual process took 4-5 hours per post. No automated discovery, relevancy filtering, or multi-variant draft generation.',
    solution: 'Built automated monitoring via Make.com, AI relevancy classification (70+ score), three-variant draft generation, and Kanban publishing workflow.',
    architecture: [
      'Automated profile & keyword monitoring',
      'AI relevancy classification & scoring',
      'Persona-specific draft generation (3 variants)',
      'Kanban publishing workflow with Slack'
    ],
    tech_stack: ['Make.com', 'Airtable', 'GPT 5.2', 'Slack', 'YouTube API', 'Apify API', 'FOA'],
    results: [
      'Reduced content creation from 4-5 hours to 45 mins',
      'Three-variant AI draft generation per topic',
      'Automated Slack notifications for workflow status',
      'Persona-driven styling matching brand voice'
    ]
  },
  // 18. Warm Intro Outreach
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
  }
];
