import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class RepositoryService {
  async findByEmail(email: string) {
    try {
      return await prisma.user.findUnique({
        where: { email },
      });
    } catch (error) {
      throw new Error(`Prisma Error: ${error}`);
    }
  }

  async findById(id: string) {
    try {
      return await prisma.user.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Prisma Error: ${error}`);
    }
  }
}
