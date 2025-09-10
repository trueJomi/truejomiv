// Datos mock para Workers - reemplaza la base de datos temporalmente
export const mockCVData = {
  es: {
    basics: {
      name: "Jose Miguel Vasquez",
      label: "Desarrollador Full Stack",
      email: "contacto@truejomiv.com",
      phone: "+51 999 888 777",
      url: "https://truejomiv-production.truejomiv.workers.dev",
      summary: "Desarrollador Full Stack especializado en tecnologías modernas como React, Node.js, TypeScript y Astro. Experiencia en desarrollo de aplicaciones web escalables y arquitecturas cloud.",
      location: {
        address: "Lima, Perú",
        postalCode: "15001",
        city: "Lima",
        countryCode: "PE",
        region: "Lima"
      },
      profiles: [
        {
          network: "GitHub",
          username: "truejomiv",
          url: "https://github.com/truejomiv"
        },
        {
          network: "LinkedIn", 
          username: "truejomiv",
          url: "https://linkedin.com/in/truejomiv"
        }
      ]
    },
    work: [
      {
        name: "Freelance",
        position: "Desarrollador Full Stack",
        url: "https://truejomiv-production.truejomiv.workers.dev",
        startDate: "2022-01-01",
        endDate: null,
        summary: "Desarrollo de aplicaciones web modernas y soluciones tecnológicas personalizadas.",
        highlights: [
          "Desarrollo con React, TypeScript y Node.js",
          "Implementación de arquitecturas serverless",
          "Optimización de rendimiento y SEO"
        ]
      }
    ],
    skills: [
      {
        name: "Frontend",
        level: "Avanzado",
        keywords: ["React", "TypeScript", "Astro", "Tailwind CSS", "JavaScript"]
      },
      {
        name: "Backend",
        level: "Avanzado", 
        keywords: ["Node.js", "Express", "Prisma", "PostgreSQL", "MySQL"]
      },
      {
        name: "Cloud & DevOps",
        level: "Intermedio",
        keywords: ["Cloudflare", "Vercel", "Docker", "Git", "GitHub Actions"]
      }
    ],
    education: [
      {
        institution: "Universidad Tecnológica",
        area: "Ingeniería de Sistemas",
        studyType: "Licenciatura",
        startDate: "2018-01-01",
        endDate: "2022-12-31"
      }
    ],
    languages: [
      {
        language: "Español",
        fluency: "Nativo"
      },
      {
        language: "Inglés",
        fluency: "Avanzado"
      }
    ]
  },
  en: {
    basics: {
      name: "Jose Miguel Vasquez",
      label: "Full Stack Developer",
      email: "contacto@truejomiv.com",
      phone: "+51 999 888 777",
      url: "https://truejomiv-production.truejomiv.workers.dev",
      summary: "Full Stack Developer specialized in modern technologies like React, Node.js, TypeScript and Astro. Experience in developing scalable web applications and cloud architectures.",
      location: {
        address: "Lima, Peru",
        postalCode: "15001",
        city: "Lima",
        countryCode: "PE",
        region: "Lima"
      },
      profiles: [
        {
          network: "GitHub",
          username: "truejomiv",
          url: "https://github.com/truejomiv"
        },
        {
          network: "LinkedIn",
          username: "truejomiv", 
          url: "https://linkedin.com/in/truejomiv"
        }
      ]
    },
    work: [
      {
        name: "Freelance",
        position: "Full Stack Developer",
        url: "https://truejomiv-production.truejomiv.workers.dev",
        startDate: "2022-01-01",
        endDate: null,
        summary: "Development of modern web applications and custom technology solutions.",
        highlights: [
          "Development with React, TypeScript and Node.js",
          "Implementation of serverless architectures", 
          "Performance optimization and SEO"
        ]
      }
    ],
    skills: [
      {
        name: "Frontend",
        level: "Advanced",
        keywords: ["React", "TypeScript", "Astro", "Tailwind CSS", "JavaScript"]
      },
      {
        name: "Backend", 
        level: "Advanced",
        keywords: ["Node.js", "Express", "Prisma", "PostgreSQL", "MySQL"]
      },
      {
        name: "Cloud & DevOps",
        level: "Intermediate",
        keywords: ["Cloudflare", "Vercel", "Docker", "Git", "GitHub Actions"]
      }
    ],
    education: [
      {
        institution: "Technology University",
        area: "Systems Engineering",
        studyType: "Bachelor's Degree",
        startDate: "2018-01-01", 
        endDate: "2022-12-31"
      }
    ],
    languages: [
      {
        language: "Spanish",
        fluency: "Native"
      },
      {
        language: "English",
        fluency: "Advanced"
      }
    ]
  }
};
