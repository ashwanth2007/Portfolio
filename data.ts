import { Project, Experience, ToolCategory, Testimonial } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Aryan Mahajan',
    image: 'https://raw.githubusercontent.com/ashwanth2007/Resources/main/aryan.jpg',
    testimonial: 'https://lh3.googleusercontent.com/d/1dHDTcgQM9rF3O717_gd8PgtcoXRReBa1',
    link: 'https://www.linkedin.com/in/aryanmahajaninstig8/',
    headline: 'AI Systems Architect for Fortune 500',
    stats: ['Fortune 500 Growth Consultant'],
  },
  {
    name: 'Avinash Mada',
    image: 'https://raw.githubusercontent.com/ashwanth2007/Resources/main/avinash_mada.jpg',
    testimonial: 'https://lh3.googleusercontent.com/d/1xFOlidtCqE6AlnacRmWnw98gnoI0exlO',
    link: 'https://www.instagram.com/meetavinash',
    headline: 'AI Visionary & Entrepreneur',
    stats: ['Top coach in India'],
  },
  {
    name: 'Mani Kanasani',
    image: 'https://raw.githubusercontent.com/ashwanth2007/Resources/main/mani_kanasani.jpg',
    testimonial: 'https://lh3.googleusercontent.com/d/1qUnk3Fp9YgRSTG96rPSgR2Yff__5Pyj7',
    link: 'https://www.youtube.com/@ManiKanasani',
    headline: 'Agency Owner & Content Creator',
    stats: ['Agency Owner'],
  },
  {
    name: 'Kanchan Bhatta',
    image: 'https://raw.githubusercontent.com/ashwanth2007/Resources/main/kanchan_bhatta.jpg',
    testimonial: 'https://lh3.googleusercontent.com/d/1KtK-TQqGAs7nzid33reDNwTluDsYyxmP',
    link: 'https://www.linkedin.com/in/growthxkanchan/',
    headline: 'GTM & LinkedIn Expert',
    stats: ['GTM Expert', 'LinkedIn Expert'],
  },
];

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
    title: 'Enterprise AI SDR Intelligence Agent',
    subtitle: 'Full-stack business development intelligence system for a top-3 global consulting firm.',
    client: 'Top-3 Global Management Consulting Firm (Fortune 500)',
    role: 'System Architect',
    impact_summary: "3,000+ enterprise leads per month. ~$480K SDR team's workload replaced. Deployed live on $2M+ consulting pitches.",
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
    architectureSteps: [
      {
        category: 'Sourcing',
        description: 'Pull 10,000+ enterprise contacts each month from premium B2B databases, scoped to the MD\'s target sectors and company size band.',
        tools: [
          { name: 'Explorium', description: 'Primary lead database. Filtered by industry, geography, revenue and employee count.' },
          { name: 'N8N', description: 'Orchestrates the sourcing run, dedupes against the live Airtable, and queues new contacts for enrichment.' }
        ]
      },
      {
        category: 'Company Intelligence',
        description: 'Every account is researched for financial signals, hiring momentum, M&A activity and operational triggers before a human sees it.',
        parallel: true,
        tools: [
          { name: 'Perplexity Pro', description: 'Live research across news, filings and analyst commentary, with citations attached to every signal.' },
          { name: 'FireCrawl', description: 'Crawls the company site, careers page and investor relations to extract operational and hiring signals.' }
        ]
      },
      {
        category: 'Executive Profiling',
        description: 'Maps every executive\'s recent activity, decision-making authority and topic priorities so outreach lands on real context, not a job title.',
        parallel: true,
        tools: [
          { name: 'Apify', description: 'Scrapes LinkedIn profile, posts and recent engagement to capture priorities and tone.' },
          { name: 'Claude Sonnet 4.6', description: 'Synthesises a structured executive dossier from the raw scrape and public record.' }
        ]
      },
      {
        category: 'Pain Point Mapping',
        description: 'Translates company + executive signals into the firm\'s service offerings, so every prospect lands on a pitch grounded in their reality.',
        tools: [
          { name: 'GPT 4.2', description: 'Pattern-matches signals against the firm\'s methodology library to surface the right pain hypothesis.' },
          { name: 'Claude Sonnet 4.6', description: 'Refines the pain hypothesis into a one-line angle that the outreach copy can hang on.' }
        ]
      },
      {
        category: 'Outreach Generation',
        description: 'Personalised email and LinkedIn copy generated per executive, in the firm\'s voice, sequenced by channel.',
        tools: [
          { name: 'Claude Sonnet 4.6', description: 'Writes the email + LinkedIn variants, anchored on the pain hypothesis and executive context.' },
          { name: 'N8N', description: 'Routes the copy into the campaign queue and stamps every record with channel + sequence position.' }
        ]
      },
      {
        category: 'Campaign Operations',
        description: 'Live execution, reply tracking, CRM sync and real-time reporting back to the partner team.',
        tools: [
          { name: 'Airtable', description: 'System of record for accounts, contacts, campaigns and replies. Drives the partner-facing dashboard.' },
          { name: 'N8N', description: 'Watches reply inboxes, classifies positive replies, and syncs the deal record back to the CRM.' }
        ]
      }
    ],
    tech_stack: ['N8N', 'Airtable', 'GPT 4.2', 'Claude Sonnet 4.6', 'Perplexity Pro', 'Explorium', 'FireCrawl', 'Apify'],
    results: [
      '3,000+ qualified leads generated per month targeting $500M to $2.5B companies',
      'Replaced 6 full-time SDRs at 99% cost reduction',
      'Every prospect researched across 10+ business intelligence signals before first contact',
      'Managing Directors now open $2M to $5M pitches by demonstrating this system live',
      'Enterprise clients began requesting the system for their own sales teams',
      'Real-time targeting pivot across industries with no ramp-up time'
    ],
    gallery: [
      {
        src: '/case-studies/zoro-bcg/1.png',
        title: 'Executive Intelligence Dashboard',
        caption: 'Per-prospect dossier with role context, buyer score, and key topics of interest synthesised from 10+ signals.'
      },
      {
        src: '/case-studies/zoro-bcg/2.png',
        title: 'Buying Likelihood Engine',
        caption: 'Multi-factor rationale: ability to buy, expertise match, special event triggers, and next-best-action prompts.'
      },
      {
        src: '/case-studies/zoro-bcg/3.png',
        title: 'Company Intelligence Layer',
        caption: 'Financial moves, M&A activity, and operational triggers surfaced per account, mapped to BCG service offerings.'
      },
      {
        src: '/case-studies/zoro-bcg/4.png',
        title: 'Network & Public Activity',
        caption: 'Boards, non-profit affiliations, LinkedIn reach, and recent public statements profiled for every executive.'
      }
    ]
  },
  // 2. Ad Creator
  {
    id: 'zoro-ad-intel',
    category: 'CASE STUDIES',
    title: 'Ad Creative Intelligence Agent',
    subtitle: 'Automated Competitive Analysis → Systematic Winner Generation',
    client: '$2M/MRR D2C Brand',
    role: 'System Architect',
    impact_summary: '$150K to $600K monthly ad spend. 4x growth without a creative team.',
    tags: ['Gemini 3 Pro', 'Claude 4.6', 'Airtable', 'fal.ai', 'kie.ai', 'Foreplay'],
    context: 'A $2M/month D2C brand across health, auto, and digital products was spending $150K/month on ads but struggled to scale due to creative fatigue and saturation.',
    problem: 'The creative team was a bottleneck, producing only 20-40 concepts/month while competitors tested 200+. Manual research and random AI generation led to budget waste on unproven concepts.',
    solution: 'Deployed an intelligence infrastructure: Automating competitor monitoring, analyzing winning patterns via Gemini Vision/Claude 4.6, and systematically generating 400+ variations using Veo.',
    architecture: [
      'Competitor Radar (Foreplay + Facebook Graph API + FireCrawl)',
      'Creative Scanner (OpenAI Vision API + Gemini 3 Pro)',
      'Mechanistic Prompt Engine (Claude 4.6 brand voice trained)',
      'Video Variant Generator (Veo 3.1 + fal.ai + kie.ai)',
      'Performance Feedback Loop (Airtable Intelligence)'
    ],
    architectureSteps: [
      {
        category: 'Competitor Radar',
        description: 'Continuously sweeps every active ad and landing page in the brand\'s category. Captures live competitor creative the moment it goes up, not monthly manual screenshots.',
        tools: [
          { name: 'Foreplay', description: 'Pulls every running creative across competitor Meta accounts. Tags hooks, formats, and ad variants in one library.' },
          { name: 'Facebook Graph API', description: 'Streams ad placement and reach signals so we know which competitor creatives are getting real spend, not just impressions.' },
          { name: 'FireCrawl', description: 'Crawls competitor landing pages for offer copy, pricing structure, and post-click flow.' }
        ]
      },
      {
        category: 'Creative Scanner',
        description: 'Breaks every winning competitor video into frames, props, hooks, pacing, and emotional triggers, so the system understands WHY a creative works, not just THAT it works.',
        tools: [
          { name: 'OpenAI', description: 'Vision API runs frame-by-frame analysis of each winning video. Tags scene composition, on-screen text, presenter angle, and product moment.' },
          { name: 'Gemini 3 Pro', description: 'Synthesises the per-frame tags into a structured "what made this win" brief consumed by the prompt engine.' }
        ]
      },
      {
        category: 'Mechanistic Prompt Engine',
        description: 'A brand-voice-trained prompt layer that turns the win-analysis brief into structured creative briefs for every variant about to be tested.',
        tools: [
          { name: 'Claude 4.6', description: 'Trained on the brand\'s tone, offer, and previously winning hooks. Writes the structured creative brief downstream models execute on.' }
        ]
      },
      {
        category: 'Video Variant Generator',
        description: 'Produces 5-10 video variants per concept, with a model-mix routed by cost and quality. Hero variants get Veo, fast iterations get fal/kie.',
        tools: [
          { name: 'Veo 3.1', description: 'Primary text-to-video model for hero variants where motion realism matters most.' },
          { name: 'fal.ai', description: 'Fast, cheap rotation for hook variants and rapid testing.' },
          { name: 'kie.ai', description: 'Fallback model for stylised cuts and lower-cost iteration loops.' }
        ]
      },
      {
        category: 'Performance Feedback Loop',
        description: 'Live ad performance flows back into the system. Winning frames, hooks, and styles re-enter the prompt engine as positive signal for the next batch.',
        tools: [
          { name: 'Airtable', description: 'System of record for every variant, concept, prompt, model, spend, CTR, ROAS. Drives the win/loss signal the prompt engine learns from.' }
        ]
      }
    ],
    tech_stack: ['Airtable', 'fal.ai', 'kie.ai', 'Gemini 3 Pro', 'Claude 4.6', 'Veo 3.1', 'OpenAI', 'FireCrawl', 'Facebook Graph API', 'Foreplay'],
    results: [
      'Scaled ad spend from $150K to $600K/month',
      'Increased testing from 20 to 400+ variations/month',
      'Reduced creative cost from $12k/mo to $600/mo',
      'Found 20-25 winning concepts/month (vs 2-3 previously)'
    ],
    gallery: [
      {
        src: '/case-studies/zoro-ad-intel/3.png',
        title: 'Competitor Ad Repository',
        caption: 'Live capture of every running competitor video ad with creative metadata, hook tags, and platform context.'
      },
      {
        src: '/case-studies/zoro-ad-intel/4.png',
        title: 'Repurposed Visual Creatives',
        caption: 'Static and overlay variants generated from competitor patterns, classified by hook, problem, and offer angle.'
      },
      {
        src: '/case-studies/zoro-ad-intel/5.png',
        title: 'Repurposed Video Creatives',
        caption: 'Per-clip prompt history with character, lighting, setting, and product-angle tags driving variant generation.'
      },
      {
        src: '/case-studies/zoro-ad-intel/3.png',
        title: 'Competitor Library Drill-down',
        caption: 'Same competitor library, drilled into a single ad to show how every running creative is decomposed and tagged.'
      },
      {
        src: '/case-studies/zoro-ad-intel/2.png',
        title: 'Facebook Ad Analytics',
        caption: 'Per-ad performance with winners, losers, and undetermined classification feeding the prompt-engine loop.'
      },
      {
        src: '/case-studies/zoro-ad-intel/1.png',
        title: 'Campaign Analytics Dashboard',
        caption: 'Top-level Facebook ad campaign view: spend, impressions, clicks, and active vs paused campaigns at a glance.'
      }
    ]
  },
  // 3. Enterprise Content Intelligence Infrastructure
  {
    id: 'enterprise-content-intel',
    category: 'CASE STUDIES',
    title: 'Enterprise Content Intelligence Agent',
    subtitle: '50+ senior partners running automated thought leadership systems used directly in multi million dollar consulting pitches.',
    client: 'Global Consulting Firm, TMT Practice',
    role: 'System Architect',
    impact_summary: '50+ senior partners. Automated thought leadership deployed inside multi-million dollar consulting pitches.',
    tags: ['n8n', 'Claude Sonnet', 'Airtable', 'LinkedIn'],
    context: 'Built an enterprise content intelligence system designed to convert real time industry signals into structured thought leadership for senior partners.',
    problem: 'No systematic way for senior consulting partners to translate deep expertise into consistent, high quality thought leadership. Despite advising enterprise clients on AI and transformation, their public presence did not reflect their authority.',
    solution: 'Real time industry signals converted into structured thought leadership for senior partners. The system combines: 1) Large scale monitoring across industry, competitors, and enterprise signals 2) Relevance scoring aligned to each partner\'s practice and expertise 3) Context engineered generation in firm voice and partner tone 4) Multi angle output so the partner picks the framing that fits the moment.',
    architecture: [
      'Intelligence monitoring layer across 500+ sources including competitors, industry signals, and enterprise activity',
      'Signal filtering engine rejecting approximately 95% of low value inputs',
      'Relevance scoring system aligned to practice areas and individual profiles',
      'Content generation engine trained on firm level voice and partner level communication style',
      'Multi angle output layer generating strategic positioning options per signal',
      'Review and approval layer for partner level control'
    ],
    architectureSteps: [
      {
        category: 'Intelligence Monitoring',
        description: 'Continuously ingests signals across 500+ sources, competitor positioning, industry shifts, regulatory moves, enterprise client activity. Nothing reaches a partner without going through this layer first.',
        tools: [
          { name: 'n8n', description: 'Orchestrates the polling, normalisation, and routing of every signal source into the central pipeline.' },
          { name: 'external intelligence sources', description: 'Curated industry research, analyst commentary, and enterprise news feeds, scoped to TMT practice areas.' }
        ]
      },
      {
        category: 'Signal Filtering',
        description: 'Auto-rejects ~95% of low-value inputs before scoring. Catches duplicates, off-thesis chatter, and stale news within seconds of intake.',
        tools: [
          { name: 'n8n', description: 'Runs the filter ladder, dedup, recency, source authority, topical fit. Output is a clean candidate set per practice area.' }
        ]
      },
      {
        category: 'Relevance Scoring',
        description: 'Scores remaining signals against each partner\'s expertise, recent posts, and active client conversations. Only signals above the threshold reach generation.',
        tools: [
          { name: 'Claude Sonnet', description: 'Reads the signal, the partner\'s profile, and active practice priorities. Returns a ranked relevance score with rationale per signal.' }
        ]
      },
      {
        category: 'Content Generation',
        description: 'Generates thought leadership in the firm\'s voice, calibrated to the partner\'s individual communication style, not generic AI prose. Trained on years of consulting writing.',
        tools: [
          { name: 'Claude Sonnet', description: 'Drafts the post anchored on the signal, the partner\'s POV, and the firm\'s positioning vocabulary.' }
        ]
      },
      {
        category: 'Multi-angle Output',
        description: 'Every signal returns 3-5 framings (provocative, analytical, advisory, contrarian). Partner picks the angle that fits the moment, never a single take-it-or-leave-it draft.',
        tools: [
          { name: 'Claude Sonnet', description: 'Produces the angle matrix per signal, with each angle tagged for tone, audience, and risk profile.' }
        ]
      },
      {
        category: 'Review & Approval',
        description: 'Partner sees only the curated multi-angle set, picks one, edits if needed, and triggers publish. Sub-10 minutes per partner per cycle.',
        tools: [
          { name: 'Airtable', description: 'Partner-facing approval surface with status, version history, and a one-click publish handoff.' },
          { name: 'LinkedIn', description: 'Final publish target, scheduled or fired immediately on approval.' }
        ]
      }
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
    title: 'Viral Recipe Discovery Agent',
    subtitle: 'Multi-lingual content scraping & sentiment analysis',
    client: 'German Recipe Media Company (500K+ Newsletter Subscribers)',
    role: 'Developer',
    impact_summary: 'ROI:\n40 to 1,000+ recipes/month. App churn cut from 28% to 12%.',
    tags: ['Make', 'OpenAI 5.4', 'Apify', 'Google Docs', 'TikTok', 'Instagram'],
    context: 'A German media company with 500K newsletter subscribers needed to discover and structure air fryer recipe content from social media.',
    problem: 'Manual content curation took 10+ hours per week with inconsistent quality and no sentiment analysis. No automated way to scrape, analyze sentiment, or generate dual-language docs.',
    solution: 'Built N8N workflow for TikTok/Instagram scraping using Apify, implemented SRT transcription, AI sentiment analysis, and automated Google Doc export in English and German.',
    architecture: [
      'TikTok/Instagram scraping via Apify',
      'SRT transcription processing',
      'AI sentiment analysis system',
      'Dual-language Google Doc export'
    ],
    architectureSteps: [
      {
        category: 'Social Discovery',
        description: 'Continuously scrapes air-fryer recipe content trending on TikTok and Instagram, scoped to engagement velocity and German + English audience signals.',
        tools: [
          { name: 'Apify', description: 'Runs platform-specific actors against TikTok and Instagram. Captures video, caption, audio, and engagement metadata in one pass.' },
          { name: 'TikTok', description: 'Discovery surface for short-form recipe content with high replay velocity.' },
          { name: 'Instagram', description: 'Reels and grid posts for visually-driven recipes worth turning into newsletter pieces.' }
        ]
      },
      {
        category: 'Transcription',
        description: 'Pulls voiceover and on-screen narration out of every scraped video into clean SRT text, ready for sentiment + structure analysis.',
        tools: [
          { name: 'OpenAI 5.4', description: 'Transcribes the audio track and aligns it with on-screen captions. Outputs SRT with timing used downstream.' }
        ]
      },
      {
        category: 'Sentiment & Structure Analysis',
        description: 'Reads the transcript, scores audience sentiment, and pulls out the actual recipe, ingredients, steps, cook time, in structured form.',
        tools: [
          { name: 'OpenAI 5.4', description: 'Single-pass extraction of recipe schema (ingredients, steps, time, equipment) plus a sentiment score for ranking.' }
        ]
      },
      {
        category: 'Dual-language Output',
        description: 'Produces a polished English and German Google Doc per qualifying recipe, ready for the editorial team to drop into the newsletter pipeline.',
        tools: [
          { name: 'Google Docs', description: 'Final output target, one structured recipe per doc, formatted for the newsletter template.' },
          { name: 'Make', description: 'Orchestrates the end-to-end flow, Apify → OpenAI → Google Docs, with dedup gating before any doc is created.' }
        ]
      }
    ],
    tech_stack: ['make.com', 'OpenAI 5.4', 'Apify', 'Google Docs', 'TikTok', 'Instagram'],
    results: [
      'Reduced curation time from 10+ hours to 2 hours/week',
      'Automated dual-language output (English/German)',
      'Structured recipe database with engagement metrics',
      'Duplicate detection preventing wasted processing'
    ],
    gallery: [
      {
        src: '/case-studies/instig8-recipe/1.png',
        title: 'Recipe Content Database',
        caption: 'Master Airtable holding every discovered recipe with Google Doc URL, top-performer flag, cuisine type, source video, status pills, and output-generation state per row.'
      },
      {
        src: '/case-studies/instig8-recipe/3.png',
        title: 'Creator & Profile Watchlist',
        caption: 'Per-creator tracking across TikTok and Instagram, segmented by channel and active state, so the agent only ingests fresh content from accounts that are still publishing.'
      }
    ]
  },
  // 5. B2B Lead Intelligence & Outbound Pipeline
  {
    id: 'b2b-lead-intel',
    category: 'CASE STUDIES',
    title: 'B2B Lead Intelligence Agent',
    subtitle: 'End-to-end outbound pipeline generating 500 highly qualified, outreach-ready leads per run from structured ICP inputs, with personalized copy in three languages.',
    client: 'Industrial Software Platform (QHSE, EHS, CMMS, ESG)',
    role: 'System Architect',
    impact_summary: '500 leads per run. Personalized outreach copy in three languages for highly qualified leads. End-to-end pipeline from ICP intake to outreach.',
    tags: ['Next.js', 'FastAPI', 'n8n', 'Claude', 'Airtable', 'SmartLead', 'Lovable.app'],
    context: 'Built a full-stack lead intelligence and outbound system designed for industrial B2B targeting.',
    problem: 'No scalable system to identify, enrich, and engage high quality industrial decision makers across multiple geographies and industries. Manual prospecting limited coverage, reduced data accuracy, and made personalized outreach at scale infeasible.',
    solution: 'Full-stack lead intelligence and outbound for industrial B2B. The system combines: 1) Structured ICP intake across roles, industries, geographies, size, revenue 2) AI query expansion to normalize titles and locations 3) Automated lead generation and enrichment 4) AI personalized email + LinkedIn copy per lead 5) Campaign routing and reply tracking.',
    architecture: [
      'ICP intake layer capturing targeting parameters and campaign configuration',
      'AI query expansion layer for job title and geography normalization',
      'Lead generation and enrichment pipeline',
      'Outreach copy generation engine for personalized messaging',
      'Campaign orchestration layer integrating with outreach tools',
      'Tracking layer for leads, campaigns, and replies'
    ],
    architectureSteps: [
      {
        category: 'ICP Intake',
        description: 'Operator captures roles, industries, geographies, company size, and revenue band through a structured form. Every campaign starts from a single, queryable definition, no shared spreadsheets.',
        tools: [
          { name: 'Next.js', description: 'Operator-facing intake UI with form validation and ICP versioning.' },
          { name: 'FastAPI', description: 'Backend that persists each ICP as a versioned record and handles auth + audit.' }
        ]
      },
      {
        category: 'Query Expansion',
        description: 'Normalises job titles ("VP Ops" vs "Vice President of Operations") and location variants so the lead pull doesn\'t miss matches sitting in messy data.',
        tools: [
          { name: 'Claude', description: 'Expands every input title + geography into the dataset\'s actual variant set. Output drives the dataset query.' }
        ]
      },
      {
        category: 'Lead Generation & Enrichment',
        description: 'Pulls leads against the expanded query, then enriches each one with verified email, phone, and firmographic context before scoring.',
        tools: [
          { name: 'n8n', description: 'Orchestrates the source query, enrichment waterfall, and dedup against the live Airtable.' },
          { name: 'Airtable', description: 'System of record for leads, companies, campaigns, and replies. Drives the operator dashboard.' }
        ]
      },
      {
        category: 'Outreach Generation',
        description: 'Generates personalised email and LinkedIn copy per lead, anchored on the lead\'s role, company context, and the campaign\'s value proposition.',
        tools: [
          { name: 'Claude', description: 'Writes the per-lead variants. Returns email + LinkedIn copy tagged for sequence position.' }
        ]
      },
      {
        category: 'Campaign Orchestration',
        description: 'Routes the generated copy into the right outbound channel, splits between email and LinkedIn based on lead opt-in, stamps every send for tracking.',
        tools: [
          { name: 'SmartLead', description: 'Email send infrastructure, rotation, warmup, deliverability monitoring.' },
          { name: 'n8n', description: 'Workflow glue between Airtable, the AI generator, and SmartLead.' }
        ]
      },
      {
        category: 'Tracking',
        description: 'Live tracking across leads, campaigns, and replies. Operator sees pipeline health, response rates, and per-segment ROI in real time.',
        tools: [
          { name: 'Airtable', description: 'Pipeline + reply tracker, surfaced through the operator dashboard.' },
          { name: 'Lovable.app', description: 'Operator-facing dashboard layer for non-technical campaign owners.' }
        ]
      }
    ],
    tech_stack: ['Next.js', 'FastAPI', 'n8n', 'Claude', 'Airtable', 'SmartLead', 'Lovable.app'],
    results: [
      '500 highly qualified leads generated per run',
      'Personalized outreach copy delivered in three languages per lead',
      'End-to-end pipeline from ICP intake to outreach launch',
      'Centralized tracking across leads, campaigns, and replies'
    ],
    gallery: [
      {
        src: '/case-studies/b2b-lead-intel/1.png',
        title: 'Operator Dashboard',
        caption: 'Single entry point for the lead intelligence pipeline. Inputs (Lead Search, Upload Leads, Upload Companies, Parameter Builder, Reactivation) on the left; outputs (Leads, Campaigns, Replies) on the right.'
      },
      {
        src: '/case-studies/b2b-lead-intel/2.png',
        title: 'Structured ICP Intake',
        caption: 'Operator captures campaign name, target job titles, geographies, industries, keywords, employee count, revenue range, and additional instructions. Every campaign starts from one queryable definition.'
      },
      {
        src: '/case-studies/b2b-lead-intel/3.png',
        title: 'Bulk Upload & Capacity Guardrails',
        caption: 'CSV / XLSX upload for companies and leads with hard caps (max 100 companies per upload, 1,000 leads per request) and best-practice prompts so operators never overshoot the enrichment budget.'
      },
      {
        src: '/case-studies/b2b-lead-intel/4.png',
        title: 'Reactivation Campaign Builder',
        caption: 'Re-engagement layer for leads gone cold. Filter by last-contacted window (3 / 6 / 10 months), narrow by job title and country, and pass campaign-specific context for the AI copy engine.'
      },
      {
        src: '/case-studies/b2b-lead-intel/5.png',
        title: 'Multi-Language Sequence (Italian)',
        caption: 'Per-lead 4-email sequence generated in Italian for an Italy-based prospect. Subject lines and bodies are personalized to the lead\'s role, geography, and reference accounts in their region.'
      },
      {
        src: '/case-studies/b2b-lead-intel/6.png',
        title: 'Multi-Language Sequence (English)',
        caption: 'Same 4-email structure for an English-speaking executive across rigs. Three-language coverage (English, Italian, Spanish) is generated per lead with no separate prompt or workflow.'
      },
      {
        src: '/case-studies/b2b-lead-intel/7.png',
        title: 'Campaign Intelligence System',
        caption: 'Per-campaign view with launch state, results summary (leads, yield %, channel split, existing HubSpot contacts), and the full search configuration captured at run time for audit.'
      }
    ]
  },
  // 6. EMS Manufacturing LinkedIn Content System
  {
    id: 'calcuquote-linkedin',
    category: 'CASE STUDIES',
    title: 'EMS LinkedIn Content Agent',
    subtitle: 'End-to-end LinkedIn content engine for manufacturing and supply chain brands.',
    client: 'EMS Manufacturing Company',
    role: 'System Architect',
    impact_summary: 'End-to-end LinkedIn content engine for manufacturing and supply chain brands.',
    tags: ['Next.js', 'FastAPI', 'Airtable', 'Claude Sonnet 4.6', 'fal.ai', 'Perplexity', 'CalcuQuote'],
    context: 'Built a full-stack LinkedIn Content Management System tailored for an EMS manufacturing software platform, designed to transform technical product data, RFQ workflows, and supply chain insights into structured, high-quality LinkedIn content.',
    problem: 'No scalable system to convert highly technical manufacturing, quoting, and supply chain data into consistent, high-quality LinkedIn content. Content creation required manual effort, lacked consistency across profiles, and failed to translate complex EMS concepts into clear, engaging narratives.',
    solution: 'Full-stack LinkedIn CMS that turns technical manufacturing data into structured posts. The system combines: 1) Knowledge ingestion from product docs, BOM workflows, transcripts, and industry sources 2) AI content grounded in internal data + live research 3) Multi-layer quality control with automated scoring and rewriting 4) Scheduling and publishing across profiles.',
    architecture: [
      'Knowledge ingestion layer (product docs, BOM data context, transcripts, URLs)',
      'AI content generation engine (context-aware + industry research augmented)',
      'Quality control layer (AI scoring + auto-rewrite if below threshold)',
      'Image generation system (style-controlled visuals aligned to brand)',
      'Multi-profile management (independent voice + technical positioning per profile)',
      'Scheduling engine (calendar-based planning + execution tracking)'
    ],
    architectureSteps: [
      {
        category: 'Knowledge Ingestion',
        description: 'Pulls product docs, BOM workflows, transcripts, and customer URLs into a single brand-knowledge layer that grounds every piece of generated content.',
        tools: [
          { name: 'CalcuQuote', description: 'Source system for RFQ + BOM workflow context that gets used in technical posts.' },
          { name: 'Airtable', description: 'Stores the structured knowledge base, pillars, source docs, evergreen claims, with per-profile tagging.' }
        ]
      },
      {
        category: 'Content Generation',
        description: 'Produces LinkedIn posts grounded in the internal knowledge base AND live industry research, so every post carries authority and timeliness.',
        tools: [
          { name: 'Claude Sonnet 4.6', description: 'Drafts the post against the chosen content pillar, source docs, and live research context.' },
          { name: 'Perplexity', description: 'Live research layer, pulls current manufacturing and supply chain signals to supplement internal knowledge.' }
        ]
      },
      {
        category: 'Quality Control',
        description: 'Every draft is auto-scored on hook strength, technical accuracy, and on-brand voice. Anything below threshold is rewritten before it reaches a human.',
        tools: [
          { name: 'Claude Sonnet 4.6', description: 'Scoring + rewrite pass. Flags weak hooks, vague claims, and off-brand voice, then regenerates.' }
        ]
      },
      {
        category: 'Image Generation',
        description: 'Brand-aligned visuals generated per post, styled to match the company\'s visual system, never stock or generic AI art.',
        tools: [
          { name: 'fal.ai', description: 'Image generation with brand style references and per-post composition prompts.' }
        ]
      },
      {
        category: 'Multi-profile Management',
        description: 'One system, multiple profiles. Each profile (Personal + Company) carries its own pillar mix, voice, and posting cadence, no cross-contamination.',
        tools: [
          { name: 'Airtable', description: 'Holds per-profile config, pillars, voice rules, posting frequency, and content history.' }
        ]
      },
      {
        category: 'Scheduling & Publishing',
        description: 'Calendar-based plan per profile, with per-post visibility into status (drafted, approved, scheduled, published).',
        tools: [
          { name: 'FastAPI', description: 'Scheduling backend that fires posts at the configured slot per profile.' },
          { name: 'Next.js', description: 'Operator-facing calendar UI for review, swap, and publish.' }
        ]
      }
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
    ],
    gallery: [
      {
        src: '/case-studies/calcuquote-linkedin/1.png',
        title: 'Content Workspace Dashboard',
        caption: 'Single-pane view of the day: active profiles, knowledge-base size, drafts in review, and posts already published, with recommended-action prompts and a handoff checklist.'
      },
      {
        src: '/case-studies/calcuquote-linkedin/2.png',
        title: 'Post Manager (Kanban)',
        caption: 'Generated posts flow through Under Review → Approved → Posted. Each card carries the post draft, supporting research thumbnail, profile, and pillar tag for quick triage.'
      },
      {
        src: '/case-studies/calcuquote-linkedin/3.png',
        title: 'Post Manager (Table)',
        caption: 'Same posts in a dense table view: ID, body preview, status, profile, content pillar (Framework / Behind the Scenes / Thought Leadership / Industry Insight), and scheduled date.'
      },
      {
        src: '/case-studies/calcuquote-linkedin/4.png',
        title: 'LinkedIn Profile Manager',
        caption: 'Per-profile control surface for the Company account plus three executive accounts (CMO, CEO, CFO). Posts-per-run, totals, and active toggle govern routing of every generated post.'
      },
      {
        src: '/case-studies/calcuquote-linkedin/5.png',
        title: 'Auto-Schedule Settings',
        caption: 'Operator-facing scheduler: enable autonomous post generation across all active profiles, set the next run date, and preserve manual override from the dashboard.'
      }
    ]
  },
  // 7. Viral Content Intelligence and Playbook System
  {
    id: 'instig8-boom',
    category: 'INSTIG8',
    title: 'Viral Content Playbook Agent',
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
    architectureSteps: [
      {
        category: 'Platform Scraping',
        description: 'Six platform-specific Apify actors pull top-performing posts from TikTok, Instagram, YouTube, Twitter, LinkedIn, and Facebook in parallel.',
        parallel: true,
        tools: [
          { name: 'Apify Custom Actors', description: 'One actor per platform, each tuned to platform auth, ranking signals, and rate limits.' },
          { name: 'n8n', description: 'Triggers the parallel platform runs and stages output for downstream analysis.' }
        ]
      },
      {
        category: 'Hashtag & Account Monitoring',
        description: 'Scoped scrape per workflow, either a hashtag set or a custom account list. Same engine, different lens, depending on the campaign.',
        tools: [
          { name: 'Apify Custom Actors', description: 'Reused with hashtag- or account-scoped inputs per run.' },
          { name: 'Airtable', description: 'Holds the watched-hashtag and watched-account registries per product (Boom + Wisdom).' }
        ]
      },
      {
        category: 'Sentiment & Pattern Analysis',
        description: 'Per-platform pass that identifies engagement drivers, audience sentiment, hook structures, and visual patterns correlating with virality.',
        tools: [
          { name: 'OpenAI GPT', description: 'Reads each platform\'s harvest and tags posts with sentiment, hook type, and engagement archetype.' }
        ]
      },
      {
        category: 'Cross-platform Aggregation',
        description: 'Final orchestration synthesises signals across all 6 platforms into a unified set of viral patterns, what\'s working everywhere vs platform-specific.',
        tools: [
          { name: 'n8n', description: 'Aggregator workflow, joins per-platform output, dedupes overlap, ranks themes by cross-platform recurrence.' }
        ]
      },
      {
        category: 'Playbook Generation',
        description: 'Turns the unified pattern set into a production-ready viral playbook, hooks, formats, captions, CTAs, per product, per platform.',
        tools: [
          { name: 'OpenAI GPT', description: 'Composes the playbook in structured form (hook bank, format templates, caption variants, CTA stack).' }
        ]
      },
      {
        category: 'Document Export',
        description: 'Auto-export of every playbook into a clean Google Doc that the content team can act on without leaving Drive.',
        tools: [
          { name: 'Google Docs API', description: 'Generates the formatted doc from the structured playbook.' },
          { name: 'Google Drive API', description: 'Drops the doc into the right product folder with permissions pre-set.' }
        ]
      },
      {
        category: 'Webhook Trigger',
        description: 'On-demand execution, the content team fires the whole pipeline from a single webhook when a fresh playbook is needed.',
        tools: [
          { name: 'n8n', description: 'Webhook entry point that orchestrates Scrape → Analyse → Aggregate → Generate → Export.' }
        ]
      }
    ],
    tech_stack: ['n8n', 'OpenAI GPT', 'Google Drive API', 'Google Docs API', 'Apify Custom Actors', 'Airtable'],
    results: [
      'Unified analysis across 6 social platforms',
      'Generated actionable viral playbooks for 2 products',
      'Modular architecture enabling easy replication',
      'Webhook-triggered execution for on-demand analysis'
    ],
    gallery: [
      {
        src: '/case-studies/instig8-boom/viral-content-engine.mp4',
        title: 'Viral Content Engine',
        caption: 'Live walkthrough of the 7-workflow n8n system: parallel Apify scrapes across TikTok, Instagram, YouTube, Twitter, LinkedIn, and Facebook → sentiment + pattern analysis → cross-platform aggregation → AI playbook generation → auto-export to Google Docs.'
      }
    ]
  },
  // 8. Construction Market Signal Intelligence and Outbound System
  {
    id: 'zoro-onindus',
    category: 'CASE STUDIES',
    title: 'Construction Signal Outreach Agent',
    subtitle: 'Automated signal monitoring & multi-channel outreach system.',
    client: 'Capital Projects Advisory Consulting Firm (Healthcare, Higher Education, Municipal)',
    role: 'Lead Developer',
    impact_summary: '500 signal-triggered leads per week. Outreach scaled 25x. Call prep cut 85%.',
    tags: ['N8N', 'HubSpot', 'Clay'],
    context: 'The construction consulting firm was manually tracking construction projects and job changes across healthcare, education, and municipal sectors.',
    problem: 'Business development was running blind. The team sent 100 emails per day with no intelligence behind timing or targeting. Hospital expansions and VP-level changes happened with no way to detect them. Manual research took 2+ hours per company.',
    solution: 'Signal-driven business development for a capital projects advisory firm selling to hospitals, universities, and government agencies. Real-time monitoring of construction news, bond approvals, facility announcements, and leadership changes. When a signal fires the system finds the right decision maker, verifies contact details, and generates email, LinkedIn, and phone script grounded in that signal.',
    architecture: [
      'Real-time monitoring of construction project announcements, bond approvals, and leadership changes across target industries',
      'Automatic identification and contact verification of decision makers triggered by each signal',
      'AI-generated personalized email sequences, LinkedIn messages, and phone scripts per lead',
      'Coordinated outreach across email and LinkedIn with no overlap or over-messaging',
      'Full CRM sync with live pipeline tracking and weekly performance reporting'
    ],
    architectureSteps: [
      {
        category: 'Real-time Signal Monitoring',
        description: 'Watches construction project announcements, bond approvals, facility expansions, and leadership changes across hospitals, universities, and government agencies. 24/7, no manual research.',
        tools: [
          { name: 'Perplexity API', description: 'Live search and citation layer for construction news, bond filings, and leadership change announcements.' },
          { name: 'N8N', description: 'Polls and routes every signal into Airtable as a triggerable record.' }
        ]
      },
      {
        category: 'Decision Maker Identification',
        description: 'When a signal fires the system finds the right contact (VP Facilities, CFO, Capital Projects lead) at the organisation and verifies email and phone before any outreach is generated.',
        tools: [
          { name: 'Airtable', description: 'Holds the verified-contact registry per target organisation, kept fresh as roles change.' },
          { name: 'N8N', description: 'Runs the contact lookup and verification waterfall when a signal-triggered company hits the queue.' }
        ]
      },
      {
        category: 'AI Personalised Outreach',
        description: 'Generates an email sequence, a LinkedIn message, and a phone script for the rep. Every asset is grounded in the actual signal that fired, not a generic template.',
        tools: [
          { name: 'Claude Sonnet 4.6', description: 'Writes the email and LinkedIn copy anchored on the signal and the contact role.' },
          { name: 'GPT 4.2', description: 'Generates the phone script with talking points and likely objections.' }
        ]
      },
      {
        category: 'Multi-channel Coordination',
        description: 'Coordinates email and LinkedIn so a contact never gets hit on both channels in the same week. Cadence and spacing are managed automatically.',
        tools: [
          { name: 'N8N', description: 'Channel scheduler that enforces no-overlap rules and per-contact cadence caps.' }
        ]
      },
      {
        category: 'CRM Sync',
        description: 'Every lead, signal, and outreach action lands in HubSpot in real time. Sales leadership sees pipeline health and per-rep activity without chasing reps for updates.',
        tools: [
          { name: 'HubSpot', description: 'System of record for all signal-triggered leads and activity.' },
          { name: 'N8N', description: 'Bi-directional sync between Airtable and HubSpot, with signal-to-deal traceability preserved.' }
        ]
      }
    ],
    tech_stack: ['N8N', 'Airtable', 'Claude Sonnet 4.6', 'GPT 4.2', 'HubSpot', 'Perplexity API'],
    results: [
      '500 signal-qualified leads generated per week',
      'Outreach scaled from 100 contacts per day to 2,500+ per week',
      'Every lead matched to a live construction trigger before first contact',
      'Sales team receives pre-researched talking points per lead, cutting call prep from 2 hours to 15 minutes',
      '$50M+ construction projects, bond approvals, and leadership changes tracked automatically',
      'All activity synced to CRM with real-time pipeline visibility'
    ],
    gallery: [
      {
        src: '/case-studies/zoro-onindus/1.png',
        title: 'Executive Dashboard',
        caption: 'Single landing page wiring every module of the system together: lead intake, request processing, lead and company analytics, email performance, and reply tracking, all reachable in one click.'
      },
      {
        src: '/case-studies/zoro-onindus/2.png',
        title: 'Request Processing Status',
        caption: 'Live queue of every lead-generation request, status pills (Campaign Created), record counts per request, requestor identity, and timestamps, so operators always know what is in flight.'
      },
      {
        src: '/case-studies/zoro-onindus/3.png',
        title: 'Lead Validation Center',
        caption: 'Manual checklist surface for new email and LinkedIn leads (121 + 126 in this run) with ICP fitness score, existing-contact flag, and verified headline before any lead is released to outreach.'
      },
      {
        src: '/case-studies/zoro-onindus/4.png',
        title: 'Lead Performance Analytics',
        caption: '7,548 total leads broken down by channel: 3,767 email, 1,297 LinkedIn, 302 already in HubSpot, 1,732 existing leads, 512 invalid, with a drillable per-campaign email lead list below.'
      },
      {
        src: '/case-studies/zoro-onindus/5.png',
        title: 'Company Intelligence Dossier',
        caption: 'Per-account profile (Alamance County Government shown) with company info, people, SIC codes, socials, location, revenue and employee details, industry, research data, funding, and sub-organisations.'
      },
      {
        src: '/case-studies/zoro-onindus/6.png',
        title: 'Email Response Tracking',
        caption: 'Reply intelligence per contact: category (Interested / Meeting Request / Information Request), sentiment, master inbox URL, full reply text, and contact dossier on the right for fast follow-up.'
      }
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
    problem: 'Manual editorial queue on Inoreader. Duplicates bled through, DataForSEO credits burned on rejected articles, and AI prompts returned keyword slop. Backlog passed 300 articles with no triage by search value.',
    solution: 'Four-stage Make.com pipeline on an Airtable source of truth. Inoreader feeds a deduplicated Pending queue. Operator approval is the only trigger releasing a row into paid enrichment. Keywords are extracted from article body and checked against a Keyword Master before DataForSEO fires. Outline generation pulls AI Score 5+ sources and returns an H1 to H3 outline in under ten minutes.',
    architecture: [
      'Ingest and Fetch (every 12h). Inoreader to Airtable with URL dedup, full-body fetch, and AI classification for Target Audience, Content Type, and AI Score.',
      'Approval Gate. Operator flips Status to Approved. SEO Ready flag verifies full content exists before any paid call is allowed to fire.',
      'Keyword Enrichment. AI extracts 3 primary and 5 secondary keywords from the article body. New keywords only hit DataForSEO, then write back to Keyword Master and Article Keywords.',
      'Outline Generation. Operator picks a target keyword. Collect Articles pulls linked sources scoring 5 or higher. GPT assembles the H1 to H3 outline and writes it back to Outline Generator as Draft.'
    ],
    architectureSteps: [
      {
        category: 'Ingest & Fetch',
        description: 'Every 12 hours Inoreader pushes new articles into Airtable. URL dedup blocks repeats. Full article body is fetched and AI-classified for Target Audience, Content Type, and AI Score before it reaches the operator queue.',
        tools: [
          { name: 'Inoreader', description: 'Source feed curated by topic and competitor.' },
          { name: 'Make.com', description: 'Orchestrates fetch, classification, and write-back to Airtable.' },
          { name: 'Airtable', description: 'Pending queue of every classified article, ready for operator triage.' },
          { name: 'OpenAI', description: 'Runs the audience, content type, and AI Score classification pass.' }
        ]
      },
      {
        category: 'Approval Gate',
        description: 'No paid API call fires until a human flips Status to Approved. SEO Ready flag double-checks that full content actually exists before allowing the row downstream. Credit burn lives or dies here.',
        tools: [
          { name: 'Airtable', description: 'Approval surface. Status field plus SEO Ready flag gate the whole pipeline.' }
        ]
      },
      {
        category: 'Keyword Enrichment',
        description: 'Approved articles get 3 primary and 5 secondary keywords extracted from the actual article body, not from titles or meta. Only NEW keywords hit DataForSEO. Everything previously enriched is reused from the Keyword Master.',
        tools: [
          { name: 'OpenAI', description: 'Extracts the keyword set from full article text.' },
          { name: 'DataForSEO', description: 'Volume and difficulty enrichment, only fired on new keywords, never repeats.' },
          { name: 'Airtable', description: 'Keyword Master and Article Keywords tables that drive the dedup logic.' }
        ]
      },
      {
        category: 'Outline Generation',
        description: 'Operator picks a target keyword. The system pulls only AI Score 5+ source articles for that keyword, hands them to GPT, and gets back a structured H1 to H3 outline as a Draft, under 10 minutes start to finish.',
        tools: [
          { name: 'OpenAI', description: 'Composes the H1 to H3 outline grounded in the high-score source set.' },
          { name: 'Airtable', description: 'Outline Generator table holds every Draft, version history, and source linkage.' }
        ]
      }
    ],
    tech_stack: ['Make.com', 'Airtable', 'Inoreader', 'DataForSEO', 'OpenAI'],
    results: [
      'Four-table Airtable state machine governs article lifecycle from Pending to publishable outline.',
      'Approval gate blocks DataForSEO calls on rejected articles, collapsing credit burn to near zero.',
      'Keyword Master dedup layer reuses prior enrichment across campaigns, so cost compounds downward.',
      'AI Score (1 to 10) filters weak sources before outline generation, so only rank-worthy inputs reach GPT.'
    ],
    gallery: [
      {
        src: '/case-studies/instig8-xpertlink/1.png',
        title: 'Article Ingest from Inoreader',
        caption: 'Make.com pipeline that pulls every new feed item from Inoreader, fetches the full article body, dedupes by URL, and classifies each post for Target Audience, Content Type, and AI Score before staging in Airtable.'
      },
      {
        src: '/case-studies/instig8-xpertlink/2.png',
        title: 'Approval-Gated SEO Enrichment',
        caption: 'Approval-gated keyword enrichment branch. AI extracts 3 primary and 5 secondary keywords from the article body; only new keywords hit DataForSEO before writing back to Keyword Master and Article Keywords.'
      },
      {
        src: '/case-studies/instig8-xpertlink/3.png',
        title: 'AI Outline Generator',
        caption: 'Webhook-triggered outline builder. Pulls AI Score 5+ source articles from Airtable, routes through iterators and OpenAI tools, and writes back an H1 to H3 outline as Draft, ready for the editor.'
      }
    ]
  },
  // 10. Aliyah Lead Scraping
  {
    id: 'zoro-aliyah',
    category: 'CASE STUDIES',
    title: 'Aliyah Lead Discovery Agent',
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
    architectureSteps: [
      {
        category: 'LinkedIn Scraping',
        description: 'Pulls posts and profiles matching keyword variants of "Aliyah", scoped to US-based accounts. The raw harvest is intentionally noisy. The next step does the cleaning.',
        tools: [
          { name: 'LinkedIn Scraping API', description: 'Source layer with keyword variants, geography filter, and post plus profile capture.' }
        ]
      },
      {
        category: 'Semantic Classification',
        description: 'The hardest job in the system. "Aliyah" is also a common name, so 80% of raw matches are noise. GPT 4.2 reads each post in full and scores intent on a 1 to 10 scale. Immigration intent vs name mention.',
        tools: [
          { name: 'GPT 4.2', description: 'Per-post semantic classifier with rationale-anchored scoring. Cuts false positives from 80% to under 10%.' }
        ]
      },
      {
        category: 'Email Enrichment Waterfall',
        description: 'For high-score profiles a 6-step waterfall finds verified email. Each provider is tried in sequence until a clean address is captured.',
        tools: [
          { name: 'Apollo.io', description: 'Primary lookup with B2C signal coverage.' },
          { name: 'Hunter.io', description: 'Domain-pattern lookup, fallback for names that do not hit the database.' },
          { name: 'Anymail API', description: 'Final verification pass that confirms the address is deliverable before write-back.' }
        ]
      },
      {
        category: 'Geographic Filtering & Storage',
        description: 'US-only filter applied as the last gate, with 12 months of historical data backfilled. Final output drops into Airtable, ready for the immigration team to action.',
        tools: [
          { name: 'Airtable', description: 'System of record. Leads, score, source post, verified email, classified intent.' },
          { name: 'Python', description: 'Custom filter and historical backfill scripts.' }
        ]
      }
    ],
    tech_stack: ['LinkedIn Scraping API', 'GPT 4.2', 'Apollo.io', 'Hunter.io', 'Airtable', 'Anymail API', 'Python'],
    results: [
      'Reduced false positives from 80%+ to under 10%',
      '12 months of historical data processed',
      'Weekly automated monitoring setup',
      'Reduced qualification time from days to hours'
    ],
    gallery: [
      {
        src: '/case-studies/zoro-aliyah/1.png',
        title: 'LinkedIn Post Scraping Engine',
        caption: 'Apify-backed LinkedIn scraper pulls posts matching every keyword variant of "Aliyah" across US-based profiles, captures text, media, reactions, comments, and author info, and exports to JSON ready for semantic classification.'
      },
      {
        src: '/case-studies/zoro-aliyah/2.png',
        title: 'Email Enrichment Waterfall',
        caption: 'Hunter-backed lookup layer filters high-score profiles by location, industry, and company size, then runs domain pattern search to capture verified emails before the address is confirmed deliverable.'
      }
    ]
  },
  // 11. Teknova Lead Journey
  {
    id: 'instig8-teknova',
    category: 'INSTIG8',
    title: 'Teknova Lead Qualification Agent',
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
    architectureSteps: [
      {
        category: '6-Stage AI Classification',
        description: 'Each company runs through six classification stages. Modality (small molecule, biologic, cell therapy), pipeline stage, manufacturing footprint, and product fit. Every stage outputs a confidence score, not a guess.',
        tools: [
          { name: 'GPT 4.2', description: 'Runs each classification stage with rationale, scoped to biotech ontology.' },
          { name: 'Clay', description: 'Pulls the firmographic and technographic context that GPT classifies against.' }
        ]
      },
      {
        category: 'Conditional Email Recovery',
        description: 'When a primary email lookup fails the system falls through a conditional waterfall. Each provider is invoked only if the prior one missed. Pay only when needed.',
        tools: [
          { name: 'Apollo.io', description: 'First-pass lookup that handles the bulk.' },
          { name: 'LeadMagic', description: 'Second-pass for names Apollo misses.' },
          { name: 'Enrichley', description: 'Final-pass deep enrichment for high-value misses.' }
        ]
      },
      {
        category: 'Campaign Segmentation',
        description: 'Qualified companies are bucketed by modality, so each campaign hits the right product set with the right scientific framing. No mass blast.',
        tools: [
          { name: 'N8N', description: 'Routes companies into modality-specific campaigns based on classifier output.' },
          { name: 'Clay', description: 'Segment-aware enrichment per modality bucket.' }
        ]
      },
      {
        category: 'Unified Data Hub',
        description: 'Every classification, contact, and campaign lives in one Airtable. Sales sees the science, the contact, and the recommendation in a single record.',
        tools: [
          { name: 'Airtable', description: 'System of record. Companies, contacts, classifications, campaigns, replies.' }
        ]
      }
    ],
    tech_stack: ['Clay', 'Apollo.io', 'N8N', 'Airtable', 'GPT 4.2', 'Enrichley', 'LeadMagic'],
    results: [
      'Automated qualification of 900+ companies',
      'Reduced research time by 95% (30m to automation)',
      'Science-first product recommendations (3 per prospect)',
      'Revenue-preservation email stack'
    ],
    gallery: [
      {
        src: '/case-studies/instig8-teknova/1.png',
        title: 'Biotech Qualification Database',
        caption: 'Per-contact view of every qualified prospect: title, modality (Gene Therapy, mAbs), emerging themes (Custom GMP, Buffers and Reagents), company segment (Large Biopharma, CMO/CDMO), and pipeline stage flagged per row, ready for product matching.'
      },
      {
        src: '/case-studies/instig8-teknova/2.png',
        title: 'AAV Workflow Email Templates',
        caption: 'Modality-specific outreach templates with version control (Long / Short / V-A / V-B) and dynamic placeholders for company name, contact name, and rep assignment by region. Same offer framed for the right pipeline stage.'
      }
    ]
  },
  // 12. Ambrosia Email Automation
  {
    id: 'instig8-ambrosia',
    category: 'INSTIG8',
    title: 'Ambrosia Email Segmentation Agent',
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
    architectureSteps: [
      {
        category: 'Segment Definition',
        description: '7 segments defined as queryable Airtable views. Both static (snapshots) and dynamic (recompute on send). Marketing edits a view, the campaign auto-updates.',
        tools: [
          { name: 'Airtable', description: 'Holds segment definitions, exclusion rules, and campaign history. Single source of truth.' }
        ]
      },
      {
        category: 'CSV Export & Beehiiv Sync',
        description: 'One-click export per segment. The export auto-applies cross-segment exclusions so the same person never gets the same email twice from a different list.',
        tools: [
          { name: 'Make.com', description: 'Orchestrates Airtable to CSV to Beehiiv sync with exclusion logic baked in.' },
          { name: 'Beehiiv', description: 'Email send platform with the imported segment as the active list.' }
        ]
      },
      {
        category: 'Post-send Tagging',
        description: 'After a send, every recipient is tagged in Airtable with campaign, open, and click status. Future sends use those tags as auto-exclusions or amplification triggers.',
        tools: [
          { name: 'Beehiiv', description: 'Returns engagement events to the workflow.' },
          { name: 'Make.com', description: 'Writes the per-contact engagement tags back into Airtable.' }
        ]
      },
      {
        category: 'Template Duplication',
        description: 'New campaigns clone from a structured template. Segment, exclusions, copy slots, tagging rules. Non-technical staff launch in under 20 minutes.',
        tools: [
          { name: 'Airtable', description: 'Template library plus duplication action that bootstraps a new campaign with one click.' }
        ]
      }
    ],
    tech_stack: ['Airtable', 'Beehiiv', 'Make.com'],
    results: [
      'Reduced campaign setup from 4 hours to 20 mins',
      'Automated 7 unique customer segments',
      'Eliminated duplicate sends via auto-exclusion',
      'Zero-code operation for non-technical staff'
    ],
    gallery: [
      {
        src: '/case-studies/instig8-ambrosia/1.png',
        title: 'Customer Segmentation Engine',
        caption: 'Beehiiv segment dashboard wired to Airtable: subscribers tagged across 7 cohorts (Bulk Buyers, Loyal Customers, Dormant Customers, First Time Buyers, One-Time Buyers, High Spenders, Deal Hunters) with live open and click metrics per segment.'
      },
      {
        src: '/case-studies/instig8-ambrosia/2.png',
        title: 'Segment-Specific Post Library',
        caption: 'Every weekly campaign is composed once, then auto-routed to the right segment ("Let\'s make it a mango moment" for Dormant Customers, "Big cravings, big celebrations" for Bulk Buyers, "Big flavors. Sweet deals." for Deal Hunters).'
      },
      {
        src: '/case-studies/instig8-ambrosia/3.png',
        title: 'Personalized Newsletter Send',
        caption: 'Final sent newsletter rendered per recipient: name token resolved, the prior bestseller list pulled from purchase history, and a segment-specific 10% discount stitched in for the Loyal Customers cohort.'
      }
    ]
  },
  // 13. Automated Lead Intake and Conversion System
  {
    id: 'personal-bcg',
    category: 'PERSONAL',
    title: 'Voice AI Lead Intake Agent',
    subtitle: 'End-to-end Voice AI & CRM automation',
    client: 'Immigration and Financial Services Consultancy (BCG Immigration Consultancy / Insurelife Financial Group)',
    role: 'AI Engineer',
    impact_summary: 'Every new lead called by AI within minutes. Discovery calls booked with zero admin.',
    tags: ['Retell AI', 'Chatling', 'Make.com', 'GoHighLevel CRM'],
    context: 'Dr. Charanjit S Kalra, a former ENT surgeon turned insurance advisor, needed to modernize his digital presence and automate lead handling for insurance and immigration services.',
    problem: 'New leads waited hours for a callback. No system to respond instantly, qualify the prospect, or book a discovery call without manual follow-up. Outside business hours leads went cold. Consultants burned time on unqualified calls.',
    solution: 'Every form submission in GoHighLevel triggers an outbound AI voice call within minutes. The voice agent qualifies the lead, answers initial questions, and books a discovery call into the consultant calendar via Cal.com. A website chatbot handles inbound FAQs 24/7. Make.com connects the entire flow and syncs activity back into GoHighLevel.',
    architecture: [
      'GoHighLevel form submission triggers automated outbound AI voice call to new lead',
      'AI voice agent qualifies the prospect and converts to discovery call booking via Cal.com',
      'AI chatbot on website handling inbound FAQs and service queries 24/7',
      'Make.com workflow connecting form, voice agent, chatbot, and CRM in real time',
      'GoHighLevel CRM receiving all lead data, call outcomes, and bookings automatically'
    ],
    architectureSteps: [
      {
        category: 'Form Submission Trigger',
        description: 'A new form fill on the website lands in GoHighLevel and immediately fires the outbound flow. No human in the loop, no SLA latency.',
        tools: [
          { name: 'GoHighLevel CRM', description: 'Form ingestion plus the trigger event that kicks off everything downstream.' },
          { name: 'Hostinger', description: 'Hosts the website and form layer.' }
        ]
      },
      {
        category: 'Outbound AI Voice Call',
        description: 'Within minutes a Retell AI voice agent calls the prospect, qualifies them on insurance vs immigration, answers initial questions, and books a discovery call. Voice, not text.',
        tools: [
          { name: 'Retell AI', description: 'Outbound voice agent with a Dr. Kalra-trained persona, qualification script, and Cal.com handoff.' },
          { name: 'OpenAI', description: 'Powers the agent reasoning and dynamic response generation mid-call.' },
          { name: 'Cal.com', description: 'Live calendar that the voice agent books against in real time.' }
        ]
      },
      {
        category: 'Inbound AI Chatbot',
        description: 'For visitors not ready to fill a form, a website chatbot handles FAQs, service queries, and routes interested prospects into the same intake flow. 24/7.',
        tools: [
          { name: 'Chatling', description: 'Website chatbot with the same knowledge base as the voice agent. Routes hot leads back into the form trigger.' }
        ]
      },
      {
        category: 'Workflow Orchestration',
        description: 'One Make.com scenario binds form, voice agent, chatbot, calendar, and CRM. State transitions are atomic, so no half-saved leads.',
        tools: [
          { name: 'Make.com', description: 'Central orchestration scenario across every subsystem.' },
          { name: 'Gamma.app', description: 'Auto-generates the post-call recap deck for the consultant before the discovery call.' }
        ]
      },
      {
        category: 'CRM Sync',
        description: 'Every form, call, transcript, and booking writes back to GoHighLevel in real time. The consultant opens one record and sees the full lead history.',
        tools: [
          { name: 'GoHighLevel CRM', description: 'Final system of record. Leads, calls, bookings, pipeline stage.' }
        ]
      }
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
    title: 'User Discovery Feedback Agent',
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
    architectureSteps: [
      {
        category: 'Calendly & Fireflies Capture',
        description: 'Discovery calls auto-scheduled via Calendly. Fireflies joins each call and produces a clean transcript the moment the call ends. No manual upload.',
        tools: [
          { name: 'Calendly', description: 'Booking layer with auto-injected Fireflies link per meeting.' },
          { name: 'Fireflies AI', description: 'Records, transcribes, and stores every call. Output drives the next stage.' }
        ]
      },
      {
        category: 'AI Feedback Categorization',
        description: 'GPT 5.2 reads each transcript and tags every comment as Issue, Feature Request, Pain Point, or Praise, with source quote and severity. Consistent classification across hundreds of calls.',
        tools: [
          { name: 'GPT 5.2', description: 'Categorisation pass. Returns structured JSON with category, severity, and source-quote citation.' }
        ]
      },
      {
        category: 'Airtable Database',
        description: 'Every classified item lands in Airtable as a discrete record, linked to the call and the user. Product team queries by category, not by who-said-what-when.',
        tools: [
          { name: 'Airtable', description: 'System of record for every classified feedback item, with call linkage and user metadata.' }
        ]
      },
      {
        category: 'Jira Ticket Creation',
        description: 'Issues and feature requests above severity threshold auto-create Jira tickets with the source quote pre-filled. Slack notifies the owning PM within 24 hours of the call.',
        tools: [
          { name: 'Make.com', description: 'Routes Airtable rows into Jira ticket creation with field mapping.' },
          { name: 'Zapier', description: 'Slack notification path for tickets needing immediate triage.' },
          { name: 'Jira', description: 'Final ticket destination with the full context attached.' },
          { name: 'Slack', description: 'Async notification surface for the product team.' }
        ]
      }
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
    title: 'LinkedIn Content Discovery Agent',
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
    architectureSteps: [
      {
        category: 'Automated Source Scraping',
        description: 'Daily scrapes of high-signal LinkedIn voices and YouTube channels in finance and tech. Captures posts, comments, and transcripts. The raw input for the relevancy layer.',
        tools: [
          { name: 'Apify API', description: 'LinkedIn post and comment scraper, scheduled daily.' },
          { name: 'YouTube API', description: 'Channel-level video pull with transcript capture.' }
        ]
      },
      {
        category: 'AI Relevancy Scoring',
        description: 'GPT 5.2 scores every captured item against the brand strategic content pillars on a 0 to 100 scale. Only 70+ scores advance. The rest are archived.',
        tools: [
          { name: 'GPT 5.2', description: 'Relevancy classifier with rationale per score. Threshold is configurable per pillar.' }
        ]
      },
      {
        category: 'Multi-variant Draft Generation',
        description: 'For every high-score topic, GPT 5.2 produces 3 draft variants in the brand voice with different hooks and angles. Operator picks the one that fits the moment.',
        tools: [
          { name: 'GPT 5.2', description: 'Draft generator with persona-specific styling and 3-variant output per topic.' }
        ]
      },
      {
        category: 'Kanban Publishing Workflow',
        description: 'Drafts move through Airtable Kanban from Draft to In Review to Approved to Scheduled to Published. Slack notifications fire at each stage so nothing stalls.',
        tools: [
          { name: 'Airtable', description: 'Kanban board with status fields and per-stage automation.' },
          { name: 'Make.com', description: 'Workflow glue that fires Slack on stage transitions and handles the publish hop.' },
          { name: 'Slack', description: 'Notification surface for review and approval prompts.' }
        ]
      }
    ],
    tech_stack: ['Make.com', 'Airtable', 'GPT 5.2', 'Slack', 'Apify API', 'YouTube API'],
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
    title: 'Patent Intelligence Agent',
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
    architectureSteps: [
      {
        category: 'Patent API Retrieval',
        description: 'Scheduled patent fetches from the Patent API. Each run pulls a configurable batch (default 10 patents) scoped to biotech CPC codes and assignee filters.',
        tools: [
          { name: 'Patent API', description: 'Source layer. Patent metadata, claims, inventor list, assignee data.' },
          { name: 'N8N', description: 'Schedules and paginates the retrieval, normalises responses, and stages records for dedup.' }
        ]
      },
      {
        category: 'Duplicate Detection',
        description: 'Every patent checked against existing records by patent number, application number, and a fuzzy match on title. Duplicates skip the rest of the pipeline.',
        tools: [
          { name: 'N8N', description: 'Dedup logic with multi-field check before any write to Airtable.' }
        ]
      },
      {
        category: 'Entity Linking',
        description: 'Patent, Inventor, and Assignee linked across three Airtable tables. Editing an inventor name once propagates everywhere. No orphan records.',
        tools: [
          { name: 'Airtable', description: 'Three linked tables (Patents, Inventors, Assignees) with relational integrity preserved on every write.' }
        ]
      },
      {
        category: 'Structured Claims Formatting',
        description: 'Raw claim text parsed into numbered claims with dependency relationships preserved (e.g., "claim 5 depends on claim 1"). Searchable by claim number and dependency tree.',
        tools: [
          { name: 'N8N', description: 'Claim parser and structurer. Outputs JSON that maps cleanly to the claim table.' }
        ]
      }
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
    title: 'Foresight Content Discovery Agent',
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
    architectureSteps: [
      {
        category: 'Profile & Keyword Monitoring',
        description: 'Continuous scrape of high-signal LinkedIn profiles and YouTube channels in Foresight domain. Keyword filters narrow the harvest to topics the brand cares about.',
        tools: [
          { name: 'Apify API', description: 'LinkedIn profile and post scraper, scheduled daily.' },
          { name: 'YouTube API', description: 'Channel monitoring and transcript pull for long-form sources.' }
        ]
      },
      {
        category: 'AI Relevancy Classification',
        description: 'GPT 5.2 scores each captured item against Foresight content pillars. 70+ score advances, everything else is logged and dropped.',
        tools: [
          { name: 'GPT 5.2', description: 'Relevancy classifier with per-pillar thresholding.' }
        ]
      },
      {
        category: 'Persona-specific Draft Generation',
        description: '3 draft variants per high-score topic, generated in the operator voice with different hooks and angles. Persona profile controls voice rules across every draft.',
        tools: [
          { name: 'GPT 5.2', description: 'Draft generator with persona prompt scaffolding and 3-variant output per topic.' }
        ]
      },
      {
        category: 'Kanban Publishing Workflow',
        description: 'Drafts flow through Airtable Kanban (Draft, Review, Approved, Scheduled). Slack pings the operator when something needs eyes.',
        tools: [
          { name: 'Airtable', description: 'Kanban board with automation rules per status.' },
          { name: 'Make.com', description: 'Workflow orchestration across scrape, classify, draft, and publish.' },
          { name: 'Slack', description: 'Notification surface for status changes.' }
        ]
      }
    ],
    tech_stack: ['Make.com', 'Airtable', 'GPT 5.2', 'Slack', 'YouTube API', 'Apify API'],
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
    title: 'Warm Intro Outreach Agent',
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
    architectureSteps: [
      {
        category: 'Apollo Lead Scraping',
        description: 'Apollo.io leads pulled via Apify, scoped to ICP filters. Output is the raw target set for warm-intro discovery.',
        tools: [
          { name: 'Apify', description: 'Wraps Apollo.io scraping. Handles auth, pagination, and dedup.' },
          { name: 'Apollo.io', description: 'Source database for B2B contact and firmographic data.' }
        ]
      },
      {
        category: 'Mutual Connection Mapping',
        description: 'For every target, Texau resolves 1st-degree mutual connections to the operator. Only leads with at least one warm path forward are kept.',
        tools: [
          { name: 'Texau', description: 'LinkedIn 1st-degree mutual connection lookup at scale.' },
          { name: 'Airtable', description: 'Stores the connection map per lead. Who connects to whom.' }
        ]
      },
      {
        category: 'Multi-stage Email Sequence',
        description: '4-stage outreach cadence (Stage 0 introduction request through Stage 3 follow-up). Token personalization injects the actual mutual connection name into every send.',
        tools: [
          { name: 'Make.com', description: 'Sequence engine. Fires stage transitions on time and on reply.' },
          { name: 'Airtable', description: 'Per-lead state machine. Current stage, last action, next action timestamp.' }
        ]
      },
      {
        category: 'Webhook Response Handling',
        description: 'Replies come back via webhook into Make.com, which classifies positive vs negative and routes the lead to the right next state. No replies fall through the cracks.',
        tools: [
          { name: 'Make.com', description: 'Webhook listener, reply classifier, and state transition writer.' },
          { name: 'Airtable', description: 'Final reply log per lead, with full sequence history attached.' }
        ]
      }
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
