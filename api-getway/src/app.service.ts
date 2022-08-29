import { SendTed } from './dto/send.ted.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('GETWAY_SERVICE') private readonly getwayClient: ClientKafka,
  ) {}

  sendTed(body: SendTed) {
    this.getwayClient.emit('pagamentos', { body });
  }
}
