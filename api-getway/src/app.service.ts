import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderRequest } from './dto/create-order-request.dto';
import { OrderCreatedEvent } from './dto/order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('GETWAY_SERVICE') private readonly billingClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createOrder({ userId, price }: CreateOrderRequest) {
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price),
    );
  }
}
