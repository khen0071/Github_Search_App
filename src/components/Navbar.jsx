import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const logoVariants = {
  hidden: {
    opacity: 0.05,
    scale: 1.1,
    // y: "50vh",
  },
  visible: {
    opacity: 1,
    scale: 1,
    // y: 0,
    // transition: {
    //   duration: 1,
    //   delay: 1,
    // },
    transition: {
      duration: 2,
    },
  },
};

const Navbar = () => {
  return (
    <>
      <motion.div className="navbar_container">
        <motion.div variants={logoVariants} initial="hidden" animate="visible">
          <Link to="/">
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
            >
              <i className="icon fa-brands fa-github"></i> Github Search App
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
