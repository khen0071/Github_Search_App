import { useState, useContext } from "react";
import GitHubContext from "../../context/github/GitHubContext";
import AlertContext from "../../context/alert/AlertContext";

import { searchUsers } from "../../context/github/GithubActions";

import reactLogo from "../../assets/react.svg";
import bootstrapLogo from "../../assets/bootstrap-5-1.svg";
import githubLogo from "../../assets/github-icon.svg";
import framerLogo from "../../assets/framer-motion.svg";
import viteLogo from "/vite.svg";

import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.1,
    },
  },
};

const iconVariants = {
  initial: {
    rotateZ: 360,
    opacity: 0,
    scale: 10,
  },
  animate: {
    rotateZ: 0,
    opacity: 1,
    scale: 1,
  },
};

const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GitHubContext);
  const { setAlert } = useContext(AlertContext);

  const searchHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter A Value", "error");
    } else {
      dispatch({
        type: "SET_LOADING",
      });
      const users = await searchUsers(text);
      dispatch({
        type: "GET_USERS",
        payload: users,
      });
      setText("");
    }
  };

  return (
    <>
      <div className="user_search_container">
        <motion.form
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          onSubmit={submitHandler}
        >
          <div className="search_input">
            <input
              onChange={searchHandler}
              value={text}
              type="text"
              placeholder="Enter Github Username"
            ></input>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="btn"
            >
              {" "}
              <i className="fa-solid fa-magnifying-glass"></i> Search
            </motion.button>
          </div>
        </motion.form>
        {users.length === 0 && (
          <>
            <motion.div
              initial={{
                y: "-100vh",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1,
                duration: 1,
              }}
              className="user_search_description"
            >
              <motion.h4
                whileHover={{
                  scale: 1.1,
                }}
                exit={{
                  x: -100,
                  transition: { ease: "easeInOut" },
                }}
              >
                Explore GitHub Repositories and Users
              </motion.h4>

              <motion.p
                whileHover={{
                  scale: 1.03,
                }}
              >
                GitHub Finder is a powerful web application that allows you to
                search for GitHub users with ease. Whether you are looking for a
                specific project or want to discover talented developers, GitHub
                Search App provides an intuitive and efficient way to explore
                the vast GitHub User Ecosystem.
              </motion.p>

              <motion.p
                whileHover={{
                  scale: 1.03,
                }}
              >
                Whether you are a developer, a project manager, or an
                open-source enthusiast, GitHub Search App is your go-to tool for
                exploring and connecting within the GitHub universe. Start your
                journey now and unlock the vast potential of GitHub with GitHub
                Search App!
              </motion.p>

              <div className="logo_icon_container">
                <motion.img
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  transition={{
                    duration: 0.5,
                    delay: 2,
                  }}
                  src={viteLogo}
                  className="logo_icons"
                  alt="Vite logo"
                />

                <motion.img
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  transition={{
                    duration: 0.5,
                    delay: 2.2,
                  }}
                  src={reactLogo}
                  className="logo_icons"
                  alt="React logo"
                />

                <motion.img
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  transition={{
                    duration: 0.5,
                    delay: 2.4,
                  }}
                  src={githubLogo}
                  className="logo_icons"
                  alt="Github logo"
                />
                <motion.img
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  transition={{
                    duration: 0.5,
                    delay: 2.6,
                  }}
                  src={bootstrapLogo}
                  className="logo_icons"
                  alt="Bootstrap logo"
                />
                <motion.img
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  transition={{
                    duration: 0.5,
                    delay: 2.8,
                  }}
                  src={framerLogo}
                  className="logo_icons"
                  alt="Framer logo"
                />
              </div>
            </motion.div>
          </>
        )}

        {users.length > 0 && (
          <motion.button
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
            className="btn clear_btn"
          >
            Clear Search
          </motion.button>
        )}
      </div>
    </>
  );
};

export default UserSearch;
