import { Controller, Get } from '@nestjs/common';

export interface HealthResponse {
  status: 'ok';
}

/** Liveness probe for the host (Railway etc.). Must not touch any dependency. */
@Controller('health')
export class HealthController {
  @Get()
  check(): HealthResponse {
    return { status: 'ok' };
  }
}
