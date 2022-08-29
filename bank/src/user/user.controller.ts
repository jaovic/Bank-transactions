import { UserService } from './user.service';
import { Controller, Inject } from '@nestjs/common';
import { ClientKafka, EventPattern, Payload } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  @EventPattern('newClients')
  async getClient(@Payload() message: any): Promise<any> {
    console.log(message);
  }

  @EventPattern('pagamentos')
  async getPayments(@Payload() message: any): Promise<any> {
    console.log(message.body.value);
  }
}
