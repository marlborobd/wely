import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller.js';

/**
 * Root module. Feature modules (auth, users, places, routing, transit-data, events, consent,
 * feature-flags, admin) are added in their own approved steps.
 */
@Module({ controllers: [HealthController] })
export class AppModule {}
