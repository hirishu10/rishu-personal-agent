import {
  AgentTool,
  AgentToolContext,
} from '../../agent/agent.types.js';
import { GithubService } from './github.service.js';

export class GithubTool implements AgentTool {
  name = 'github';

  description = `
Use this tool to access Rishu's GitHub information.

Capabilities:
- Get GitHub profile
- List repositories
- Get repository information
- Get recent commits
- Get issues
- Get pull requests
`;

  constructor(
    private readonly githubService: GithubService,
  ) {}

  async execute(
    input: unknown,
    context: AgentToolContext,
  ): Promise<unknown> {
    const request = input as {
      action: string;
      repository?: string;
    };

    switch (request.action) {
      case 'profile':
        return this.githubService.getProfile(context.userId);

      case 'repositories':
        return this.githubService.getRepositories(
          context.userId,
        );

      case 'commits':
        return this.githubService.getRecentCommits(
          context.userId,
          request.repository,
        );

      default:
        throw new Error(
          `Unsupported GitHub action: ${request.action}`,
        );
    }
  }
}
