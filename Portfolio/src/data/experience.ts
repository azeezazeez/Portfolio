import { ExperienceItem } from '../types';

export const experienceList: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'JAVA BACKEND DEVELOPER',
    company: 'V Cube Software Solutions',
    period: '2025 — 2026',
    location: 'Hyderabad, Telangana',
    isCurrent: false,
    description: 'Leading the development of core backend services, robust REST APIs, AI integrations, and modern web applications with strict availability targets.',
    responsibilities: [
      'Designed and deployed high-throughput REST APIs using Spring Boot and Java, achieving sub-40ms P95 latency.',
      'Integrated Gemini and Groq model inference into customer-facing document analysis workflows with streaming responses.',
      'Collaborated closely with product designers to implement clean, accessible React interfaces with subtle micro-interactions.'
    ],
    techStack: ['Java', 'Spring Boot', 'REST APIs', 'Gemini', 'React', 'TypeScript']
  },
];
