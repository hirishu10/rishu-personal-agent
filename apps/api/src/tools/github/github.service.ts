import { Injectable } from '@nestjs/common';
import { CreateIssueInput, GitHubRepo } from './github.types.js';

@Injectable()
export class GitHubService {
  async listRepositories(): Promise<GitHubRepo[]> {
    return [];
  }

  async createIssue(input: CreateIssueInput): Promise<{ id: number; url: string }> {
    return { id: 1, url: `https://github.com/${input.owner}/${input.repo}/issues/1` };
  }
}
