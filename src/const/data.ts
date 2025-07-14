import type { CV } from "../types/cv.type";

export const cv: CV = {
  basics: {
    name: "Alberto Jose Miguel Vasquez Trujillo",
    label: "Desarrollador Full Stack",
    shareImage: "https://res.cloudinary.com/deghyfe80/image/upload/c_fill,ar_1:1,g_auto/v1751755173/IMG_20211007_135703_2_dyf8p9.jpg",
    image: "https://res.cloudinary.com/deghyfe80/image/upload/c_fill,ar_1:1,g_auto/v1751755173/IMG_20211007_135703_2_dyf8p9.jpg",
    email: "truejomiv@gmail.com",
    phone: "+51 924 098 405",
    workingStatus: false,
    job: "Desarrollador Full Stack",
    url: "https://truejomi.com",
    summary: "Desarrollador Full Stack con más de 2 años de experiencia en tecnologías web modernas. Especializado en React, Node.js y arquitecturas cloud. Apasionado por crear soluciones innovadoras y escalables.",
    location: {
      address: "Av Costarrica recidencial C2-2",
      postalCode: "28001",
      city: "La Libertad",
      countryCode: "PE",
      region: "Trujillo"
    },
    profiles: [
      {
        network: "GitHub",
        username: "trueJomi",
        url: "https://github.com/trueJomi"
      },
      {
        network: "LinkedIn",
        username: "jose-miguel-vasquez-trujillo",
        url: "https://www.linkedin.com/in/jose-miguel-vasquez-trujillo-33821b223"
      },
      {
        network: "X",
        username: "@truejomiv",
        url: "https://twitter.com/truejomiv"
      }
    ]
  },
  work: [
    {
      name: "TechSolutions S.L.",
      position: "Senior Full Stack Developer",
      url: "https://techsolutions.com",
      startDate: "2022-03-01",
      endDate: null,
      summary: "Desarrollo y mantenimiento de aplicaciones web empresariales utilizando React, Node.js y AWS.",
      highlights: [
        "Lideré el desarrollo de una plataforma de e-commerce que aumentó las ventas en un 40%",
        "Implementé arquitectura de microservicios que mejoró la escalabilidad del sistema",
        "Mentoré a 3 desarrolladores junior en mejores prácticas de desarrollo"
      ]
    },
    {
      name: "Startup Innovadora",
      position: "Full Stack Developer",
      url: "https://startup.com",
      startDate: "2020-01-15",
      endDate: "2022-02-28",
      summary: "Desarrollo de MVP y funcionalidades core de la plataforma principal de la startup.",
      highlights: [
        "Desarrollé la primera versión de la aplicación móvil con React Native",
        "Implementé sistema de autenticación y autorización con JWT",
        "Optimicé las consultas de base de datos reduciendo tiempos de respuesta en 60%"
      ]
    }
  ],
  volunteer: [
    {
      organization: "Fundación Código Libre",
      position: "Instructor   de Programación",
      url: "https://codigolibre.org",
      startDate: "2021-06-01",
      endDate: "2023-12-31",
      summary: "Enseñanza de programación web a personas en situación de vulnerabilidad social.",
      highlights: [
        "Formé a más de 50 estudiantes en HTML, CSS y JavaScript",
        "Desarrollé curriculum adaptado para principiantes",
        "Organicé hackathons benéficos para ONG locales"
      ]
    }
  ],
  education: [
    {
      institution: "Universidad Politécnica de Madrid",
      url: "https://www.upm.es",
      area: "Ingeniería Informática",
      studyType: "Grado",
      startDate: "2015-09-01",
      endDate: "2019-06-30",
      score: "8.5/10",
      courses: [
        "Algoritmos y Estructuras de Datos",
        "Desarrollo de Software",
        "Bases de Datos",
        "Redes de Computadores",
        "Inteligencia Artificial"
      ]
    }
  ],
  awards: [
    {
      title: "Mejor Proyecto Fin de Grado",
      date: "2019-07-15",
      awarder: "Universidad Politécnica de Madrid",
      summary: "Reconocimiento por el desarrollo de una plataforma de gestión académica innovadora."
    },
    {
      title: "Hackathon Nacional de IA",
      date: "2021-11-20",
      awarder: "TechEvents España",
      summary: "Primer lugar en competición nacional de inteligencia artificial con solución para optimización de rutas."
    }
  ],
  certificates: [
    {
      name: "AWS Certified Solutions Architect",
      date: "2023-05-15",
      issuer: "Amazon Web Services",
      url: "https://aws.amazon.com/certification/"
    },
    {
      name: "React Developer Certification",
      date: "2022-08-10",
      issuer: "Meta",
      url: "https://developers.facebook.com/certificate/"
    }
  ],
  publications: [
    {
      name: "Arquitecturas Serverless con AWS Lambda",
      publisher: "DevMagazine",
      releaseDate: "2023-03-20",
      url: "https://devmagazine.com/serverless-aws",
      summary: "Artículo técnico sobre implementación de arquitecturas serverless en proyectos empresariales."
    }
  ],
  skills: [
    {
      name: "HTML",
      icon: "html",
      bgColor: "#E34F26",
      level: "Experto",
      type: "frontend",
      keywords: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      name: "CSS",
      icon: "css",
      type: "frontend",
      bgColor: "#1572B6",
      level: "Avanzado",
      keywords: ["Node.js", "Express", "NestJS", "Python", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      name: "JavaScript",
      icon: "javascript",
      type: "frontend",
      bgColor: "#F7DF1E",
      level: "Intermedio",
      keywords: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform"]
    },
    {
      name: "Python",
      icon: "python",
      type: "backend",
      bgColor: "#ffffff",
      level: "Intermedio",
      keywords: ["React Native", "Expo", "iOS", "Android"]
    },
    {
      name: "Node.js",
      icon: "node",
      type: "backend",
      bgColor: "#339933",
      level: "Avanzado",
      keywords: ["GraphQL", "REST", "WebSockets", "Microservicios", "Serverless"]
    },
    {
      name: "React",
      icon: "react",
      type: "framework",
      bgColor: "#61DAFB",
      level: "Avanzado",
      keywords: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      name: "Next.js",
      icon: "next",
      type: "framework",
      bgColor: "#000000",
      level: "Intermedio",
      keywords: ["Docker", "Kubernetes", "AWS", "CI/CD"]
    },
    {
      name: "TypeScript",
      icon: "typescript",
      type: "frontend",
      bgColor: "#3178C6",
      level: "Avanzado",
      keywords: ["TypeScript", "JavaScript", "Node.js", "React", "Next.js"]
    },
    {
      name: "Tailwind",
      icon: "tailwind",
      type: "tecnology",
      bgColor: "#181717",
      level: "Intermedio",
      keywords: ["Docker", "Kubernetes", "CI/CD", "AWS", "Terraform"]
    },
    {
      name: "Flutter",
      icon: "flutter",
      bgColor: "#02569B",
      type: "mobile",
      level: "Básico",
      keywords: ["Dart", "Desarrollo Móvil", "iOS", "Android"]
    },
    {
      name: "React Native",
      icon: "reactNative",
      type: "mobile",
      bgColor: "#61DAFB",
      level: "Intermedio",
      keywords: ["React Native", "Expo", "Desarrollo Móvil", "iOS", "Android"]
    },
    {
      name: "Express",
      icon: "express",
      type: "framework",
      bgColor: "#FFFFFF",
      level: "Avanzado",
      keywords: ["Node.js", "Express", "NestJS", "Python", "Django"]
    },
    {
      name: "Django",
      icon: "django",
      type: "framework",
      bgColor: "#092E20",
      level: "Intermedio",
      keywords: ["Python", "Django", "Flask", "FastAPI", "APIs REST"]
    },
    {
      name: "GPT",
      icon: "gpt",
      type: "integration",
      bgColor: "#ffffff",
      level: "Intermedio",
      keywords: ["OpenAI", "GPT-3", "Chatbots", "Procesamiento de Lenguaje Natural", "IA"]
    },
    {
      name: "Gemini",
      icon: "gemini",
      type: "integration",
      bgColor: "#4285F4",
      level: "Básico",
      keywords: ["Google Gemini", "IA", "Procesamiento de Lenguaje Natural", "Chatbots"]
    },
    {
      name: "Astro",
      icon: "astro",
      type: "framework",
      bgColor: "#181717",
      level: "Avanzado",
      keywords: ["Astro", "Static Site Generation", "Jamstack", "Frontend Frameworks"]
    },
    {
      name: "MySQL",
      icon: "mysql",
      type: "database",
      bgColor: "#4479A1",
      level: "Intermedio",
      keywords: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "Redis"]
    },
    {
      name: "PostgreSQL",
      icon: "postgresql",
      type: "database",
      bgColor: "#336791",
      level: "Avanzado",
      keywords: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "Redis"]
    },
    {
      name: "Docker",
      icon: "docker",
      type: "technology",
      bgColor: "#2496ED",
      level: "Avanzado",
      keywords: ["Docker", "Kubernetes", "CI/CD", "AWS", "Terraform"]
    },
    {
      name: "Google Cloud",
      type: "cloud",
      icon: "googleCloud",
      bgColor: "#ffffff",
      level: "Básico",
      keywords: ["Google Cloud Platform", "Firebase", "BigQuery", "Cloud Functions"]
    },
    {
      name: "Java",
      icon: "java",
      type: "backend",
      bgColor: "#FFFFFF",
      level: "Básico",
      keywords: ["Spring Boot", "Hibernate", "Microservicios", "APIs REST"]
    },
    {
      name: "Spring Boot",
      icon: "springBoot",
      type: "framework",
      bgColor: "#6DB33F",
      level: "Básico",
      keywords: ["Java", "Microservicios", "APIs REST", "Hibernate"]
    },
    {
      name: "Firebase",
      icon: "firebase",
      type: "cloud",
      bgColor: "#181717",
      level: "Intermedio",
      keywords: ["Firebase", "Realtime Database", "Firestore", "Authentication", "Hosting"]
    },
    {
      name: "Git",
      icon: "git",
      type: "version control",
      bgColor: "#F05032",
      level: "Avanzado",
      keywords: ["Git", "GitHub", "GitLab", "Version Control", "CI/CD"]
    },
    {
      name: "Github",
      icon: "github",
      type: "version control",
      bgColor: "#181717",
      level: "Avanzado",
      keywords: ["GitHub", "Version Control", "CI/CD", "Open Source"]
    },
    {
      name: "GitHub",
      icon: "github",
      type: "version control",
      bgColor: "#181717",
      level: "Avanzado",
      keywords: ["GitHub", "Version Control", "CI/CD", "Open Source"]
    },
    {
      name: "Sheets",
      icon: "googleSheets",
      type: "integration",
      bgColor: "#ffffff",
      level: "Intermedio",
      keywords: ["Google Sheets", "Automatización", "Integración", "Data Analysis"]
    }
  ],
  languages: [
    {
      language: "Spanish",
      fluency: "Nativo"
    },
    {
      language: "English",
      fluency: "Profesional"
    },
    {
      language: "German",
      fluency: "Básico"
    }
  ],
  interests: [
    {
      name: "Tecnología",
      keywords: ["Inteligencia Artificial", "Blockchain", "IoT", "Realidad Virtual"]
    },
    {
      name: "Deportes",
      keywords: ["Fútbol", "Ciclismo", "Escalada"]
    },
    {
      name: "Música",
      keywords: ["Guitarra", "Rock", "Jazz", "Composición"]
    }
  ],
  references: [
    {
      name: "María González",
      reference: "Juan es un desarrollador excepcional con gran capacidad de liderazgo y resolución de problemas. Su dedicación y profesionalismo son admirables."
    },
    {
      name: "Carlos Rodríguez",
      reference: "Trabajé con Juan durante 2 años y puedo confirmar su excelencia técnica y su habilidad para trabajar en equipo. Altamente recomendado."
    }
  ],
  projects: [
    {
      name: "E-commerce Platform",
      isActive: true,
      description: "Plataforma de comercio electrónico completa con panel de administración, sistema de pagos y analytics en tiempo real.",
      image: "https://res.cloudinary.com/deghyfe80/image/upload/v1751755173/ecommerce_platform.jpg",
      highlights: [
        "Más de 10,000 usuarios activos mensuales",
        "Integración con múltiples pasarelas de pago",
        "Dashboard de analytics en tiempo real",
        "Sistema de recomendaciones con IA"
      ],
      url: "https://mi-ecommerce.com",
      github: "https://github.com/juanperez/ecommerce-platform",
      tecnologies: ["react", "node", "postgresql", "docker", "flutter", "googleSheets"]
    },
    {
      name: "Task Management App",
      isActive: true,
      description: "Aplicación de gestión de tareas con colaboración en tiempo real, calendario integrado y notificaciones push.",
      image: "https://res.cloudinary.com/deghyfe80/image/upload/v1751755173/task_management_app.jpg",
      highlights: [
        "Colaboración en tiempo real con WebSockets",
        "Sincronización offline con IndexedDB",
        "Notificaciones push nativas",
        "Interfaz drag & drop intuitiva"
      ],
      url: "https://taskmaster-app.com",
      github: "https://github.com/juanperez/task-manager",
      tecnologies: ["react", "node", "github", "git", "html","css", "tailwind", "mysql"]
    },
    {
      name: "Weather API",
      isActive: false,
      description: "API REST para datos meteorológicos con predicciones y alertas automáticas.",
      image: "https://res.cloudinary.com/deghyfe80/image/upload/v1751755173/weather_api.jpg",
      highlights: [
        "Más de 1 millón de peticiones mensuales",
        "Documentación interactiva con Swagger",
        "Cache distribuido con Redis",
        "Alertas automáticas por email/SMS"
      ],
      url: "https://weather-api.dev",
      github: "https://github.com/juanperez/weather-api",
      tecnologies: ["node", "express", "firebase","django", "reactNative", "astro", "python", "typescript", "next", "java", "springBoot", "gpt", "gemini", "googleCloud"]
    }
  ]
}