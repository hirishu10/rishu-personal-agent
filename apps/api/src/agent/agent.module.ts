import { Module } from '@nestjs/common';
import { AgentController } from './agent.controller.js';
import { AgentService } from './agent.service.js';
import { ToolRegistry } from './tool-registry.js';

@Module({
  controllers: [AgentController],
  providers: [AgentService, ToolRegistry],
  exports: [AgentService, ToolRegistry],
})
export class AgentModule {}
