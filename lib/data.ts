import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'classcraft-plataforma-educativa',
    title: 'Classcraft - Plataforma Educativa',
    description:
      'Aplicacion web inspirada en la gamificacion educativa para mejorar la motivacion estudiantil.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    technologies: ['PHP', 'JavaScript', 'MySQL'],
    featured: true,
  },
  {
    slug: 'proyecto-mundial',
    title: 'Proyecto del Mundial',
    description:
      'Aplicacion web sobre el mundial que permite crear y gestionar predicciones globales y por salas para los partidos del torneo.',
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Nest.js', 'Next.js', 'Tailwind CSS'],
    featured: true,
  },
  {
    slug: 'proyecto-integrador-gestion-academica',
    title: 'Proyecto Integrador - Gestion Academica',
    description:
      'Sistema con IA para gestion de usuarios y generacion de horarios de estudio personalizados.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Spring Boot', 'Python', 'IA'],
    featured: true,
  },
];

export const personalInfo = {
  name: 'Anderson Ramos',
  title: 'Estudiante de Diseno y Desarrollo de Software',
  description:
    'Estudiante de Tecsup enfocado en el desarrollo de aplicaciones moviles y sistemas web.',
  email: 'ramosimananderson@gmail.com',
  github: 'https://github.com/Anderson-Ramos-Iman',
  linkedin: 'https://linkedin.com/in/anderson-ramos-iman/',
  siteUrl: 'https://tuportafolio.com',
  avatar: '/profile.png',
};
