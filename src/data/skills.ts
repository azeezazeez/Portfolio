import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'LANGUAGES',
    description: 'Languages used across backend services and web applications.',
    skills: [
      { name: 'Java', description: 'Backend development, OOP, collections, streams' },
      { name: 'SQL', description: 'Relational queries and query optimization' },
      { name: 'JavaScript', description: 'Frontend logic for React applications' },
      { name: 'TypeScript', description: 'Typed frontends for full-stack projects' },
      { name: 'HTML', description: 'Semantic page structure' },
      { name: 'CSS', description: 'Responsive layouts and styling' },
    ],
  },
  {
    id: 'backend',
    title: 'BACKEND',
    description: 'Spring-based services, secure authentication, and REST API design.',
    skills: [
      { name: 'Spring Boot', description: 'REST services, layered architecture, validation' },
      { name: 'Spring MVC', description: 'Controllers, request handling, exception handling' },
      { name: 'Spring Security', description: 'Authentication, authorization, RBAC' },
      { name: 'Spring Data JPA', description: 'Repositories and ORM-based data access' },
      { name: 'Hibernate', description: 'ORM mapping and persistence' },
      { name: 'Spring Session', description: 'Redis-backed session management' },
      { name: 'REST APIs', description: 'API design, JSON, request validation' },
      { name: 'JWT', description: 'Token-based authentication' },
      { name: 'OAuth 2.0', description: 'Google OAuth sign-in' },
      { name: 'RBAC', description: 'Role-based authorization' },
    ],
  },
  {
    id: 'databases',
    title: 'DATABASES & CACHING',
    description: 'Relational persistence and caching for faster API responses.',
    skills: [
      { name: 'PostgreSQL', description: 'Schema design and query optimization' },
      { name: 'MySQL', description: 'Relational database' },
      { name: 'Redis', description: 'Caching and session storage' },
    ],
  },
  {
    id: 'frontend',
    title: 'FRONTEND',
    description: 'React interfaces that connect to the Java backends.',
    skills: [
      { name: 'React', description: 'Component-based UIs and hooks' },
      { name: 'TypeScript', description: 'Typed components and API contracts' },
      { name: 'JavaScript', description: 'Browser-side application logic' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & INTEGRATION',
    description: 'LLM API integration and API documentation.',
    skills: [
      { name: 'Groq API', description: 'LLM chat integration' },
      { name: 'Google Gemini API', description: 'Multi-model chat integration' },
      { name: 'RAG', description: 'Retrieval-Augmented Generation' },
      { name: 'OpenAPI', description: 'API specifications' },
      { name: 'Swagger', description: 'Interactive API documentation' },
    ],
  },
  {
    id: 'tools',
    title: 'DEVOPS & TOOLS',
    description: 'Containerization, CI/CD, and everyday developer tooling.',
    skills: [
      { name: 'Docker', description: 'Containerized deployments' },
      { name: 'GitHub Actions', description: 'CI/CD pipelines' },
      { name: 'CI/CD', description: 'Automated build and deploy workflows' },
      { name: 'Git', description: 'Version control' },
      { name: 'GitHub', description: 'Collaboration and code hosting' },
      { name: 'Postman', description: 'API testing and debugging' },
    ],
  },
];
