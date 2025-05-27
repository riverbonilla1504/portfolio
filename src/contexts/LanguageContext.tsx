import React, { createContext, useState, useEffect, useCallback, ReactNode } from "react";

// Definición de tipos para las traducciones
export interface Translations {
  [key: string]: {
    [key: string]: string | string[] | any;
  };
}

// Interfaz para el contexto de idioma
interface LanguageContextType {
  translations: Translations;
  currentLanguage: string;
  t: (key: string) => any;
  toggleLanguage: () => void;
}

// Traducciones disponibles
const translations: Translations = {
  en: {
    // Header
    portfolio: 'River Bonilla',
    home: 'Home',
    projects: 'Projects',
    about: 'About me',
    contact: 'Contact',

    // Hero Section
    greeting: "Hi, I'm",
    role: "Software Engineering Student",
    'hero.description': "Backend developer with skills in Java, Python, Node.js and experience in diverse projects.",
    'view.projects': "View Projects",
    'contact.me': "Contact Me",
    'profile.image.alt': "Profile picture",

    // Projects Section
    'my.projects': 'My Projects',
    'explore.portfolio': 'Explore my technical projects',
    'projects.description': 'Here you will find a selection of my most challenging projects, showcasing my backend development skills.',
    'fullstack.projects': 'Full-stack projects with modern architectures',
    'technical.solutions': 'Innovative and scalable technical solutions',
    'clean.code': 'Clean and maintainable code with best practices',
    'user.experience': 'Focus on user experience and design',
    'projects.count': 'Projects',
    'technologies.count': 'Technologies',
    'see.project': 'View Details',
    'view.code': 'View Code',
    'loading.site': 'Loading details...',
    'view.live': 'View Details',
    'view.preview': 'View Preview',

    // Projects
    'project1': {
      name: 'LinkedIn-style Platform',
      description: 'REST API platform for professional profiles, connections, messaging and notifications',
      tech: ['Spring Boot', 'MongoDB', 'JWT', 'REST API', 'Azure'],
      features: [
        'RESTful endpoints for profiles, connections, messaging and notifications',
        'Complete documentation: requirements, diagrams, deployment',
        'Security with JWT authentication and roles',
        'Scalable architecture in Azure'
      ]
    },
    'project1.name': 'LinkedIn-style Platform',
    'project1.description': 'REST API platform for professional profiles, connections, messaging and notifications',
    'project1.tech': ['Spring Boot', 'MongoDB', 'JWT', 'REST API', 'Azure'],
    'project1.features': [
      'RESTful endpoints for profiles, connections, messaging and notifications',
      'Complete documentation: requirements, diagrams, deployment',
      'Security with JWT authentication and roles',
      'Scalable architecture in Azure'
    ],
    'project2.name': 'University Platform',
    'project2.description': 'Fullstack system for attendance management with QR codes and certificate generation',
    'project2.tech': ['NestJS', 'React', 'MySQL', 'Azure'],
    'project2.features': [
      'QR-based attendance system and certificate generation',
      'Backend with authentication and CI/CD in GitHub Actions',
      'Scalable architecture in Azure'
    ],
    'project3.name': 'Finance Web App',
    'project3.description': 'Financial management application with AI-powered expense classification and a custom chatbot advisor',
    'project3.tech': ['Next.js', 'Firebase', 'AI', 'Gemini'],
    'project3.features': [
      'Automatic expense classification (>90% accuracy)',
      'Custom chatbot providing financial advice',
      'Responsive design with Tailwind CSS'
    ],

    // About Section
    'about.role': 'Backend Developer',
    'about.tabs.skills': 'Skills & Technologies',
    'about.tabs.experience': 'Project Experience',
    'about.tabs.education': 'Education',
    'about.tabs.interests': 'Interests',
    'about.tabs.aspirations': 'Aspirations',

    // Personal Information
    'about.personal.title': 'River Alejandro Bonilla Florez',
    'about.personal.location': 'Pasto, Colombia',
    'about.personal.phone': '+57 321 971 08 52',
    'about.personal.email': 'riverflorez.04@gmail.com',
    'about.personal.english': 'English: B2',

    // Skills
    'about.skills.backend.title': 'Backend Development',
    'about.skills.backend.items': [
      'Java (Spring Boot)',
      'Python (Django)',
      'Node.js (NestJS)',
      'API REST',
      'JWT Authentication',
      'Access Control',
      'Clean Architecture'
    ],
    'about.skills.frontend.title': 'Frontend Knowledge',
    'about.skills.frontend.items': [
      'React',
      'Next.js',
      'Vue.js',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)'
    ],
    'about.skills.ai.title': 'AI & Automation',
    'about.skills.ai.items': [
      'Chatbot Integration (GPT-3.5, Gemini)',
      'Data Classification with AI',
      'Automated Systems'
    ],
    'about.skills.databases.title': 'Databases',
    'about.skills.databases.items': [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Firebase Firestore'
    ],
    'about.skills.devops.title': 'DevOps & Tools',
    'about.skills.devops.items': [
      'Docker',
      'CI/CD with GitHub Actions',
      'Azure & AWS Deployment',
      'Git & GitHub',
      'VS Code, Postman, Insomnia'
    ],
    'about.skills.architecture.title': 'Software Architecture',
    'about.skills.architecture.items': [
      'SDLC, Technical Documentation',
      'UML Diagrams, User Stories',
      'Object-oriented Design',
      'Design Patterns: MVC, Singleton, Factory',
      'Data Structures: Lists, Trees, Graphs'
    ],

    // Project Experience
    'about.experience.linkedin.title': 'LinkedIn-style Platform',
    'about.experience.linkedin.tech': 'Spring Boot · MongoDB · JWT · API REST · Azure',
    'about.experience.linkedin.description': 'RESTful endpoints for profiles, connections, messaging and notifications. Complete documentation: requirements, diagrams, deployment. Security with authentication JWT and roles.',

    'about.experience.university.title': 'University Platform (Fullstack)',
    'about.experience.university.tech': 'NestJS · React · MySQL · Azure',
    'about.experience.university.description': 'QR-based attendance system and certificate generation. Backend with authentication and CI/CD in GitHub Actions. Scalable architecture in Azure.',

    'about.experience.finance.title': 'Finance Web App',
    'about.experience.finance.tech': 'Next.js · Firebase Firestore/Auth · AI · Chatbot (Gemini)',
    'about.experience.finance.description': 'Automatic expense classification (>90% accuracy). Custom chatbot providing financial advice. Responsive design with Tailwind CSS.',

    'about.experience.iot.title': 'IoT Elevator System',
    'about.experience.iot.tech': 'ESP32 · C++ · Design Patterns · Data Structures',
    'about.experience.iot.description': 'Request control using circular lists and queues. Concurrent logic and Singleton, Facade, Factory patterns.',

    'about.experience.game.title': 'Retro Game in Java',
    'about.experience.game.tech': 'Java · OOP · Movement and Collision Algorithms',
    'about.experience.game.description': 'Inspired by engines like Source. React page for promotion and download.',

    'about.experience.pos.title': 'Bar Management System',
    'about.experience.pos.tech': 'React · Node.js · MySQL',
    'about.experience.pos.description': 'Development and successful sale to two local businesses.',

    'about.experience.hackathon.title': 'Linux World Hackathon',
    'about.experience.hackathon.tech': 'ChatGPT-3.5 · WhatsApp · Backend · Azure',
    'about.experience.hackathon.description': 'WhatsApp chatbot with GPT-3.5. Backend integration for persistence and logic.',

    // Education
    'about.education.software.degree': 'Software Engineering',
    'about.education.software.institution': 'Universidad Cooperativa de Colombia',
    'about.education.software.period': '2022 - Present (5th semester)',
    'about.education.software.description': 'Twice awarded academic scholarship. Focus on software development.',

    'about.education.technical.degree': 'Software Development Technician',
    'about.education.technical.institution': 'SENA',
    'about.education.technical.period': '2023',
    'about.education.technical.description': 'Technical program focused on software development fundamentals.',

    'about.education.ai.degree': 'Machine Learning & AI Certification',
    'about.education.ai.institution': 'Universidad Mariana',
    'about.education.ai.period': '2023',
    'about.education.ai.description': 'Specialized training in machine learning and artificial intelligence concepts.',

    'about.education.frontend1.degree': 'HTML & CSS Course',
    'about.education.frontend1.institution': 'Domestika',
    'about.education.frontend1.period': '2024',
    'about.education.frontend1.description': 'Frontend web development fundamentals.',

    'about.education.excel.degree': 'Advanced Excel Course',
    'about.education.excel.institution': 'Universidad Cooperativa',
    'about.education.excel.period': '2024',
    'about.education.excel.description': 'Advanced spreadsheet skills for data analysis and reporting.',

    // Soft Skills
    'about.softskills.title': 'Soft Skills',
    'about.softskills.items': [
      'Effective communication and teamwork (Scrum)',
      'Adaptability and self-learning',
      'Logical analysis and problem solving',
      'End-user focus and business vision'
    ],

    // Interests
    'about.interests.web.icon': '🌐',
    'about.interests.web.title': 'Web Development',
    'about.interests.web.description': 'Modern web applications and frameworks',

    'about.interests.ai.icon': '🤖',
    'about.interests.ai.title': 'Artificial Intelligence',
    'about.interests.ai.description': 'Machine learning and AI applications',

    'about.interests.mobile.icon': '📱',
    'about.interests.mobile.title': 'Mobile Development',
    'about.interests.mobile.description': 'Cross-platform mobile solutions',

    'about.interests.cloud.icon': '☁️',
    'about.interests.cloud.title': 'Cloud Computing',
    'about.interests.cloud.description': 'Building scalable cloud-native applications',

    // Aspirations
    'about.aspirations.architect.icon': '🚀',
    'about.aspirations.architect.title': 'Software Architect',
    'about.aspirations.architect.description': 'Design robust, scalable systems',

    'about.aspirations.teach.icon': '👨‍🏫',
    'about.aspirations.teach.title': 'Knowledge Sharing',
    'about.aspirations.teach.description': 'Mentor new developers',

    // Aspirations
    'about.aspirations.impact.icon': '🌍',
    'about.aspirations.impact.title': 'Global Impact',
    'about.aspirations.impact.description': 'Contribute to open-source projects',

    'about.aspirations.startup.icon': '💼',
    'about.aspirations.startup.title': 'Tech Entrepreneurship',
    'about.aspirations.startup.description': 'Found an innovative tech startup',

    // Testimonials Section
    'testimonials.title': 'Testimonials',
    'testimonials.ana.name': 'Ana Martínez',
    'testimonials.ana.role': 'CTO at TechSolutions',
    'testimonials.ana.text': 'River demonstrated excellent command of backend technologies during our collaborative project. His code is clean and well-organized.',

    'testimonials.carlos.name': 'Carlos Rodríguez',
    'testimonials.carlos.role': 'Lead Developer at WebApp',
    'testimonials.carlos.text': 'Working with River was a rewarding experience. His skills in Java and Spring Boot are exceptional, and he always meets deadlines.',

    'testimonials.laura.name': 'Laura Gómez',
    'testimonials.laura.role': 'Project Manager at DataTech',
    'testimonials.laura.text': 'River not only has solid technical knowledge but also excellent communication and teamwork skills.',

    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.subtitle': "Let's discuss technology opportunities",
    'contact.description': "I'm interested in backend development opportunities and technical challenges. Feel free to reach out!",
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message.',
    'contact.or': 'Or connect via',
    'contact.sending': 'Sending...',
    'contact.info.location': 'Pasto, Colombia',
    'contact.info.phone': '+57 321 971 08 52',
    'contact.info.email': 'riverflorez.04@gmail.com',

    // Footer
    'footer.description': 'Software Engineering student showcasing backend development skills.',
    'footer.sections': 'Sections',
    'footer.contact': 'Contact',
    'footer.location': 'Pasto, Colombia',
    'footer.rights': 'All rights reserved.',

    // UI
    'switch.lang': 'ES'
  },
  es: {
    // Header
    portfolio: 'River Bonilla',
    home: 'Inicio',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',

    // Hero Section
    greeting: "Hola, soy",
    role: "Estudiante de Ingeniería de Software",
    'hero.description': "Desarrollador backend con habilidades en Java, Python, Node.js y experiencia en diversos proyectos.",
    'view.projects': "Ver Proyectos",
    'contact.me': "Contacto",
    'profile.image.alt': "Foto de perfil",

    // Projects Section
    'my.projects': 'Mis Proyectos',
    'explore.portfolio': 'Explora mis proyectos técnicos',
    'projects.description': 'Aquí encontrarás una selección de mis proyectos más desafiantes, mostrando mis habilidades en desarrollo backend.',
    'fullstack.projects': 'Proyectos completos full-stack con arquitecturas modernas',
    'technical.solutions': 'Soluciones técnicas innovadoras y escalables',
    'clean.code': 'Código limpio y mantenible con buenas prácticas',
    'user.experience': 'Enfoque en la experiencia del usuario y el diseño',
    'projects.count': 'Proyectos',
    'technologies.count': 'Tecnologías',
    'see.project': 'Ver Detalles',
    'view.code': 'Ver Código',
    'loading.site': 'Cargando detalles...',
    'view.live': 'Ver Detalles',
    'view.preview': 'Ver Vista Previa',

    // Projects
    'project1.name': 'Plataforma Estilo LinkedIn',
    'project1.description': 'Plataforma API REST para perfiles profesionales, conexiones, mensajería y notificaciones',
    'project1.tech': ['Spring Boot', 'MongoDB', 'JWT', 'API REST', 'Azure'],
    'project1.features': [
      'Endpoints RESTful para perfiles, conexiones, mensajería y notificaciones',
      'Documentación completa: requisitos, diagramas, despliegue',
      'Seguridad con autenticación JWT y roles',
      'Arquitectura escalable en Azure'
    ],
    'project2.name': 'Plataforma Universitaria',
    'project2.description': 'Sistema fullstack para gestión de asistencia con códigos QR y generación de certificados',
    'project2.tech': ['NestJS', 'React', 'MySQL', 'Azure'],
    'project2.features': [
      'Sistema de asistencia con QR y generación de certificados',
      'Backend con autenticación y CI/CD en GitHub Actions',
      'Arquitectura escalable en Azure'
    ],
    'project3.name': 'Aplicación Web de Finanzas',
    'project3.description': 'Aplicación de gestión financiera con clasificación de gastos por IA y chatbot asesor personalizado',
    'project3.tech': ['Next.js', 'Firebase', 'IA', 'Gemini'],
    'project3.features': [
      'Clasificación automática de gastos (precisión > 90%)',
      'Chatbot personalizado que brinda asesorías financieras',
      'Diseño responsivo con Tailwind CSS'
    ],


    // About Section
    'about.role': 'Desarrollador Backend',
    'about.tabs.skills': 'Habilidades y Tecnologías',
    'about.tabs.experience': 'Experiencia en Proyectos',
    'about.tabs.education': 'Educación',
    'about.tabs.interests': 'Intereses',
    'about.tabs.aspirations': 'Aspiraciones',

    // Personal Information
    'about.personal.title': 'River Alejandro Bonilla Florez',
    'about.personal.location': 'Pasto, Colombia',
    'about.personal.phone': '+57 321 971 08 52',
    'about.personal.email': 'riverflorez.04@gmail.com',
    'about.personal.english': 'Inglés: B2',

    // Skills
    'about.skills.backend.title': 'Desarrollo Backend',
    'about.skills.backend.items': [
      'Java (Spring Boot)',
      'Python (Django)',
      'Node.js (NestJS)',
      'API REST',
      'Autenticación JWT',
      'Control de Acceso',
      'Arquitectura Limpia'
    ],
    'about.skills.frontend.title': 'Conocimientos Frontend',
    'about.skills.frontend.items': [
      'React',
      'Next.js',
      'Vue.js',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)'
    ],
    'about.skills.ai.title': 'IA y Automatización',
    'about.skills.ai.items': [
      'Integración de Chatbots (GPT-3.5, Gemini)',
      'Clasificación de datos con IA',
      'Sistemas automatizados'
    ],
    'about.skills.databases.title': 'Bases de Datos',
    'about.skills.databases.items': [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Firebase Firestore'
    ],
    'about.skills.devops.title': 'DevOps y Herramientas',
    'about.skills.devops.items': [
      'Docker',
      'CI/CD con GitHub Actions',
      'Despliegue en Azure y AWS',
      'Git y GitHub',
      'VS Code, Postman, Insomnia'
    ],
    'about.skills.architecture.title': 'Arquitectura de Software',
    'about.skills.architecture.items': [
      'SDLC, Documentación técnica',
      'Diagramas UML, Historias de usuario',
      'Diseño orientado a objetos',
      'Patrones de diseño: MVC, Singleton, Factory',
      'Estructuras de datos: listas, árboles, grafos'
    ],

    // Project Experience
    'about.experience.linkedin.title': 'Plataforma Estilo LinkedIn',
    'about.experience.linkedin.tech': 'Spring Boot · MongoDB · JWT · API REST · Azure',
    'about.experience.linkedin.description': 'Endpoints RESTful para perfiles, conexiones, mensajería y notificaciones. Documentación completa: requisitos, diagramas, despliegue. Seguridad con autenticación JWT y roles.',

    'about.experience.university.title': 'Plataforma Universitaria (Fullstack)',
    'about.experience.university.tech': 'NestJS · React · MySQL · Azure',
    'about.experience.university.description': 'Sistema de asistencia con QR y generación de certificados. Backend con autenticación y CI/CD en GitHub Actions. Arquitectura escalable en Azure.',

    'about.experience.finance.title': 'Aplicación Web de Finanzas',
    'about.experience.finance.tech': 'Next.js · Firebase Firestore/Auth · AI · Chatbot (Gemini)',
    'about.experience.finance.description': 'Clasificación automática de gastos (precisión > 90%). Chatbot personalizado que brinda asesorías financieras. Diseño responsivo con Tailwind CSS.',

    'about.experience.iot.title': 'Sistema IoT de Ascensor',
    'about.experience.iot.tech': 'ESP32 · C++ · Patrones de diseño · Estructuras de datos',
    'about.experience.iot.description': 'Control de peticiones usando listas circulares y colas. Lógica concurrente y patrones Singleton, Facade, Factory.',

    'about.experience.game.title': 'Juego Retro en Java',
    'about.experience.game.tech': 'Java · POO · Algoritmos de movimiento y colisión',
    'about.experience.game.description': 'Inspirado en motores como Source. Página en React para promoción y descarga.',

    'about.experience.pos.title': 'Sistema para Bar',
    'about.experience.pos.tech': 'React · Node.js · MySQL',
    'about.experience.pos.description': 'Desarrollo y venta efectiva a dos negocios locales.',

    'about.experience.hackathon.title': 'Hackathon Mundo Linux',
    'about.experience.hackathon.tech': 'ChatGPT-3.5 · WhatsApp · Backend · Azure',
    'about.experience.hackathon.description': 'Chatbot en WhatsApp con GPT-3.5. Integración backend para persistencia y lógica.',

    // Education
    'about.education.software.degree': 'Ingeniería de Software',
    'about.education.software.institution': 'Universidad Cooperativa de Colombia',
    'about.education.software.period': '2022 - Presente (5° semestre)',
    'about.education.software.description': 'Becado dos veces por monitoría académica. Enfoque en desarrollo de software.',

    'about.education.technical.degree': 'Técnico en Desarrollo de Software',
    'about.education.technical.institution': 'SENA',
    'about.education.technical.period': '2023',
    'about.education.technical.description': 'Programa técnico enfocado en fundamentos de desarrollo de software.',

    'about.education.ai.degree': 'Certificación en Machine Learning e IA',
    'about.education.ai.institution': 'Universidad Mariana',
    'about.education.ai.period': '2023',
    'about.education.ai.description': 'Formación especializada en conceptos de machine learning e inteligencia artificial.',

    'about.education.frontend1.degree': 'Curso de HTML y CSS',
    'about.education.frontend1.institution': 'Domestika',
    'about.education.frontend1.period': '2024',
    'about.education.frontend1.description': 'Fundamentos de desarrollo web frontend.',

    'about.education.excel.degree': 'Curso avanzado de Excel',
    'about.education.excel.institution': 'Universidad Cooperativa',
    'about.education.excel.period': '2024',
    'about.education.excel.description': 'Habilidades avanzadas de hojas de cálculo para análisis y reportes de datos.',

    // Soft Skills
    'about.softskills.title': 'Habilidades Blandas',
    'about.softskills.items': [
      'Comunicación efectiva y trabajo en equipo (Scrum)',
      'Adaptabilidad y aprendizaje autodidacta',
      'Capacidad de análisis lógico y resolución de problemas',
      'Enfoque en el usuario final y visión de negocio'
    ],

    // Interests
    'about.interests.web.icon': '🌐',
    'about.interests.web.title': 'Desarrollo Web',
    'about.interests.web.description': 'Aplicaciones web modernas y frameworks',

    'about.interests.ai.icon': '🤖',
    'about.interests.ai.title': 'Inteligencia Artificial',
    'about.interests.ai.description': 'Machine learning y aplicaciones de IA',

    'about.interests.mobile.icon': '📱',
    'about.interests.mobile.title': 'Desarrollo Móvil',
    'about.interests.mobile.description': 'Soluciones móviles multiplataforma',

    'about.interests.cloud.icon': '☁️',
    'about.interests.cloud.title': 'Computación en la Nube',
    'about.interests.cloud.description': 'Construcción de aplicaciones nativas para la nube',

    // Aspirations
    'about.aspirations.architect.icon': '🚀',
    'about.aspirations.architect.title': 'Arquitecto de Software',
    'about.aspirations.architect.description': 'Diseñar sistemas robustos y escalables',

    'about.aspirations.teach.icon': '👨‍🏫',
    'about.aspirations.teach.title': 'Compartir Conocimiento',
    'about.aspirations.teach.description': 'Mentorizar nuevos desarrolladores',

    // Aspirations
    'about.aspirations.impact.icon': '🌍',
    'about.aspirations.impact.title': 'Impacto Global',
    'about.aspirations.impact.description': 'Contribuir a proyectos de código abierto',

    'about.aspirations.startup.icon': '💼',
    'about.aspirations.startup.title': 'Emprendimiento Tecnológico',
    'about.aspirations.startup.description': 'Fundar una startup tecnológica innovadora',

    // Testimonials Section
    'testimonials.title': 'Testimonios',
    'testimonials.ana.name': 'Ana Martínez',
    'testimonials.ana.role': 'CTO en TechSolutions',
    'testimonials.ana.text': 'River demostró un excelente dominio de las tecnologías backend durante nuestro proyecto colaborativo. Su código es limpio y bien organizado.',

    'testimonials.carlos.name': 'Carlos Rodríguez',
    'testimonials.carlos.role': 'Lead Developer en WebApp',
    'testimonials.carlos.text': 'Trabajar con River fue una experiencia gratificante. Sus habilidades en Java y Spring Boot son excepcionales, y siempre cumple con los plazos.',

    'testimonials.laura.name': 'Laura Gómez',
    'testimonials.laura.role': 'Project Manager en DataTech',
    'testimonials.laura.text': 'River no solo tiene conocimientos técnicos sólidos, sino también excelentes habilidades de comunicación y trabajo en equipo.',

    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': "Hablemos de oportunidades tecnológicas",
    'contact.description': "Estoy interesado en oportunidades de desarrollo backend y desafíos técnicos. ¡Contáctame!",
    'contact.name': 'Tu Nombre',
    'contact.email': 'Tu Correo',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.success': '¡Mensaje enviado exitosamente!',
    'contact.error': 'Error al enviar el mensaje.',
    'contact.or': 'O conéctate por',
    'contact.sending': 'Enviando...',
    'contact.info.location': 'Pasto, Colombia',
    'contact.info.phone': '+57 321 971 08 52',
    'contact.info.email': 'riverflorez.04@gmail.com',

    // Footer
    'footer.description': 'Estudiante de Ingeniería de Software mostrando habilidades en desarrollo backend.',
    'footer.sections': 'Secciones',
    'footer.contact': 'Contacto',
    'footer.location': 'Pasto, Colombia',
    'footer.rights': 'Todos los derechos reservados.',

    // UI
    'switch.lang': 'EN'
  }
};

// Crear el contexto para el idioma
export const LanguageContext = createContext<LanguageContextType>({
  translations,
  currentLanguage: 'es',
  t: () => '',
  toggleLanguage: () => { }
});

// Proveedor del contexto que envuelve la aplicación
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Estado para el idioma actual
  const [currentLanguage, setCurrentLanguage] = useState<string>('es');

  // Función para obtener traducciones
  const t = useCallback((key: string): any => {
    const keys = key.split('-');
    let translation: any = translations[currentLanguage];

    try {
      for (const k of keys) {
        if (translation === undefined) return key;
        translation = translation[k];
      }

      if (translation === undefined) return key;

      return translation;
    } catch (error) {
      return key;
    }
  }, [currentLanguage]);

  // Función para cambiar el idioma
  const toggleLanguage = useCallback(() => {
    setCurrentLanguage(prev => (prev === 'es' ? 'en' : 'es'));
  }, []);

  // Detectar el idioma del navegador al cargar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Si no hay un idioma guardado, detectamos el del navegador
      const browserLanguage = navigator.language.split('-')[0];
      const detectedLanguage = browserLanguage === 'es' ? 'es' : 'en';
      setCurrentLanguage(detectedLanguage);
      localStorage.setItem('language', detectedLanguage);
    }
    document.documentElement.lang = currentLanguage;
  }, []);

  // Guardar el idioma cuando cambie
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
    document.documentElement.lang = currentLanguage;

    // Añadir animaciones al cambiar idioma
    document.body.classList.add('lang-change-transition');
    setTimeout(() => {
      document.body.classList.remove('lang-change-transition');
    }, 500);
  }, [currentLanguage]);

  // Valor del contexto
  const contextValue = {
    translations,
    currentLanguage,
    t,
    toggleLanguage
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
