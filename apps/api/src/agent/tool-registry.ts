import { Injectable } from '@nestjs/common';
import { AgentTool } from './agent.types.js';
import { GithubTool } from '../tools/github/github.tool.js';
import { TasksTool } from '../tools/tasks/tasks.tool.js';
import { LearningTool } from '../tools/learning/learning.tool.js';

@Injectable()
export class ToolRegistry {
  private readonly tools: Map<string, AgentTool>;

  constructor(
    githubTool: GithubTool,
    tasksTool: TasksTool,
    learningTool: LearningTool,
  ) {
    this.tools = new Map<string, AgentTool>([
      [githubTool.name, githubTool],
      [tasksTool.name, tasksTool],
      [learningTool.name, learningTool],
    ]);
  }

  get(name: string): AgentTool {
    const tool = this.tools.get(name);

    if (!tool) {
      throw new Error(`Tool not found: ${name}`);
    }

    return tool;
  }

  getAll(): AgentTool[] {
    return Array.from(this.tools.values());
  }
}
