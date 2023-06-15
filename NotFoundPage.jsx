import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import AnimatedPage from "./src/components/AnimatedPage";

import Lottie from "lottie-react";
import animationData from "./src/assets/404-2.json";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <AnimatedPage>
      <div className="notfound_container">
        <div>
          <div className="animation_404_container">
            <Lottie animationData={animationData} />
          </div>

          {/* <Link to="/">
            <button className="btn-notfound">
              <i className="icon fa-solid fa-house-chimney"></i> Back To Home
              Page
            </button>
          </Link> */}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default NotFoundPage;
