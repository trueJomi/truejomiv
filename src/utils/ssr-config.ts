// Optimizaciones específicas para SSR en Cloudflare

// Headers de cache para diferentes tipos de contenido
export const CACHE_HEADERS = {
  // Páginas dinámicas (home, portfolio)
  DYNAMIC: {
    'Cache-Control': 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400',
    'CDN-Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    'Vary': 'Accept-Language, Accept-Encoding'
  },
  
  // CV (cambia menos frecuentemente)
  CV: {
    'Cache-Control': 'public, max-age=600, s-maxage=7200, stale-while-revalidate=86400',
    'CDN-Cache-Control': 'public, s-maxage=7200, stale-while-revalidate=86400',
    'Vary': 'Accept-Language, Accept-Encoding'
  },
  
  // Assets estáticos
  STATIC: {
    'Cache-Control': 'public, max-age=31536000, immutable'
  },
  
  // API endpoints
  API: {
    'Cache-Control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=3600',
    'Vary': 'Accept-Language'
  }
};

// Helper para aplicar headers de cache
export function setCacheHeaders(response: Response, type: keyof typeof CACHE_HEADERS) {
  const headers = CACHE_HEADERS[type];
  Object.entries(headers).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
}

// Configuración de preloading para recursos críticos
export const CRITICAL_RESOURCES = [
  '/Hurley-1967-Sans.woff2',
  '/_astro/global.css'
];

// Configuración para lazy loading de imágenes
export const IMAGE_OPTIMIZATION = {
  formats: ['webp', 'avif'],
  quality: 85,
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
};
