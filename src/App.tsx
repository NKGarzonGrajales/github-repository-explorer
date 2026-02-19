import { useEffect, useState } from "react";

type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  public_repos: number;
};

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  language: string | null;
};

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    if (username.length < 3) return;

    const timeoutId = setTimeout(() => {
      const fetchUser = async () => {
        try {
          setLoading(true);
          setError(null);

          const response = await fetch(
            `https://api.github.com/users/${username}`
          );

          if (!response.ok) {
            throw new Error("User not found");
          }

          const data: GitHubUser = await response.json();
          setUser(data);

          const reposResponse = await fetch(
            `https://api.github.com/users/${username}/repos`
          );

          if (!reposResponse.ok) {
            throw new Error("Repos not found");
          }

          const reposData: GitHubRepo[] = await reposResponse.json();
          setRepos(reposData);
        } catch {
          setError("Something went wrong");
          setUser(null);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [username]);

  return (
    <div style={{ padding: "2rm" }}>
      <h1>Github Explorer</h1>

      <input
        type="text"
        placeholder="Enter Github username"
        value={username}
        maxLength={15}
        onChange={(e) => setUsername(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.login}</h2>
          <p>Public Repos: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}

      {repos.length > 0 && (
        <div>
          <h3>Repositories:</h3>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
                {repo.language && <span> — {repo.language}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
