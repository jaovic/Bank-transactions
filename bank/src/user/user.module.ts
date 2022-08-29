import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'auth-consumer',
          },
        },
      },
    ]),
  ],
  providers: [UserService, JwtStrategy],
  controllers: [UserController],
})
export class UserModule {}
