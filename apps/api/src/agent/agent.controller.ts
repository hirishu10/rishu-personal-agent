import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';

import { AgentService } from './agent.service.js';

@Controller('agent')
export class AgentController {
  constructor(
    private readonly agentService: AgentService,
  ) {}

  @Post('chat')
  async chat(
    @Body()
    body: {
      message: string;
      userId: string;
      conversationId?: string;
    },
  ) {
    return this.agentService.run(
      body.message,
      {
        userId: body.userId,
        conversationId: body.conversationId,
      },
    );
  }
}
