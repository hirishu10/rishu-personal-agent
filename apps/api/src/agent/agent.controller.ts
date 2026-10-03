import { Body, Controller, Post } from '@nestjs/common';
import { AgentService } from './agent.service.js';
import { AgentRequest, AgentResponse } from './agent.types.js';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Post('chat')
  async chat(@Body() request: AgentRequest): Promise<AgentResponse> {
    return this.agentService.processRequest(request);
  }
}
