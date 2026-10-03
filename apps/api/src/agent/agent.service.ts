import { Injectable } from '@nestjs/common';
import { AgentRequest, AgentResponse } from './agent.types.js';
import { ToolRegistry } from './tool-registry.js';

@Injectable()
export class AgentService {
  constructor(private readonly toolRegistry: ToolRegistry) {}

  async processRequest(request: AgentRequest): Promise<AgentResponse> {
    return {
      response: `Received prompt: ${request.prompt}`,
      toolCalls: [],
    };
  }
}
