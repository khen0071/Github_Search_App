/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <>
      <div className="useritem_container">
        <div className="avatar">
          <img src={avatar_url} alt="Profile" />
        </div>
        <div className="user_info">
          <h3>{login}</h3>
          <Link to={`/user/${login}`}>
            <button className="btn"> Visit Profile</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserItem;
