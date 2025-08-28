# 🚀 Jose Miguel Vasquez - Portfolio & CV

[![Astro](https://img.shields.io/badge/Astro-5.10.1-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://prisma.io/)

Portfolio profesional y CV interactivo desarrollado con tecnologías modernas. Sitio web multiidioma (español/inglés) optimizado para SEO y rendimiento.

## 🌟 **Demo**

🔗 **[truejomiv.com](https://truejomiv.com)**

## ✨ **Características**

### 🎯 **Core Features**
- 📱 **Responsive Design** - Optimizado para todos los dispositivos
- 🌍 **Multiidioma** - Español e Inglés con URLs localizadas
- 🚀 **Performance** - Lighthouse Score 90+ en todas las métricas
- 🔍 **SEO Optimizado** - Meta tags, Open Graph, Twitter Cards, Schema.org
- 📊 **Analytics Ready** - Google Analytics y Tag Manager integrados
- 🎨 **Animaciones Suaves** - Transiciones con View Transitions API

### 💼 **Secciones**
- 🏠 **Inicio** - Presentación con efecto de escritura automática
- 👨‍💻 **Sobre Mí** - Información personal y profesional
- 💼 **Portfolio** - Proyectos destacados con tecnologías utilizadas
- 🎓 **Educación** - Formación académica y certificaciones
- 🛠️ **Habilidades** - Skills técnicas organizadas por categorías
- 📧 **Contacto** - Formulario de contacto y redes sociales
- 📄 **CV** - Currículum completo en formato web e imprimible

### 🔧 **Tecnologías**
- **Frontend**: Astro 5.10, TypeScript, Tailwind CSS 4.1
- **Base de Datos**: Prisma ORM con SQLite/Turso
- **Animaciones**: Typed.js, CSS Transitions
- **SEO**: Sitemap automático, datos estructurados JSON-LD
- **Performance**: Partytown para scripts de terceros
- **Deployment**: Static Site Generation (SSG)

## 🚀 **Instalación y Desarrollo**

### **Prerrequisitos**
- Node.js 18+ 
- pnpm (recomendado) o npm

### **Instalación**
```bash
# Clonar el repositorio
git clone https://github.com/truejomiv/portfolio.git
cd portfolio

# Instalar dependencias
pnpm install

# Configurar la base de datos
pnpm generate

# Iniciar servidor de desarrollo
pnpm dev
```

### **Variables de Entorno (Opcional)**
```bash
# .env
DATABASE_URL="file:./dev.db"
GOOGLE_ANALYTICS_ID="G-XXXXXXXXX"
GOOGLE_TAG_MANAGER_ID="GTM-XXXXXX"
```

## 📁 **Estructura del Proyecto**

```
truejomiv/
├── prisma/
│   ├── schema.prisma          # Esquema de base de datos
│   ├── dev.db                 # Base de datos SQLite
│   └── migrations/            # Migraciones
├── public/
│   ├── favicon.svg            # Favicon del sitio
│   ├── cv.ico                 # Icono para CV
│   ├── robots.txt             # SEO robots
│   └── skills/                # Iconos de habilidades
├── src/
│   ├── components/
│   │   ├── Blog/              # Componentes del blog
│   │   ├── CV/                # Componentes del CV
│   │   ├── Landing/           # Componentes landing page
│   │   ├── SEO/               # Componentes SEO
│   │   └── utils/             # Utilidades UI
│   ├── const/
│   │   ├── skills.ts          # Configuración skills
│   │   └── seo.ts             # Configuración SEO
│   ├── i18n/
│   │   ├── ui.ts              # Traducciones
│   │   └── utils.ts           # Utilidades i18n
│   ├── layout/
│   │   ├── LayoutLanding.astro # Layout principal
│   │   └── LayoutCV.astro      # Layout CV
│   ├── libs/
│   │   ├── prisma.ts          # Cliente Prisma
│   │   ├── color.ts           # Utilidades color
│   │   └── phone.ts           # Validación teléfono
│   ├── pages/
│   │   ├── index.astro        # Página principal (ES)
│   │   ├── cv.astro           # CV (ES)
│   │   ├── blog/              # Blog (desarrollo)
│   │   └── en/                # Versiones en inglés
│   ├── services/
│   │   └── cv.service.ts      # Servicios CV
│   ├── styles/
│   │   └── global.css         # Estilos globales
│   └── types/
│       ├── cv.type.ts         # Tipos CV
│       └── SocialIcons.type.ts # Tipos iconos
├── astro.config.mjs           # Configuración Astro
├── tailwind.config.js         # Configuración Tailwind
├── tsconfig.json              # Configuración TypeScript
└── package.json               # Dependencias y scripts
```

## 🛠️ **Comandos Disponibles**

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia servidor de desarrollo |
| `pnpm build` | Construye para producción |
| `pnpm preview` | Preview del build local |
| `pnpm generate` | Genera cliente Prisma |
| `pnpm astro add [integration]` | Añade integraciones |

## 🎨 **Personalización**

### **Modificar Información Personal**
1. **Base de Datos**: Edita los datos en `prisma/dev.db` o usa Prisma Studio
2. **Configuración SEO**: Modifica `src/const/seo.ts`
3. **Colores**: Ajusta `tailwind.config.js` y `src/styles/global.css`
4. **Iconos de Skills**: Añade SVGs en `public/skills/`

### **Añadir Nuevas Secciones**
1. Crea componente en `src/components/Landing/`
2. Importa en `src/pages/index.astro`
3. Añade traducciones en `src/i18n/ui.ts`

### **Configurar Analytics**
```astro
<!-- src/layout/LayoutLanding.astro -->
<Analytics 
  googleAnalyticsId="G-XXXXXXXXX"
  googleTagManagerId="GTM-XXXXXX"
/>
```

## 🔍 **SEO y Performance**

### **SEO Features**
- ✅ Meta tags optimizados por página
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Datos estructurados JSON-LD
- ✅ Sitemap automático multiidioma
- ✅ URLs canónicas
- ✅ Hreflang para internacionalización

### **Performance Features**
- ✅ Static Site Generation (SSG)
- ✅ View Transitions API
- ✅ Partytown para scripts de terceros
- ✅ Preload de recursos críticos
- ✅ Lazy loading de imágenes
- ✅ CSS y JS optimizados

### **Lighthouse Scores**
- 🟢 **Performance**: 95+
- 🟢 **Accessibility**: 90+
- 🟢 **Best Practices**: 95+
- 🟢 **SEO**: 100

## 🚀 **Deployment**

### **Vercel (Recomendado)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### **Netlify**
```bash
# Build command
pnpm build

# Publish directory
dist
```

### **GitHub Pages**
```bash
# Configurar en astro.config.mjs
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repository-name'
});
```

## 🤝 **Contribuir**

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## � **Licencia**

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más información.

## 👨‍💻 **Autor**

**Jose Miguel Vasquez**
- 🌐 Website: [truejomiv.com](https://truejomiv.com)
- 💼 LinkedIn: [linkedin.com/in/truejomiv](https://linkedin.com/in/truejomiv)
- 🐙 GitHub: [github.com/truejomiv](https://github.com/truejomiv)
- 📧 Email: [contacto@truejomiv.com](mailto:contacto@truejomiv.com)

## 🙏 **Agradecimientos**

- [Astro](https://astro.build) - Framework web moderno
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utility-first
- [Prisma](https://prisma.io) - ORM de próxima generación
- [Vercel](https://vercel.com) - Plataforma de deployment

---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!**
