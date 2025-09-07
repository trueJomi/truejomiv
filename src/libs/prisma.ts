import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { PrismaClient } from "@prisma/client";

const {
    TURSO_DATABASE_URL,
    TURSO_AUTH_TOKEN
} = import.meta.env;

// Configuración del adaptador con manejo de errores
let adapter: PrismaLibSQL | undefined;

const isProduction = process.env.NODE_ENV === 'production'

try {
    if (TURSO_DATABASE_URL) {
        adapter = new PrismaLibSQL({
            url: TURSO_DATABASE_URL,
            authToken: TURSO_AUTH_TOKEN,
        });
    }
} catch (error) {
    console.error('Error configurando adaptador Turso:', error);
}

// Configuración del cliente Prisma con opciones optimizadas para Cloudflare
export const prisma = new PrismaClient({
    adapter: adapter,
    log: isProduction ? ['error'] : ['info', 'warn', 'error'],
});

// Manejo de conexión para el entorno serverless
if (typeof globalThis !== 'undefined') {
    (globalThis as any).__prisma = prisma;
}
