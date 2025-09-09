import { getPrismaClient } from "@/libs/prisma-workers";

export async function getCV(lang: "en" | "es") {
  try {
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
