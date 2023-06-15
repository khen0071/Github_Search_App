/* eslint-disable react/prop-types */
import moment from "moment/moment";

import { motion } from "framer-motion";

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
    created_at,
    updated_at,
  } = repo;

  var createdString = created_at;
  var createdMomentObj = moment.utc(createdString);
  var createdFormattedDate = createdMomentObj.format("MM-DD-YYYY");

  var updatedString = updated_at;
  var updatedMomentObj = moment.utc(updatedString);
  var updatedFormattedDate = updatedMomentObj.format("MM-DD-YYYY");

  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.03,
        }}
        className="repo_item_container"
      >
        <div className="repo_item_text">
          <div className="repo_link">
            <div className="repo_icon">
              <i className="github fa-brands fa-github-alt"></i>
              <span>{name}</span>
            </div>

            <a href={html_url}>
              <button className="btn">Visit Repository</button>
            </a>
          </div>
          <div className="description">Description: </div>
          <p>- {description}</p>

          <div className="repo_icons_container">
            <div className="repo_icons">
              <i className="eye fa-solid fa-eye"></i>
              {watchers_count}
            </div>
            <div className="repo_icons">
              <i className="star fa-solid fa-star"></i> {stargazers_count}
            </div>
            <div className="repo_icons">
              <i className="exclamation fa-solid fa-exclamation"></i>{" "}
              {open_issues}
            </div>
            <div className="repo_icons">
              <i className="fork fa-solid fa-code-fork"></i> {forks}
            </div>
          </div>
          <div className="repo_dates">
            <p className="created">Created At: {createdFormattedDate}</p>
            <p className="updated">Updated At: {updatedFormattedDate}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default RepoItem;
