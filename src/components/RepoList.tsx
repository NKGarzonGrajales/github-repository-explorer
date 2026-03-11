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
).slice(0, 5);;
  }, [repos]); 

  return (
    <div>
      <h3>Top Repositories:</h3>
      <ul>
        {sortedRepos.map((repo) => (
          <li key={repo.id}
              style={{
                padding: "10px 0",
                borderBottom: "1px solid #e5e7eb"
              }}
              className="repo-item">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#1f2937",
                fontWeight: "600",
                textDecoration: "none"
              }}
            >
              {repo.name}
            </a>
      <div 
      style={{
      fontSize: "14px",
      color: "#6b7280",
      marginTop: "4px"
    }}
  > 
            {repo.language && (
              <span > — {repo.language}</span>
            )}
            <span style={{ marginLeft: "10px" }}> ⭐ {repo.stargazers_count}</span>
            </div>
          </li>          
        ))}
      </ul>
    </div>
  );
}

export default RepoList;