import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Origin',
      'https://cisev5-g8w8.vercel.app/',
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  });

  dotenv.config();
  const PORT = process.env.PORT || 8000;
  await app.listen(PORT);
}
bootstrap();
