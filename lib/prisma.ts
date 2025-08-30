// Logika: Prisma Client dibuat global biar tidak duplicate saat dev mode
import { PrismaClient } from '../src/generated/prisma';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ log: ["query"], // tampilkan query di console saat development 
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
