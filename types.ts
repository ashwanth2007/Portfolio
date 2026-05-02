export interface ArchitectureTool {
  name: string;
  description?: string;
}

export interface ArchitectureStep {
  category: string;
  description: string;
  parallel?: boolean;
  tools?: ArchitectureTool[];
}

export interface Project {
  id: string;
  category: 'CASE STUDIES' | 'INSTIG8' | 'FREEDOM WITH AI' | 'PERSONAL' | 'OTHER';
  title: string;
  subtitle: string;
  client: string;
  role: string;
  impact_summary: string;
  tags: string[];
  context: string;
  problem: string;
  solution: string;
  architecture: string[];
  architectureSteps?: ArchitectureStep[];
  tech_stack: string[];
  results: string[];
  gallery?: { src: string; title: string; caption?: string }[];
}

export interface Experience {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
  type: 'education' | 'internship' | 'work';
}

export interface ToolCategory {
  name: string;
  tools: string[];
}

export interface Testimonial {
  name: string;
  image: string;
  testimonial: string;
  link: string;
  headline: string;
  stats: string[];
}