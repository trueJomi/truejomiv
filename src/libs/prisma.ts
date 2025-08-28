import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { PrismaClient } from "@prisma/client";

const {
    TURSO_DATABASE_URL,
    TURSO_AUTH_TOKEN
} = import.meta.env;

const adapter = new PrismaLibSQL({
    url: TURSO_DATABASE_URL,
    authToken: TURSO_AUTH_TOKEN,
});

export const prisma = new PrismaClient({
   adapter: adapter
});
