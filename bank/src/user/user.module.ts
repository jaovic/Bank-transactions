import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { Producer } from 'kafkajs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'bank',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'bank-consumer',
          },
        },
      },
    ]),
  ],
  providers: [
    UserService,
    JwtStrategy,
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (kafkaService: ClientKafka): Promise<Producer> => {
        return kafkaService.connect();
      },
      inject: ['KAFKA_SERVICE'],
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
