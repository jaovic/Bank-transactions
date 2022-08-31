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
  const PORT = process.env.PORT;
  console.log(`Server running on PORT: ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
