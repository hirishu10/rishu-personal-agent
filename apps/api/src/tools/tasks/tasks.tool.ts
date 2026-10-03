import {
  AgentTool,
  AgentToolContext,
} from '../../agent/agent.types.js';
import { TasksService } from './tasks.service.js';

export class TasksTool implements AgentTool {
  name = 'tasks';

  description = `
Use this tool to manage Rishu's personal developer tasks.

Capabilities:
- Create task
- List tasks
- Complete task
- Update task
- Delete task
`;

  constructor(
    private readonly tasksService: TasksService,
  ) {}

  async execute(
    input: unknown,
    context: AgentToolContext,
  ): Promise<unknown> {
    const request = input as {
      action: string;
      title?: string;
      taskId?: string;
    };

    switch (request.action) {
      case 'create':
        if (!request.title) {
          throw new Error('Task title is required');
        }

        return this.tasksService.create({
          userId: context.userId,
          title: request.title,
        });

      case 'list':
        return this.tasksService.findAll(
          context.userId,
        );

      case 'complete':
        if (!request.taskId) {
          throw new Error('Task ID is required');
        }

        return this.tasksService.complete(
          context.userId,
          request.taskId,
        );

      default:
        throw new Error(
          `Unsupported task action: ${request.action}`,
        );
    }
  }
}
