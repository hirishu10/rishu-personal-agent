import { Injectable } from '@nestjs/common';
import { ToolRegistry } from './tool-registry.js';
import { AgentToolContext } from './agent.types.js';

@Injectable()
export class AgentService {
  constructor(
    private readonly toolRegistry: ToolRegistry,
  ) {}

  async run(
    message: string,
    context: AgentToolContext,
  ) {
    // Temporary implementation.
    // Later the LLM will decide which tool to call.

    if (message.toLowerCase().includes('task')) {
      const tool = this.toolRegistry.get('tasks');

      return tool.execute(
        {
          action: 'list',
        },
        context,
      );
    }

    if (
      message.toLowerCase().includes('github')
    ) {
      const tool = this.toolRegistry.get('github');

      return tool.execute(
        {
          action: 'repositories',
        },
        context,
      );
    }

    if (
      message.toLowerCase().includes('learning')
    ) {
      const tool =
        this.toolRegistry.get('learning_notes');

      return tool.execute(
        {
          action: 'search',
        },
        context,
      );
    }

    return {
      message:
        'I understand the request, but no tool is required.',
    };
  }
}
