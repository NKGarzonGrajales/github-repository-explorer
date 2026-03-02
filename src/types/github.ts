export type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  stargazers_count: number;
};

export type GitHubRepo = {
  stargazers_count: ReactNode;
  id: number;
  name: string;
  html_url: string;
  language: string | null;
};