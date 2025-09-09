# 🚀 Despliegue en Cloudflare Pages

## Configuración Inicial

### 1. Instalar Wrangler CLI
```bash
npm install -g wrangler
# o con pnpm
pnpm add -g wrangler
```

### 2. Autenticarse en Cloudflare
```bash
pnpm run cf:login
```

### 3. Crear el proyecto en Cloudflare Pages
```bash
pnpm run cf:pages:create
```

## Comandos de Despliegue

### Desarrollo Local
```bash
# Ejecutar en modo desarrollo
pnpm run dev

# Previsualizar la build localmente
pnpm run preview

# Desarrollo con Wrangler (simula entorno de Cloudflare)
wrangler pages dev dist --local
```

### Despliegue Manual

#### Preview (staging)
```bash
pnpm run deploy:preview
```

#### Producción
```bash
pnpm run deploy
```

### Comandos Útiles
```bash
# Limpiar caché y rebuilds
pnpm run clean && pnpm run build

# Listar proyectos de Pages
pnpm run cf:pages:list

# Ver estado del deployment
wrangler pages deployment list --project-name=truejomiv-portfolio
```

## Configuración de Variables de Entorno en Cloudflare

### En el Dashboard de Cloudflare Pages:

1. Ve a tu proyecto en [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Selecciona **Pages** > **truejomiv-portfolio**
3. Ve a **Settings** > **Environment variables**
4. Añade las siguientes variables:

**Para Production:**
- `NODE_ENV`: `production`
- `DATABASE_URL`: `[tu-database-url-de-producción]`

**Para Preview:**
- `NODE_ENV`: `preview`
- `DATABASE_URL`: `[tu-database-url-de-preview]`

## Configuración de Dominio Personalizado

1. En Cloudflare Dashboard > Pages > tu proyecto
2. Ve a **Custom domains**
3. Añade tu dominio: `truejomiv.com`
4. Configura los DNS records en Cloudflare DNS

## Configuración de GitHub Actions (Opcional)

Si usas GitHub, el archivo `.github/workflows/deploy.yml` está configurado.

**Secretos requeridos en GitHub:**
- `CLOUDFLARE_API_TOKEN`: Token de API de Cloudflare
- `CLOUDFLARE_ACCOUNT_ID`: ID de tu cuenta de Cloudflare

### Obtener las credenciales:

1. **API Token**: Ve a Cloudflare Dashboard > My Profile > API Tokens > Create Token
   - Template: "Custom token"
   - Permissions: 
     - Zone:Zone:Read
     - Zone:Page Rules:Edit
     - Account:Cloudflare Pages:Edit

2. **Account ID**: En el dashboard de Cloudflare, lado derecho > Account ID

## Troubleshooting

### Error: "Project not found"
```bash
# Verificar que el proyecto existe
wrangler pages project list

# Crear el proyecto si no existe
wrangler pages project create truejomiv-portfolio
```

### Error: "Authentication required"
```bash
# Re-autenticarse
wrangler auth login
```

### Error de build
```bash
# Limpiar y rebuilds
pnpm run clean
pnpm install
pnpm run build
```

## Estructura de Archivos para Cloudflare

```
public/
  _headers          # Headers HTTP
  _routes.json      # Configuración de rutas
  _redirects        # Redirects (opcional)
wrangler.toml       # Configuración de Wrangler
.dev.vars           # Variables de desarrollo (no incluir en git)
```

## Monitoreo y Logs

```bash
# Ver logs en tiempo real
wrangler pages deployment tail --project-name=truejomiv-portfolio

# Ver deployments
wrangler pages deployment list --project-name=truejomiv-portfolio
```
