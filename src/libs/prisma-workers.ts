// Configuración de Prisma para Workers
import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

// Cache del cliente para reutilizar conexiones
let cachedPrisma: PrismaClient | null = null

export function getPrismaClient(): PrismaClient {
  if (cachedPrisma) {
    return cachedPrisma
  }

  // Configuración para development (SQLite local)
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
    cachedPrisma = new PrismaClient({
      datasources: {
        db: {
          url: 'file:./prisma/dev.db'
        }
      }
    })
    return cachedPrisma
  }

  // Configuración para Workers (Turso/LibSQL)
  const libsql = createClient({
    url: process.env.DATABASE_URL || 'file:./prisma/dev.db',
    authToken: process.env.DATABASE_AUTH_TOKEN
  })

  const adapter = new PrismaLibSQL(libsql)
  
  cachedPrisma = new PrismaClient({ 
    adapter,
    log: ['error']
  })

  return cachedPrisma
}

// Función para cerrar la conexión
export async function disconnectPrisma() {
  if (cachedPrisma) {
    await cachedPrisma.$disconnect()
    cachedPrisma = null
  }
}
