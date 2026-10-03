import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubService {
  async getProfile(userId: string) {
    return {
      userId,
      username: 'hirishu10',
      bio: 'Software Engineer & AI Enthusiast',
      publicRepos: 12,
    };
  }

  async getRepositories(userId: string) {
    return [
      { name: 'rishu-personal-agent', private: false, language: 'TypeScript' },
      { name: 'learning-notes', private: true, language: 'Markdown' },
    ];
  }

  async getRecentCommits(userId: string, repository?: string) {
    return [
      {
        repository: repository || 'rishu-personal-agent',
        message: 'feat: setup agent architecture and tools',
        timestamp: new Date().toISOString(),
      },
    ];
  }
}
