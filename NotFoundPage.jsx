import { Link } from "react-router-dom";

import AnimatedPage from "./src/components/AnimatedPage";

import Lottie from "lottie-react";
import animationData from "./src/assets/404-2.json";

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
          <div className="animation_404_container">
            <Lottie animationData={animationData} />
          </div>

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
