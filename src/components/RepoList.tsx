



type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  language: string | null;
};

type RepoListProps = {
  repos: GitHubRepo[];
};

function RepoList({ repos }: RepoListProps) {
  if (repos.length === 0) return null;

  return (
    <div>
      <h3>Repositories:</h3>
      <ul>
        {repos.map((repo) => (
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;