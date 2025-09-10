import { getPrismaClient } from "@/libs/prisma-workers";
import { mockCVData } from "@/data/mock-cv";

// Función para detectar si estamos en Workers
function isWorkersEnvironment(): boolean {
  return typeof globalThis?.caches !== 'undefined' || 
         typeof process === 'undefined' ||
         typeof window === 'undefined' && typeof importScripts === 'undefined';
}

export async function getCV(lang: "en" | "es") {
  try {
    // En Workers, usar datos mock
    if (isWorkersEnvironment()) {
      console.log(`[CV Service] Using mock data for language: ${lang}`);
      const data = mockCVData[lang];
      if (!data) {
        throw new Error(`CV data not found for language: ${lang}`);
      }
      return {
        ...data,
        // Estructura compatible con Prisma
        basics: data.basics,
        works: data.work || [],
        volunteers: [],
        skills: data.skills || [],
        awards: [],
        certificates: [],
        publications: [],
        projects: [],
        interests: [],
        references: [],
        languages: data.languages || [],
        education: data.education || []
      };
    }

    // En desarrollo local, usar Prisma
    console.log(`[CV Service] Using Prisma for language: ${lang}`);
    const prisma = getPrismaClient();
    const data = await prisma.cV.findFirst({
      where: {
        language: lang,
      },
      include: {
        basics: {
          include: {
            location: true,
            profiles: true,
          },
        },
        works: {
          include: {
            highlights: true,
          },
        },
        volunteers: true,
        skills: {
          include: {
            keywords: true,
          },
        },
        awards: true,
        certificates: true,
        publications: true,
        languages: true,
        educations: {
          include: {
            courses: true,
          },
        },
        interests: true,
        projects: {
          include: {
            highlights: true,
            technologies: true,
          },
        },
        references: true,
      },
    });

    if (!data) {
      throw new Error("No se encontró el CV");
    }

    return data;
  } catch (error) {
    console.error("Error al obtener CV:", error);
    throw error;
  }
}
