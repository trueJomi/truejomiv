// Configuración de Prisma para Workers
import { PrismaClient } from '@prisma/client'

// Cache del cliente para reutilizar conexiones
let cachedPrisma: PrismaClient | null = null

export function getPrismaClient(): PrismaClient {
  if (cachedPrisma) {
    return cachedPrisma
  }

  // Solo para desarrollo local - SQLite
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log('[Prisma] Connecting to local SQLite database');
    cachedPrisma = new PrismaClient({
      datasources: {
        db: {
          url: 'file:./prisma/dev.db'
        }
      },
      log: ['error', 'warn']
    })
    return cachedPrisma
  }

  // Para Workers/producción - crear cliente básico
  // Nota: En Workers reales necesitarías una base de datos compatible como Turso
  console.log('[Prisma] Creating basic client for Workers environment');
  try {
    cachedPrisma = new PrismaClient({
      log: ['error']
    })
    return cachedPrisma
  } catch (error) {
    console.error('[Prisma] Error creating client:', error);
    throw new Error('Database connection failed in Workers environment');
  }
}

// Función para cerrar la conexión
export async function disconnectPrisma() {
  if (cachedPrisma) {
    await cachedPrisma.$disconnect()
    cachedPrisma = null
  }
}
