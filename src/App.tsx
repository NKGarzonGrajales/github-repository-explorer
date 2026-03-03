import { useState } from "react";
import RepoList from "./components/RepoList";
import UserCard from "./components/UserCard";
/*import type { GitHubRepo, GitHubUser } from "./types/github";*/
/*import { fetchGitHubRepos, fetchGitHubUser } from "./services/githubService";*/
import { useGitHubUser } from "./hooks/useGitHubUser";

function App() {
  const [username, setUsername] = useState("");
  const { user, repos, loading, error } = useGitHubUser(username);
  /*const [user, setUser] = useState<GitHubUser | null>(null);
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

         /* const response = await fetch(
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

          
          
       
  const userData = await fetchGitHubUser(username);
  setUser(userData);

  const reposData = await fetchGitHubRepos(username);
  setRepos(reposData);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          setError("Something went wrong");
          setUser(null);
          setRepos([])
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [username]);*/

  return (
    <div style={{ 
      padding: "2rem", 
      width: "100%",
      maxWidth: "600px",
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 8px 20px, rgba (0 0 0 0.08)",
     }}
    >
      <h1 style={{textAlign: "center"}}>Github Explorer</h1>

      <input
        type="text"
        placeholder="Enter Github username"
        value={username}
        maxLength={15}
        onChange={(e) => setUsername(e.target.value)}
      />
     {username.length > 0 && username.length < 3 && (
      <p style={{color: "gray"}}>Username must be at least 3 characters</p>
)}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

    {/*  {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.login}</h2>
          <p>Public Repos: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )} */}
      <UserCard user={user} />
      <RepoList repos={repos} />

{/*      {repos.length > 0 && (
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
      )} */}
    </div>
  );
}

export default App;
