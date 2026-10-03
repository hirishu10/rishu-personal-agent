import { Injectable } from '@nestjs/common';
import { ToolDefinition } from '../../agent/tool-registry.js';
import { LearningService } from './learning.service.js';

@Injectable()
export class LearningTool implements ToolDefinition {
  name = 'learning';
  description = 'Log and retrieve learning summaries and topics';
  parameters = {
    type: 'object',
    properties: {
      action: { type: 'string', enum: ['log', 'get'] },
      topic: { type: 'string' },
      summary: { type: 'string' },
      tags: { type: 'array', items: { type: 'string' } },
    },
    required: ['action'],
  };

  constructor(private readonly learningService: LearningService) {}

  async execute(params: any) {
    if (params.action === 'log') {
      return this.learningService.logLearning({
        topic: params.topic,
        summary: params.summary,
        tags: params.tags,
      });
    }
    if (params.action === 'get') {
      return this.learningService.getLearnings(params.topic);
    }
    throw new Error(`Unsupported action: ${params.action}`);
  }
}
