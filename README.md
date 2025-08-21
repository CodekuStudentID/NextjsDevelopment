# REST API CRUD

# install setup prisma
npm install prisma --save-dev
npm install @prisma/client
npx prisma init

# set DB url .env 
DATABASE_URL="mysql://root:@localhost:3306/nextjs_prisma"

# create schema db (prisma/schema.prisma)
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id     Int     @id @default(autoincrement())
  name   String
  email  String  @unique
  posts  Post[]
}

# migrate database prisma
npx prisma migrate dev --name init

# setup prisma (lib/prisma.js)
import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;

