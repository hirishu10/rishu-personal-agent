import { Injectable } from '@nestjs/common';

export interface ToolDefinition {
  name: string;
  description: string;
  parameters: Record<string, unknown>;
  execute: (params: any) => Promise<any>;
}

@Injectable()
export class ToolRegistry {
  private readonly tools = new Map<string, ToolDefinition>();

  registerTool(tool: ToolDefinition) {
    this.tools.set(tool.name, tool);
  }

  getTool(name: string): ToolDefinition | undefined {
    return this.tools.get(name);
  }

  getAllTools(): ToolDefinition[] {
    return Array.from(this.tools.values());
  }
}
