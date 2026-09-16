import { ProjectItem } from '../types';

export const projectList: ProjectItem[] = [
  {
    id: 'project-1',
    number: 'PROJECT 01',
    title: 'ZYPHORA E-COMMERCE',
    tagline: 'Full-Stack E-Commerce Platform',

    description:
      'A full-stack e-commerce platform built with Spring Boot and React, featuring secure authentication, role-based authorization, product management, cart and order workflows.',

    extendedDescription:
      'Developed a complete e-commerce system using Java, Spring Boot, React, and PostgreSQL. Implemented JWT-based authentication and role-based authorization for customers and administrators. Designed RESTful APIs for products, carts, orders, users, and administrative operations, with a modular backend architecture and optimized database queries for reliable application performance.',

    technologies: [
      'Java',
      'Spring Boot',
      'React',
      'PostgreSQL',
      'JWT'
    ],

    githubUrl:
      'https://github.com/azeezazeez/Zyphora-Ecommerce.git',

    liveUrl:
      'https://zyphora-cart.vercel.app',

    theme: 'rose',

    imageUrl:
      'https://drive.google.com/uc?export=view&id=1jfkDXIh-7LwFBTNeor8HRK2GNkcIRV17',

    metrics:
      'JWT Authentication • Role-Based Authorization',

    preview: {
      type: 'dashboard',
      badge: 'Full-Stack E-Commerce'
    }
  },

  {
    id: 'project-2',
    number: 'PROJECT 02',
    title: 'TWINKLE AI',
    tagline: 'AI-Powered Conversational Assistant',

    description:
      'An AI-powered chatbot application built with Java and Spring Boot, integrating Groq AI for intelligent natural-language conversations and Redis for efficient data handling.',

    extendedDescription:
      'Developed an AI chatbot application using Java and Spring Boot with Groq AI integration for natural-language processing and intelligent responses. Designed RESTful APIs to provide seamless communication between the frontend, backend, and AI services. Integrated Redis to improve request handling and application efficiency while maintaining a scalable backend architecture.',

    technologies: [
      'Java',
      'Spring Boot',
      'Groq AI',
      'Redis'
    ],

    githubUrl:
      'https://github.com/azeezazeez/Twinkle-AI',

    liveUrl:
      'https://twinkleai.vercel.app',

    theme: 'blue',

    imageUrl:
      'https://drive.google.com/uc?export=view&id=1bi6tnT-9wEYB09rf1rvwzzqSl5QoQXIz',

    metrics:
      'AI Integration • Redis Caching',

    preview: {
      type: 'ai-chat',
      badge: 'AI Assistant'
    }
  }
];
