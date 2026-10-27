import { ExperienceItem } from '../types';

export const experienceList: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'JAVA DEVELOPER INTERN',
    company: 'V Cube Software Solutions',
    period: 'Aug 2025 — Feb 2026',
    location: 'Hyderabad, Telangana',
    isCurrent: false,
    description:
      'Built and documented secure Spring Boot REST APIs, backed by PostgreSQL and Redis caching, and supported Docker-based deployments through CI/CD pipelines.',
    responsibilities: [
      'Developed 50+ REST APIs using Java, Spring Boot, and Spring Security, with authentication, role-based authorization, and request validation.',
      'Built the data layer with JPA, Hibernate, and PostgreSQL, and optimized queries to improve performance.',
      'Implemented Redis caching, reducing API response time by 30%.',
      'Debugged and resolved backend and API defects using Postman, improving service reliability.',
      'Documented APIs with Swagger/OpenAPI and supported Docker-based deployments through GitHub Actions CI/CD pipelines.',
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JPA / Hibernate',
      'PostgreSQL',
      'Redis',
      'Docker',
      'GitHub Actions',
      'Swagger',
    ],
  },
];
