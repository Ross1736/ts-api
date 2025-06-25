import { PrismaClient } from "@prisma/client";
import config from "./config";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (!config.app.prod) globalForPrisma.prisma = prisma;
