/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import GitHubReducer from "./GitHubReducer";

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  // Fetch User for testing API Connection
  // const fetchUsers = async () => {
  //   setLoading();

  //   const response = await fetch(`https://api.github.com/users`);
  //   const data = await response.json();

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // };

  return (
    <GitHubContext.Provider
      value={{
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        //...state is same as above
        ...state,
        dispatch,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
