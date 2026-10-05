import 'reflect-metadata';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module.js';
import { loadEnv } from './config/env.js';

async function bootstrap(): Promise<void> {
  const env = loadEnv(process.env);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.disable('x-powered-by'); // do not advertise the framework
  app.enableShutdownHooks();
  await app.listen(env.PORT, env.HOST);
  new Logger('Bootstrap').log(`Wely API listening on ${env.HOST}:${env.PORT} (${env.NODE_ENV})`);
}

void bootstrap();
