import { Link } from "react-router-dom";

import AnimatedPage from "./src/components/AnimatedPage";

const NotFoundPage = () => {
  return (
    <AnimatedPage>
      <div
        // variants={containerVariants}
        // initial="initial"
        // animate="animate"
        // exit="exit"
        className="notfound_container"
      >
        <div>
          <h1>Ooops!</h1>
          <h2>404 - Page Not Found!</h2>
          <Link to="/">
            <button className="btn-notfound">
              <i className="icon fa-solid fa-house-chimney"></i> Back To Home
              Page
            </button>
          </Link>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default NotFoundPage;
