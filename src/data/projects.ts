import { ProjectItem } from '../types';

export const projectList: ProjectItem[] = [
  {
    id: 'project-1',
    number: 'PROJECT 01',

    title: 'ZYPHORA E-COMMERCE',

    tagline: 'Full-Stack E-Commerce Web Application',

    description:
      'A full-stack e-commerce application with JWT authentication, role-based authorization, email OTP verification, and 30+ REST APIs built on Spring Boot, PostgreSQL, and React.',

    extendedDescription:
      'Developed a full-stack e-commerce application with JWT authentication, role-based authorization, email OTP verification, and secure password management. Built 30+ REST APIs for authentication, products, cart, wishlist, orders, customer management, and admin operations, with validation, exception handling, and PostgreSQL persistence.',

    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Docker',
    ],

    githubUrl: 'https://github.com/azeezazeez/Zyphora-Ecommerce',

    liveUrl: 'https://zyphora-cart.vercel.app',

    theme: 'rose',

    // Your original Google Drive sharing URL
    imageUrl:
      'https://drive.google.com/file/d/1QaahXnUtL9Zg8BaMu1OTKQiEov_ZfKQg/view?usp=sharing',

    metrics: '30+ REST APIs • JWT Authentication • Role-Based Authorization',

    preview: {
      type: 'dashboard',
      badge: 'Full-Stack E-Commerce',
    },
  },

  {
    id: 'project-2',
    number: 'PROJECT 02',

    title: 'TWINKLE',

    tagline: 'Multi-Model AI Platform',

    description:
      'A full-stack AI chatbot with session-based authentication, Redis-backed sessions, email OTP, Google OAuth, and 25+ REST APIs, integrating Groq and Google Gemini with RAG.',

    extendedDescription:
      'Designed and deployed a full-stack AI chatbot with HTTP session-based authentication, Redis-backed session management, email OTP verification, Google OAuth, and password recovery. Built 25+ REST APIs for authentication, chat sessions, conversation history, AI model selection, chat search, file uploads, profile analytics, and real-time Live Talk. Integrated Groq and Google Gemini APIs to support multi-model chat, using Retrieval-Augmented Generation (RAG).',

    technologies: [
      'Java',
      'Spring Boot',
      'Spring Session',
      'Redis',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Groq API',
      'Google Gemini API',
      'RAG',
    ],

    githubUrl: 'https://github.com/azeezazeez/Twinkle-AI',

    liveUrl: 'https://twinkleai.vercel.app',

    theme: 'blue',

    // Your original Google Drive sharing URL
    imageUrl:
      'https://drive.google.com/file/d/1BfZE71L9qDvT36OtwhHZpxsYt_NeFsPu/view?usp=sharing',

    metrics: '25+ REST APIs • Multi-Model AI • Redis Sessions',

    preview: {
      type: 'ai-chat',
      badge: 'AI Assistant',
    },
  },
];
