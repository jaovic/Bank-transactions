import { UserService } from './user.service';
import { Controller, Inject } from '@nestjs/common';
import { ClientKafka, EventPattern, Payload } from '@nestjs/microservices';
import { newClientDto } from './dto/new.client.dto';
import { tedPaymentoDto } from './dto/ted.payment.dto';
import { depositDto } from './dto/deposit.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  @EventPattern('newClients')
  async getClient(@Payload() message: newClientDto): Promise<any> {
    await this.userService.getClient(message);
  }

  @EventPattern('pagamentos')
  async getPayments(@Payload() message: tedPaymentoDto): Promise<any> {
    await this.userService.getPayments(message);
  }

  @EventPattern('depositos')
  async deposit(@Payload() message: depositDto): Promise<any> {
    await this.userService.deposit(message);
  }
}
