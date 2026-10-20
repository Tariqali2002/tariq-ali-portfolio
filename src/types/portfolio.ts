export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  cin?: string;
  duration: string;
  tenureLength: string;
  location: string;
  landmark?: string;
  type: "Full-Stack & Mobile" | "Frontend" | "Technical Support" | "Apprenticeship" | "Trainee";
  highlights: string[];
  technologies: string[];
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ArchitectureDeliverable {
  id: string;
  title: string;
  organization: string;
  badge: string;
  summary: string;
  architectureLayers: {
    layer: string;
    tech: string;
    detail: string;
  }[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    subHeadline: string;
    location: string;
    availability: string[];
    email: string;
    phone: string;
    linkedin: string;
    resumeUrl: string;
    summary: string;
    careerGoal: string;
  };
  skills: SkillCategory[];
  experience: ExperienceItem[];
  deliverables: ArchitectureDeliverable[];
  education: EducationItem[];
  certifications: CertificationItem[];
}
