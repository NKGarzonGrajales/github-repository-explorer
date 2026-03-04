import type { GitHubUser } from "../types/github";


type UserCardProps = {
  user: GitHubUser | null;
};

function UserCard({ user }: UserCardProps) {
  if (!user) return null;

  return (
    <div style={{
    textAlign: "center",
    marginTop: "20px"
  }}>
      <img
        src={user.avatar_url}
        alt={user.login}
        width="90"
        style={{ marginTop: "20px",
          borderRadius: "50%",
           border: "3px solid #e5e7eb"
         }}
      />
      <h2>{user.login}</h2>
      <p>Public Repos: {user.public_repos}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "6px 12px",
          backgroundColor: "#111827",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
          fontSize: "14px"
        }}
      >
        View Profile
      </a>
    </div>
  );
}

export default UserCard;