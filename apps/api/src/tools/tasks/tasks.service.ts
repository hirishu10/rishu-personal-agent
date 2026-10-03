import { Injectable } from '@nestjs/common';

export interface TaskRecord {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

@Injectable()
export class TasksService {
  private tasks: TaskRecord[] = [];

  async create(data: { userId: string; title: string }) {
    const newTask: TaskRecord = {
      id: String(this.tasks.length + 1),
      userId: data.userId,
      title: data.title,
      completed: false,
      createdAt: new Date(),
    };
    this.tasks.push(newTask);
    return newTask;
  }

  async findAll(userId: string) {
    return this.tasks.filter((t) => t.userId === userId);
  }

  async complete(userId: string, taskId: string) {
    const task = this.tasks.find((t) => t.userId === userId && t.id === taskId);
    if (!task) {
      throw new Error(`Task with id ${taskId} not found`);
    }
    task.completed = true;
    return task;
  }
}
