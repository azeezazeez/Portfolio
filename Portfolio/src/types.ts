export interface PersonalInfo {
  name: string;
  role: string;
  badge: string;
  headlineMain: string;
  headlineSub: string;
  bioIntro: string;
  bioDetailed: string[];
  location: string;
  interests: string;
  currentlyLearning: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl: string;
  availability: {
    status: boolean;
    text: string;
  };
}

export interface SkillItem {
  name: string;
  description: string;
  level?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  extendedDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  theme: 'rose' | 'blue' | 'white';

  /*
   * Real project screenshot.
   *
   * This can be a Google Drive image URL or a local
   * path such as /projects/zyphora.png.
   */
  imageUrl: string;

  metrics?: string;

  /*
   * Kept for compatibility with the existing project
   * structure and any other component that may use it.
   */
  preview: {
    type: 'ai-chat' | 'task-engine' | 'dashboard' | 'api-search';
    badge: string;
  };
}
