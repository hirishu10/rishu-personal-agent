export interface BaseAgentMessage {
  id?: string;
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  timestamp?: number;
}

export interface BaseAgentResponse {
  response: string;
  toolCalls?: Array<{
    id: string;
    name: string;
    parameters: Record<string, unknown>;
  }>;
}

export type TaskStatus = 'pending' | 'in_progress' | 'completed';

export interface SharedTask {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
}
