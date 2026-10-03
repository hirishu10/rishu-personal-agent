import { Injectable } from '@nestjs/common';
import { TaskItem } from './tasks.types.js';

@Injectable()
export class TasksService {
  private tasks: TaskItem[] = [];

  async listTasks(): Promise<TaskItem[]> {
    return this.tasks;
  }

  async createTask(task: Omit<TaskItem, 'id'>): Promise<TaskItem> {
    const newTask: TaskItem = {
      id: String(this.tasks.length + 1),
      ...task,
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
