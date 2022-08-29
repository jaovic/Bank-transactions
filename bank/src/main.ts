import { Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
        consumer: {
          groupId: 'getway-consumer',
        },
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(3006);
}
bootstrap();
