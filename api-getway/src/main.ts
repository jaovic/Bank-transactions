import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT;
  console.log(`Server running on PORT: ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
