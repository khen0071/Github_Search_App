import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";

import { motion } from "framer-motion";

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <motion.div
        initial={{
          y: "-100vh",
        }}
        animate={{
          y: 0,
        }}
        className="alert_container"
      >
        <p>
          {alert.type === "error" && (
            <i className="icon error fa-regular fa-circle-xmark"></i>
          )}
        </p>
        <p>
          <strong>{alert.msg}</strong>
        </p>
      </motion.div>
    )
  );
};

export default Alert;
