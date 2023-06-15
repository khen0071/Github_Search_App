/* eslint-disable react/no-unescaped-entities */
import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import GitHubContext from "../context/github/GitHubContext";
import Spinner from "../components/Loader";

import RepoList from "../components/users/RepoList";

import { getUser, getUserRepos } from "../context/github/GithubActions";

import { motion } from "framer-motion";

import AnimatedPage from "../components/AnimatedPage";

const buttonVariant = {
  initial: {
    y: "100vh",
  },
  animate: {
    y: 0,
    transition: {
      delay: 1,
    },
  },
};

const UserPage = () => {
  const { user, loading, repos, dispatch } = useContext(GitHubContext);

  const params = useParams();
  useEffect(() => {
    dispatch({
      type: "SET_LOADING",
    });
    const getUserData = async () => {
      const userData = await getUser(params.login);
      dispatch({
        type: "GET_USER",
        payload: userData,
      });

      const userRepoData = await getUserRepos(params.login);
      dispatch({
        type: "GET_REPOS",
        payload: userRepoData,
      });
    };
    getUserData();
  }, []);

  const {
    name,
    company,
    location,
    avatar_url,
    bio,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <AnimatedPage>
        <div className="user_container">
          <Link to="/">
            <motion.button
              variants={buttonVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="user_btn"
            >
              Back To Search
            </motion.button>
          </Link>

          <div className="user_components_container">
            <Row>
              <Col md={4} xs={12} className="img_container">
                <motion.figure
                  initial={{
                    scale: 1.2,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{ duration: 1 }}
                >
                  <motion.img
                    whileHover={{
                      scale: 1.03,
                    }}
                    src={avatar_url}
                    alt="avatar"
                  />
                </motion.figure>
              </Col>
              <Col md={8} xs={12}>
                <motion.div
                  initial={{
                    scale: 1.1,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{ duration: 1 }}
                  className="github_button"
                >
                  <h3>{name}</h3>
                  <a href={html_url} target="_blank" rel="noopener noreferrer">
                    <button className="btn">VISIT GITHUB PROFILE</button>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="profile_container"
                >
                  <div className="profile_text">
                    {bio === null ? (
                      <h4 style={{ color: "#F72119" }}>No Bio Available</h4>
                    ) : (
                      <h4>"{bio}"</h4>
                    )}
                  </div>
                  <Row>
                    <Col xs={12} lg={6} md={6}>
                      <div className="profile_text_container">
                        <div>
                          <i className="fa-solid fa-building"></i>
                        </div>
                        <div>
                          <p className="profile_title">Company</p>
                          <div className="profile_text">
                            {company === null ? (
                              <p style={{ color: "#F72119" }}>Not Indicated</p>
                            ) : (
                              <p>{company}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} lg={6} md={6}>
                      <div className="profile_text_container">
                        <div>
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div>
                          <p className="profile_title">Location</p>
                          <div className="profile_text">
                            {location === null ? (
                              <p style={{ color: "#F72119" }}>Not Indicated</p>
                            ) : (
                              <p>{location}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12} lg={6} md={6}>
                      <div className="profile_text_container">
                        <div>
                          <i className="fa-solid fa-link"></i>
                        </div>
                        <div>
                          <p className="profile_title">Website</p>
                          <div className="profile_text">
                            {blog === "" ? (
                              <p style={{ color: "#F72119" }}>Not Indicated</p>
                            ) : (
                              <p>{blog}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} lg={6} md={6}>
                      <div className="profile_text_container">
                        <div>
                          <i className="fa-solid fa-pen-nib"></i>
                        </div>
                        <div>
                          <p className="profile_title">Hirable</p>
                          <div className="profile_text">
                            {hireable ? (
                              <p style={{ color: "#39ff14" }}>Available</p>
                            ) : (
                              <p style={{ color: "#F72119" }}>Not Available</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </motion.div>
              </Col>
            </Row>

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="user_followers_container"
            >
              <Row>
                <Col md={3} xs={6} className="followers_container">
                  <div className="profile_text_container">
                    <div>
                      <i className="fa-solid fa-users"></i>
                    </div>
                    <div>
                      <p className="profile_title">Followers</p>
                      <p className="profile_text">{followers}</p>
                    </div>
                  </div>
                </Col>

                <Col md={3} xs={6} className="followers_container">
                  <div className="profile_text_container">
                    <div>
                      <i className="fa-solid fa-user-group"></i>
                    </div>
                    <div>
                      <p className="profile_title">Following</p>
                      <p className="profile_text">{following}</p>
                    </div>
                  </div>
                </Col>

                <Col md={3} xs={6} className="followers_container">
                  <div className="profile_text_container">
                    <div>
                      <i className="fa-brands fa-codepen"></i>
                    </div>
                    <div>
                      <p className="profile_title">Public Repos</p>
                      <p className="profile_text">{public_repos}</p>
                    </div>
                  </div>
                </Col>

                <Col md={3} xs={6} className="followers_container">
                  <div className="profile_text_container">
                    <div>
                      <i className="fa-solid fa-store"></i>
                    </div>
                    <div>
                      <p className="profile_title">Public Gists</p>
                      <p className="profile_text">{public_gists}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </motion.div>
            <RepoList repos={repos} />
          </div>
          <Link to="/">
            <button className="user_btn2">Back To Search</button>
          </Link>
        </div>
      </AnimatedPage>
    </>
  );
};

export default UserPage;
