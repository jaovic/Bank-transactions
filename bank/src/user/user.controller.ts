import { UserService } from './user.service';
import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage, Producer } from 'kafkajs';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject('KAFKA_PRODUCER')
    private kafkaProducer: Producer,
  ) {}

  @MessagePattern('newClients')
  async getClient(body: any) {
    console.log(body);
  }

  @MessagePattern('pagamentos')
  async getPayments(@Payload() message: KafkaMessage): Promise<any> {
    console.log(message.value);
  }
}
