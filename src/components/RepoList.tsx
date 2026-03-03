import type { GitHubRepo } from "../types/github";
import { useMemo } from "react";


type RepoListProps = {
  repos: GitHubRepo[];
};

function RepoList({ repos }: RepoListProps) {
  if (repos.length === 0) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const sortedRepos = useMemo( () => {
   return [...repos].sort(
  (a, b) => b.stargazers_count - a.stargazers_count
);
  }, [repos]); 

  return (
    <div>
      <h3>Repositories:</h3>
      <ul>
        {sortedRepos.map((repo) => (
          <li key={repo.id}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {repo.name}
            </a>
            {repo.language && (
              <span> — {repo.language}</span>
            )}
            <span> ⭐ {repo.stargazers_count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;