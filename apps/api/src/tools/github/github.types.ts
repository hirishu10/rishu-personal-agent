export interface GitHubRepo {
  owner: string;
  repo: string;
}

export interface GitHubIssue {
  title: string;
  body?: string;
  labels?: string[];
}

export interface CreateIssueInput extends GitHubRepo, GitHubIssue {}
