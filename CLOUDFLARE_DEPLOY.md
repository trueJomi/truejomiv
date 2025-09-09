# 🚀 Despliegue en Cloudflare Workers

## URLs del Proyecto

- **Producción**: https://truejomiv-production.truejomiv.workers.dev
- **Preview**: https://truejomiv-preview.truejomiv.workers.dev (cuando despliegues con preview)

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

## Comandos de Despliegue

### Desarrollo Local
```bash
# Ejecutar en modo desarrollo (Astro)
pnpm run dev

# Ejecutar con Wrangler (simula entorno de Workers)
pnpm run cf:local

# Solo Wrangler dev (requiere build previo)
pnpm run cf:dev
```

### Despliegue

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
# Limpiar caché y rebuild
pnpm run clean && pnpm run build

# Ver logs en tiempo real
pnpm run cf:tail

# Versión específica con logs
npx wrangler tail truejomiv-production

# Listar deployments
npx wrangler deployments list
```

## Configuración de Variables de Entorno

### En el Dashboard de Cloudflare Workers:

1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Selecciona **Workers & Pages** > **truejomiv**
3. Ve a **Settings** > **Variables**
4. Añade las siguientes variables:

**Para Production:**
- `NODE_ENV`: `production`
- `DATABASE_URL`: `[tu-database-url-de-producción]`
- `DATABASE_AUTH_TOKEN`: `[tu-auth-token]` (si usas Turso)

**Para Preview:**
- `NODE_ENV`: `preview`
- `DATABASE_URL`: `[tu-database-url-de-preview]`

### Usando Wrangler CLI:
```bash
# Establecer variables de entorno
npx wrangler secret put DATABASE_URL --env production
npx wrangler secret put DATABASE_AUTH_TOKEN --env production
```

## Configuración de Dominio Personalizado (Opcional)

### Si tienes un dominio en Cloudflare:

1. Ve a **Workers & Pages** > **truejomiv** > **Triggers**
2. Añade **Custom Domain**: `truejomiv.com`
3. O actualiza `wrangler.toml`:

```toml
[[routes]]
pattern = "truejomiv.com/*"
zone_name = "truejomiv.com"
```

## KV Storage (Sesiones)

El Worker tiene acceso a:
- **KV Namespace**: `SESSION`
- **Production ID**: `6ac98eff6251481ea532fc8803107261`
- **Preview ID**: `ba245076e100408c804282d22a44c118`

## Base de Datos

### Desarrollo Local
- Usa SQLite: `file:./prisma/dev.db`

### Producción (recomendado)
- Usa Turso (LibSQL): configura `DATABASE_URL` y `DATABASE_AUTH_TOKEN`

### Configurar Turso:
```bash
# Instalar Turso CLI
curl -sSfL https://get.tur.so/install.sh | bash

# Crear base de datos
turso db create truejomiv-prod
turso db show truejomiv-prod

# Obtener URL y token
turso db show truejomiv-prod --url
turso db tokens create truejomiv-prod
```

## Troubleshooting

### Error: "Invalid binding SESSION"
- Verifica que el KV namespace existe: `npx wrangler kv namespace list`
- El binding ya está configurado en `wrangler.toml`

### Error: "Could not find zone"
- Comenta las rutas del dominio en `wrangler.toml` si no tienes el dominio en Cloudflare
- Usa la URL de workers.dev para pruebas

### Error de build con Prisma
```bash
# Regenerar cliente
pnpm run generate

# Limpiar y rebuilds
pnpm run clean
pnpm install
pnpm run build
```

### Error de importación
- El código usa `@/libs/prisma-workers` que maneja automáticamente SQLite local vs LibSQL en producción

## Monitoreo y Logs

```bash
# Ver logs en tiempo real
pnpm run cf:tail

# Ver deployments
npx wrangler deployments list

# Ver métricas
npx wrangler dev --inspect
```

## Estructura de Workers

```
dist/
  _worker.js          # Entry point del Worker
  _astro/            # Assets estáticos
  sitemap*.xml       # Sitemaps
public/
  _headers           # Headers HTTP
  _routes.json       # Configuración de rutas
```
