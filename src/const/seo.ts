export interface SEOConfig {
  defaultTitle: string;
  defaultDescription: string;
  siteUrl: string;
  defaultImage: string;
  author: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  defaultKeywords: string[];
}

export const seoConfig: SEOConfig = {
  defaultTitle: "Jose Miguel Vasquez - Desarrollador Full Stack",
  defaultDescription: "Desarrollador Full Stack especializado en React, Node.js, TypeScript, Python y tecnologías modernas. Portfolio y CV de Jose Miguel Vasquez.",
  siteUrl: "https://truejomiv.com",
  defaultImage: "/favicon.ico",
  author: "Jose Miguel Vasquez",
  social: {
    twitter: "@truejomiv",
    github: "https://github.com/truejomiv",
    linkedin: "https://linkedin.com/in/truejomiv"
  },
  defaultKeywords: [
    "Jose Miguel Vasquez",
    "Desarrollador Full Stack",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Python Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "CV",
    "Curriculum Vitae"
  ]
};

// Utilidades para generar metadatos SEO
export function generatePageTitle(pageTitle?: string): string {
  if (!pageTitle) return seoConfig.defaultTitle;
  if (pageTitle.includes(seoConfig.author)) return pageTitle;
  return `${pageTitle} | ${seoConfig.author}`;
}

export function generatePageDescription(description?: string): string {
  return description || seoConfig.defaultDescription;
}

export function generateKeywords(additionalKeywords: string[] = []): string[] {
  return [...seoConfig.defaultKeywords, ...additionalKeywords];
}

export function generateCanonicalUrl(path: string): string {
  return new URL(path, seoConfig.siteUrl).href;
}

export function generateImageUrl(imagePath: string): string {
  if (imagePath.startsWith('http')) return imagePath;
  return new URL(imagePath, seoConfig.siteUrl).href;
}
