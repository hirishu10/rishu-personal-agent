import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    // Database connection initialization
  }

  async onModuleDestroy() {
    // Database disconnection
  }
}
