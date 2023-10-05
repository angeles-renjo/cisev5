import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https:/cisev5-24gr1ixbj-my-team-6b67d362.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  dotenv.config();
  const PORT = process.env.PORT || 8000;
  await app.listen(PORT);
}
bootstrap();
