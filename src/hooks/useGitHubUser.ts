import { useEffect, useState } from "react";
import type { GitHubUser, GitHubRepo } from "../types/github";
import {
  fetchGitHubUser,
  fetchGitHubRepos,
} from "../services/githubService";

export function useGitHubUser(username: string) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (username.length < 3) return;

    const timeoutId = setTimeout(() => {
      const loadData = async () => {
        try {
          setLoading(true);
          setError(null);

          const userData = await fetchGitHubUser(username);
          setUser(userData);

          const reposData = await fetchGitHubRepos(username);
          setRepos(reposData);
        } catch {
          setError("Something went wrong");
          setUser(null);
          setRepos([]);
        } finally {
          setLoading(false);
        }
      };

      loadData();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [username]);

  return { user, repos, loading, error };
}