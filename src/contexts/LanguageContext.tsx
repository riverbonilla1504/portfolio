import React, { createContext, useState, useEffect, useCallback, ReactNode } from "react";

// Definición de tipos para las traducciones
export interface Translations {
  [key: string]: {
    [key: string]: string | string[];
  };
}

// Interfaz para el contexto de idioma
interface LanguageContextType {
  translations: Translations;
  currentLanguage: string;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

// Traducciones disponibles
const translations: Translations = {
  en: {
    // Header
    portfolio: 'River Alejandro Bonilla Florez',
    home: 'Home',
    projects: 'Projects',
    about: 'About me',
    contact: 'Contact',

    // Hero Section
    greeting: "Hi, I'm",
    role: "Software Engineering Student",
    'hero-description': "Passionate backend developer with expertise in Java, Python, and Node.js ecosystems.",
    'view-projects': "View Projects",
    'contact-me': "Contact Me",
    'profile-image-alt': "Profile picture",

    // Projects Section
    'my-projects': 'My Projects',
    'explore-portfolio': 'Explore my technical projects',
    'projects-description': 'Here you will find a selection of my most challenging projects, showcasing my backend development skills.',
    'fullstack-projects': 'Full-stack projects with modern architectures',
    'technical-solutions': 'Innovative and scalable technical solutions',
    'clean-code': 'Clean and maintainable code with best practices',
    'user-experience': 'Focus on user experience and design',
    'projects-count': 'Projects',
    'technologies-count': 'Technologies',
    'see-project': 'View Details',
    'view-code': 'View Code',
    'loading-site': 'Loading details...',
    'view-live': 'View Details',
    'view-preview': 'View Preview',

    // Project Details
    'finance-description': 'Personal finance management application with expense tracking and investments',
    'javagame-description': 'Game engine developed in Java with 3D graphics and realistic physics',
    'seminario-description': 'Platform for managing academic and professional seminars',

    // Project Features
    'finance-features': ['Custom dashboard', 'Interactive charts', 'Automatic reports', 'Smart alerts'],
    'javagame-features': ['3D rendering', 'Collision detection', 'Particle system', 'Visual editor'],
    'seminario-features': ['Participant registration', 'Custom agendas', 'Live streaming', 'Digital certificates'],

    // Project Technologies
    'finance-tech': ['React', 'Node.js', 'MongoDB', 'Express'],
    'javagame-tech': ['Java', 'OpenGL', 'JBox2D', 'Maven'],
    'seminario-tech': ['Next.js', 'Django', 'PostgreSQL', 'Redis'],

    // About Section
    'about.role': 'Backend Developer',
    'about.tabs.skills': 'Skills & Technologies',
    'about.tabs.experience': 'Project Experience',
    'about.tabs.education': 'Education',
    'about.tabs.interests': 'Interests',
    'about.tabs.aspirations': 'Aspirations',

    // Skills
    'about.skills.backend.title': 'Backend Development',
    'about.skills.backend.items': ['Node.js', 'Django', 'NestJs', 'Spring Boot', 'Express', 'PostgreSQL', 'MongoDB'],
    'about.skills.frontend.title': 'Frontend Knowledge',
    'about.skills.frontend.items': ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Material UI'],

    // Project Experience
    'about.experience.fullstack.title': 'Full-Stack Web Development',
    'about.experience.fullstack.company': 'TechSolutions, Inc.',
    'about.experience.fullstack.period': '2023 - Present',
    'about.experience.fullstack.description': 'Developing web applications using React and Node.js. Implementation of RESTful services and OAuth authentication.',

    'about.experience.backend.title': 'Backend Development Intern',
    'about.experience.backend.company': 'DataTech Solutions',
    'about.experience.backend.period': '2022 - 2023',
    'about.experience.backend.description': 'Development of microservices with Spring Boot and deployment on AWS. Optimization of SQL queries in relational databases.',

    'about.experience.frontend.title': 'Junior Frontend Developer',
    'about.experience.frontend.company': 'WebDev Studio',
    'about.experience.frontend.period': '2021 - 2022',
    'about.experience.frontend.description': 'Creation of interactive user interfaces with React and modern CSS. Integration with APIs and state management.',

    // Education
    'about.education.software.degree': 'Software Engineering',
    'about.education.software.institution': 'Universidad Cooperativa de Colombia',
    'about.education.software.period': '2020 - Present',
    'about.education.software.description': 'Specialization in web and mobile application development.',

    'about.education.technical.degree': 'Software Development Technician',
    'about.education.technical.institution': 'SENA',
    'about.education.technical.period': '2018 - 2020',
    'about.education.technical.description': 'Fundamentals of programming, databases, and web development.',

    'about.education.fullstack.degree': 'Full Stack Development Certified Course',
    'about.education.fullstack.institution': 'Platzi',
    'about.education.fullstack.period': '2019',
    'about.education.fullstack.description': 'Modern web development with JavaScript, React, and Node.js.',

    // Interests
    'about.interests.web.icon': '🌐',
    'about.interests.web.title': 'Emerging Web Technologies',
    'about.interests.web.description': 'Exploring new frameworks and tools for web development.',

    'about.interests.ai.icon': '🤖',
    'about.interests.ai.title': 'Artificial Intelligence',
    'about.interests.ai.description': 'Experimenting with machine learning and natural language processing.',

    'about.interests.mobile.icon': '📱',
    'about.interests.mobile.title': 'Mobile Application Development',
    'about.interests.mobile.description': 'Creating native and cross-platform mobile experiences.',

    'about.interests.cloud.icon': '☁️',
    'about.interests.cloud.title': 'Cloud Computing',
    'about.interests.cloud.description': 'Deploying scalable applications on cloud platforms.',

    // Aspirations
    'about.aspirations.architect.icon': '🚀',
    'about.aspirations.architect.title': 'Become a Software Architect',
    'about.aspirations.architect.description': 'Design scalable and maintainable systems that solve complex problems.',

    'about.aspirations.teach.icon': '👨‍🏫',
    'about.aspirations.teach.title': 'Share Knowledge',
    'about.aspirations.teach.description': 'Teach and mentor new developers on their professional journey.',

    'about.aspirations.impact.icon': '🌍',
    'about.aspirations.impact.title': 'Global Impact',
    'about.aspirations.impact.description': 'Contribute to open-source projects that benefit the global community.',

    'about.aspirations.startup.icon': '💼',
    'about.aspirations.startup.title': 'Technology Entrepreneurship',
    'about.aspirations.startup.description': 'Found an innovative startup in the technology sector.',

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

    // Footer
    'footer.description': 'Software Engineering student showcasing backend development skills.',
    'footer.sections': 'Sections',
    'footer.contact': 'Contact',
    'footer.location': 'Pasto, Colombia',
    'footer.rights': 'All rights reserved.',

    // UI
    'switch-lang': 'ES'
  },
  es: {
    // Header
    portfolio: 'River Alejandro Bonilla Florez',
    home: 'Inicio',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',

    // Hero Section
    greeting: "Hola, soy",
    role: "Estudiante de Ingeniería de Software",
    'hero-description': "Desarrollador backend apasionado con experiencia en Java, Python y Node.js.",
    'view-projects': "Ver Proyectos",
    'contact-me': "Contacto",
    'profile-image-alt': "Foto de perfil",

    // Projects Section
    'my-projects': 'Mis Proyectos',
    'explore-portfolio': 'Explora mis proyectos técnicos',
    'projects-description': 'Aquí encontrarás una selección de mis proyectos más desafiantes, mostrando mis habilidades en desarrollo backend.',
    'fullstack-projects': 'Proyectos completos full-stack con arquitecturas modernas',
    'technical-solutions': 'Soluciones técnicas innovadoras y escalables',
    'clean-code': 'Código limpio y mantenible con buenas prácticas',
    'user-experience': 'Enfoque en la experiencia del usuario y el diseño',
    'projects-count': 'Proyectos',
    'technologies-count': 'Tecnologías',
    'see-project': 'Ver Detalles',
    'view-code': 'Ver Código',
    'loading-site': 'Cargando detalles...',
    'view-live': 'Ver Detalles',
    'view-preview': 'Ver Vista Previa',

    // Project Details
    'finance-description': 'Aplicación de gestión financiera personal con seguimiento de gastos e inversiones',
    'javagame-description': 'Motor de juego desarrollado en Java con gráficos 3D y física realista',
    'seminario-description': 'Plataforma para gestión de seminarios académicos y profesionales',

    // Project Features
    'finance-features': ['Dashboard personalizado', 'Gráficos interactivos', 'Informes automáticos', 'Alertas inteligentes'],
    'javagame-features': ['Renderizado 3D', 'Detección de colisiones', 'Sistema de partículas', 'Editor visual'],
    'seminario-features': ['Registro de participantes', 'Agendas personalizadas', 'Streaming en vivo', 'Certificados digitales'],

    // Project Technologies
    'finance-tech': ['React', 'Node.js', 'MongoDB', 'Express'],
    'javagame-tech': ['Java', 'OpenGL', 'JBox2D', 'Maven'],
    'seminario-tech': ['Next.js', 'Django', 'PostgreSQL', 'Redis'],

    // About Section
    'about.role': 'Desarrollador Backend',
    'about.tabs.skills': 'Habilidades y Tecnologías',
    'about.tabs.experience': 'Experiencia en Proyectos',
    'about.tabs.education': 'Educación',
    'about.tabs.interests': 'Intereses',
    'about.tabs.aspirations': 'Aspiraciones',

    // Skills
    'about.skills.backend.title': 'Desarrollo Backend',
    'about.skills.backend.items': ['Node.js', 'Django', 'NestJs', 'Spring Boot', 'Express', 'PostgreSQL', 'MongoDB'],
    'about.skills.frontend.title': 'Conocimientos Frontend',
    'about.skills.frontend.items': ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Material UI'],

    // Project Experience
    'about.experience.fullstack.title': 'Desarrollo Web Full-Stack',
    'about.experience.fullstack.company': 'TechSolutions, Inc.',
    'about.experience.fullstack.period': '2023 - Presente',
    'about.experience.fullstack.description': 'Desarrollo de aplicaciones web utilizando React y Node.js. Implementación de servicios RESTful y autenticación OAuth.',

    'about.experience.backend.title': 'Pasante de Desarrollo Backend',
    'about.experience.backend.company': 'DataTech Solutions',
    'about.experience.backend.period': '2022 - 2023',
    'about.experience.backend.description': 'Desarrollo de microservicios con Spring Boot y despliegue en AWS. Optimización de consultas SQL en bases de datos relacionales.',

    'about.experience.frontend.title': 'Desarrollador Frontend Junior',
    'about.experience.frontend.company': 'WebDev Studio',
    'about.experience.frontend.period': '2021 - 2022',
    'about.experience.frontend.description': 'Creación de interfaces de usuario interactivas con React y CSS moderno. Integración con APIs y manejo de estados.',

    // Education
    'about.education.software.degree': 'Ingeniería de Software',
    'about.education.software.institution': 'Universidad Cooperativa de Colombia',
    'about.education.software.period': '2020 - Presente',
    'about.education.software.description': 'Especialización en desarrollo de aplicaciones web y móviles.',

    'about.education.technical.degree': 'Técnico en Desarrollo de Software',
    'about.education.technical.institution': 'SENA',
    'about.education.technical.period': '2018 - 2020',
    'about.education.technical.description': 'Fundamentos de programación, bases de datos y desarrollo web.',

    'about.education.fullstack.degree': 'Curso Certificado de Full Stack Development',
    'about.education.fullstack.institution': 'Platzi',
    'about.education.fullstack.period': '2019',
    'about.education.fullstack.description': 'Desarrollo web moderno con JavaScript, React y Node.js.',

    // Interests
    'about.interests.web.icon': '🌐',
    'about.interests.web.title': 'Tecnologías Web Emergentes',
    'about.interests.web.description': 'Explorando nuevos frameworks y herramientas para desarrollo web.',

    'about.interests.ai.icon': '🤖',
    'about.interests.ai.title': 'Inteligencia Artificial',
    'about.interests.ai.description': 'Experimentando con aprendizaje automático y procesamiento de lenguaje natural.',

    'about.interests.mobile.icon': '📱',
    'about.interests.mobile.title': 'Desarrollo de Aplicaciones Móviles',
    'about.interests.mobile.description': 'Creando experiencias móviles nativas y multiplataforma.',

    'about.interests.cloud.icon': '☁️',
    'about.interests.cloud.title': 'Computación en la Nube',
    'about.interests.cloud.description': 'Desplegando aplicaciones escalables en plataformas cloud.',

    // Aspirations
    'about.aspirations.architect.icon': '🚀',
    'about.aspirations.architect.title': 'Convertirme en Arquitecto de Software',
    'about.aspirations.architect.description': 'Diseñar sistemas escalables y mantenibles que resuelvan problemas complejos.',

    'about.aspirations.teach.icon': '👨‍🏫',
    'about.aspirations.teach.title': 'Compartir Conocimiento',
    'about.aspirations.teach.description': 'Enseñar y mentorizar a nuevos desarrolladores en su camino profesional.',

    'about.aspirations.impact.icon': '🌍',
    'about.aspirations.impact.title': 'Impacto Global',
    'about.aspirations.impact.description': 'Contribuir a proyectos de código abierto que beneficien a la comunidad global.',

    'about.aspirations.startup.icon': '💼',
    'about.aspirations.startup.title': 'Emprendimiento Tecnológico',
    'about.aspirations.startup.description': 'Fundar una startup innovadora en el sector tecnológico.',

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

    // Footer
    'footer.description': 'Estudiante de Ingeniería de Software mostrando habilidades en desarrollo backend.',
    'footer.sections': 'Secciones',
    'footer.contact': 'Contacto',
    'footer.location': 'Pasto, Colombia',
    'footer.rights': 'Todos los derechos reservados.',

    // UI
    'switch-lang': 'EN'
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
export const LanguageProvider: React.FC<{ children: ReactNode; initialLanguage: string }> = ({ children, initialLanguage }) => {
  // Estado para el idioma actual
  const [currentLanguage, setCurrentLanguage] = useState<string>(initialLanguage);

  // Función para obtener traducciones
  const t = useCallback((key: string): string => {
    const translation = translations[currentLanguage]?.[key];
    return Array.isArray(translation)
      ? translation.join(', ')
      : (translation as string) || key;
  }, [currentLanguage]);

  // Función para cambiar el idioma
  const toggleLanguage = useCallback(() => {
    setCurrentLanguage(prev => (prev === 'es' ? 'en' : 'es'));
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
