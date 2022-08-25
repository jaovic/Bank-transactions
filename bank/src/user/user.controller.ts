import { UserService } from './user.service';
import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage, Producer } from 'kafkajs';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject('KAFKA_PRODUCER')
    private kafkaProducer: Producer,
  ) {}
  // @UseGuards(AuthGuard('jwt'))
  @Get('balance')
  async getBalance() {
    this.kafkaProducer.send({
      topic: 'pagamentos',
      messages: [{ key: 'pagamentos', value: 'teste' }],
    });
    return true;
  }
  @MessagePattern('pagamentos')
  async getClients(@Payload() message: KafkaMessage): Promise<any> {
    console.log(message.value);
  }
}
