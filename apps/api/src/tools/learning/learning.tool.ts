import {
  AgentTool,
  AgentToolContext,
} from '../../agent/agent.types.js';
import { LearningService } from './learning.service.js';

export class LearningTool implements AgentTool {
  name = 'learning_notes';

  description = `
Use this tool to manage Rishu's developer learning notes.

Capabilities:
- Create learning note
- Search learning notes
- Get notes by topic
- Update notes
`;

  constructor(
    private readonly learningService: LearningService,
  ) {}

  async execute(
    input: unknown,
    context: AgentToolContext,
  ): Promise<unknown> {
    const request = input as {
      action: string;
      title?: string;
      content?: string;
      topic?: string;
    };

    switch (request.action) {
      case 'create':
        if (!request.title || !request.content) {
          throw new Error(
            'Title and content are required',
          );
        }

        return this.learningService.create({
          userId: context.userId,
          title: request.title,
          content: request.content,
          topic: request.topic,
        });

      case 'search':
        return this.learningService.search(
          context.userId,
          request.topic,
        );

      default:
        throw new Error(
          `Unsupported learning action: ${request.action}`,
        );
    }
  }
}
