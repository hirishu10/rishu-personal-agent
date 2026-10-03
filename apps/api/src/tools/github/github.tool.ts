import { Injectable } from '@nestjs/common';
import { ToolDefinition } from '../../agent/tool-registry.js';
import { GitHubService } from './github.service.js';

@Injectable()
export class GitHubTool implements ToolDefinition {
  name = 'github';
  description = 'Interact with GitHub repositories and issues';
  parameters = {
    type: 'object',
    properties: {
      action: { type: 'string', enum: ['listRepos', 'createIssue'] },
      owner: { type: 'string' },
      repo: { type: 'string' },
      title: { type: 'string' },
      body: { type: 'string' },
    },
    required: ['action'],
  };

  constructor(private readonly githubService: GitHubService) {}

  async execute(params: any) {
    if (params.action === 'listRepos') {
      return this.githubService.listRepositories();
    }
    if (params.action === 'createIssue') {
      return this.githubService.createIssue(params);
    }
    throw new Error(`Unsupported action: ${params.action}`);
  }
}
