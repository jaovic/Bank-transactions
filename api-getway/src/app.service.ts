import { SendTed } from './dto/send.ted.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { depositDto } from './dto/deposit.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('GETWAY_SERVICE') private readonly getwayClient: ClientKafka,
  ) {}

  sendTed(body: SendTed) {
    this.getwayClient.emit('pagamentos', { body });
  }

  deposit(body: depositDto) {
    this.getwayClient.emit('depositos', { body });
  }
}
