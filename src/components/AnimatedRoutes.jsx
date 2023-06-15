import { Routes, Route, useLocation } from "react-router-dom";

import NotFoundPage from "../../NotFoundPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/user/:login" element={<UserPage />} />
      </Routes>
    </>
  );
};

export default AnimatedRoutes;
