import { prisma } from "@/libs/prisma";

export async function getCV(lang:"en" | "es") {
    const data = await prisma.cV.findFirst({
        where: {
            language: lang
        },
        include: {
            basics: {
                include: {
                    location: true,
                    profiles: true
                }
            },
            works: {
                include: {
                    highlights: true
                }
            },
            volunteers: true,
            skills: {
                include: {
                    keywords: true
                }
            },
            awards: true,
            certificates: true,
            publications: true,
            languages: true,
            educations: {
                include: {
                    courses: true
                }
            },
            interests: true,
            projects: {
                include: {
                    highlights: true,
                    technologies: true
                }
            },
            references: true,
        }
    })
    if (data === null || data === undefined) {
        throw new Error("No se encontro el CV")
    }
    if (data.basics === null || data.basics === undefined) {
        throw new Error("CV encontrado pero sin información básica")
    }
    
    return data
}