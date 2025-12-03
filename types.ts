export interface Project {
  id: string;
  category: 'ZORO CORP' | 'INSTIG8' | 'FREEDOM WITH AI' | 'PERSONAL' | 'OTHER';
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
  tech_stack: string[];
  results: string[];
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