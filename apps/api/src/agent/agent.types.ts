export interface AgentRequest {
  prompt: string;
  context?: Record<string, unknown>;
  history?: AgentMessage[];
}

export interface AgentMessage {
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  toolCallId?: string;
  name?: string;
}

export interface AgentResponse {
  response: string;
  toolCalls?: AgentToolCall[];
}

export interface AgentToolCall {
  id: string;
  name: string;
  parameters: Record<string, unknown>;
  result?: unknown;
}
