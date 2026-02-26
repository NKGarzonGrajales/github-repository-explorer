

type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  public_repos: number;
};

type UserCardProps = {
  user: GitHubUser | null;
};

function UserCard({ user }: UserCardProps) {
  if (!user) return null;

  return (
    <div>
      <img
        src={user.avatar_url}
        alt={user.login}
        width="100"
      />
      <h2>{user.login}</h2>
      <p>Public Repos: {user.public_repos}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
      >
        View Profile
      </a>
    </div>
  );
}

export default UserCard;