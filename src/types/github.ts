export type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  public_repos: number;
};

export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  language: string | null;
};