import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
import { newClientDto } from 'src/user/dto/new.client.dto';

const prisma = new PrismaClient();

@Injectable()
export class RepositoryService {
  async saveClient(body: newClientDto) {
    try {
      return await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
          phone: body.phone,
          cpf: body.cpf,
          accountId: body.id,
        },
      });
    } catch (error: any) {
      throw new Error(`Prisma Error: ${error}`);
    }
  }

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

  async findByAccountId(id: string) {
    try {
      return await prisma.user.findUnique({
        where: { accountId: id },
      });
    } catch (error) {
      throw new Error(`Prisma Error: ${error}`);
    }
  }

  async saveDeposit(accountId: string, value: number) {
    try {
      return await prisma.user.updateMany({
        where: { accountId },
        data: { balance: value },
      });
    } catch (error) {
      throw new Error(`Prisma Error: ${error}`);
    }
  }
}
