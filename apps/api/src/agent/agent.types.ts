export interface AgentToolContext {
  userId: string;
  conversationId?: string;
}

export interface AgentTool {
  name: string;
  description: string;

  execute(
    input: unknown,
    context: AgentToolContext,
  ): Promise<unknown>;
}
