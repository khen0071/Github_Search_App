/* eslint-disable react/prop-types */
import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
  return (
    <>
      <div className="repo_container">
        <h3>Top 10 Repositories</h3>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </>
  );
};

export default RepoList;
