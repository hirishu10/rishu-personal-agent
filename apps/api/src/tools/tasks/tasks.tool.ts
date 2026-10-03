import { Injectable } from '@nestjs/common';
import { ToolDefinition } from '../../agent/tool-registry.js';
import { TasksService } from './tasks.service.js';

@Injectable()
export class TasksTool implements ToolDefinition {
  name = 'tasks';
  description = 'Manage personal tasks and todos';
  parameters = {
    type: 'object',
    properties: {
      action: { type: 'string', enum: ['list', 'create'] },
      title: { type: 'string' },
      description: { type: 'string' },
      status: { type: 'string', enum: ['pending', 'in_progress', 'completed'] },
    },
    required: ['action'],
  };

  constructor(private readonly tasksService: TasksService) {}

  async execute(params: any) {
    if (params.action === 'list') {
      return this.tasksService.listTasks();
    }
    if (params.action === 'create') {
      return this.tasksService.createTask({
        title: params.title,
        description: params.description,
        status: params.status || 'pending',
      });
    }
    throw new Error(`Unsupported action: ${params.action}`);
  }
}
