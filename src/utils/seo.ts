// Utilidades para generar URLs canónicas y gestionar rutas del sitio

export const siteConfig = {
  baseUrl: 'https://truejomiv.com',
  defaultLocale: 'es',
  locales: ['es', 'en'] as const,
  localeMapping: {
    es: 'es-PE',
    en: 'en-US'
  } as const
};

export type Locale = typeof siteConfig.locales[number];

/**
 * Genera la URL canónica para una página dada
 */
export function generateCanonicalUrl(path: string, locale?: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const localePath = locale && locale !== siteConfig.defaultLocale ? `/${locale}` : '';
  return `${siteConfig.baseUrl}${localePath}${cleanPath === '/' ? '' : cleanPath}`;
}

/**
 * Genera URLs alternativas para diferentes idiomas
 */
export function generateAlternateUrls(path: string): Array<{ locale: string; url: string; hreflang: string }> {
  return siteConfig.locales.map(locale => ({
    locale,
    url: generateCanonicalUrl(path, locale),
    hreflang: siteConfig.localeMapping[locale]
  }));
}

/**
 * Obtiene el locale de una URL
 */
export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  const potentialLocale = segments[0] as Locale;
  
  return siteConfig.locales.includes(potentialLocale) 
    ? potentialLocale 
    : siteConfig.defaultLocale as Locale;
}

/**
 * Genera breadcrumbs para SEO
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbs(pathname: string, locale: Locale = 'es'): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];
  
  // Remover el locale del path si existe
  if (segments[0] === locale && locale !== siteConfig.defaultLocale) {
    segments.shift();
  }
  
  // Home breadcrumb
  breadcrumbs.push({
    name: locale === 'es' ? 'Inicio' : 'Home',
    url: generateCanonicalUrl('/', locale)
  });
  
  // Generar breadcrumbs para cada segmento
  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    
    const name = segment === 'cv' 
      ? (locale === 'es' ? 'Currículum' : 'Resume')
      : segment === 'blog'
      ? 'Blog'
      : segment.charAt(0).toUpperCase() + segment.slice(1);
    
    breadcrumbs.push({
      name,
      url: generateCanonicalUrl(currentPath, locale)
    });
  }
  
  return breadcrumbs;
}

/**
 * Genera datos estructurados para breadcrumbs
 */
export function generateBreadcrumbStructuredData(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
