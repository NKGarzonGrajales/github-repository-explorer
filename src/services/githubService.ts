import type { GitHubUser, GitHubRepo } from "../types/github";

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const response = await fetch(
    `https://api.github.com/users/${username}`
  );

  if (!response.ok) {
    throw new Error("User not found");
  }

  return response.json();
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );

  if (!response.ok) {
    throw new Error("Repos not found");
  }

  return response.json();
}