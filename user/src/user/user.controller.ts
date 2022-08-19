import { UserService } from './user.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from 'kafkajs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('balance')
  async getBalance() {
    return { balance: 'teste' };
  }
  @MessagePattern('clients')
  async getClients(@Payload() message: KafkaMessage): Promise<any> {
    console.log(message.value);
  }
}
