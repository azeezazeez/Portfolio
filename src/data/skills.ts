import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'LANGUAGES',
    description: 'Foundational syntax and strongly-typed languages for robust engineering.',
    skills: [
      { name: 'Java', description: 'Enterprise backend development, JVM performance, concurrency' },
      { name: 'TypeScript', description: 'Static type systems, full-stack contracts, scalable apps' },
      { name: 'JavaScript', description: 'Modern ES6+ syntax, asynchronous programming, DOM runtime' },
      { name: 'SQL', description: 'Relational queries, index optimization, schema migrations' },
      { name: 'HTML', description: 'Semantic structure, accessibility standards, web standards' },
      { name: 'CSS', description: 'Responsive layouts, modern CSS variables, CSS architecture' }
    ]
  },
  {
    id: 'backend',
    title: 'BACKEND',
    description: 'Server frameworks, distributed services, and resilient API contracts.',
    skills: [
      { name: 'Spring Boot', description: 'Microservices, dependency injection, production services' },
      { name: 'Spring MVC', description: 'Controller orchestration, request filters, validation' },
      { name: 'REST APIs', description: 'Idempotent endpoint design, status mapping, OpenAPI documentation' }
    ]
  },
  {
    id: 'frontend',
    title: 'FRONTEND',
    description: 'Declarative component libraries, state management, and modern styling.',
    skills: [
      { name: 'React', description: 'Component lifecycles, hooks, virtual DOM optimization' },
      { name: 'Next.js', description: 'SSR/SSG hybrid rendering, API routes, routing architecture' },
      { name: 'Tailwind CSS', description: 'Utility-first styling, design system tokens, responsive layouts' }
    ]
  },
  {
    id: 'tools',
    title: 'TOOLS',
    description: 'Developer environments, version control, and debugging toolchains.',
    skills: [
      { name: 'Git', description: 'Branching strategies, history rebasing, atomic commits' },
      { name: 'GitHub', description: 'CI/CD actions, pull request workflows, package management' },
      { name: 'Postman', description: 'Automated test collections, mock servers, API verification' },
      { name: 'IntelliJ IDEA', description: 'Deep JVM profiling, refactoring suites, server debugging' }
    ]
  },
  {
    id: 'ai',
    title: 'AI',
    description: 'Next-generation foundation models, ultra-low latency inference, and reasoning pipelines.',
    skills: [
      { name: 'Gemini', description: 'Multimodal processing, function calling, long-context reasoning' },
      { name: 'Groq', description: 'Ultra-fast LPU inference, streaming LLM outputs' },
      { name: 'AI APIs', description: 'Embeddings generation, semantic search, vector databases' },
      { name: 'LLM Integrations', description: 'Prompt engineering, structured outputs, agent loops' }
    ]
  }
];
