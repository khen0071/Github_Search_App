import { useContext } from "react";
import GitHubContext from "../../context/github/GitHubContext";
import { Row, Col } from "react-bootstrap";
import UserItem from "../users/UserItem";
import Loader from "../Loader";

import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    y: "300vh",
  },
  animate: {
    y: 0,
    transition: { duration: 0.5, type: "tween" },
  },
  exit: {
    y: "300vh",
    transition: { duration: 0.5, type: "spring", stiffness: 120 },
  },
};

const UserResult = () => {
  const { users, loading } = useContext(GitHubContext);
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   const fetchUsers = async () => {
  //     const response = await fetch(`https://api.github.com/users`);
  //     const data = await response.json();

  //     setUsers(data);
  //     setLoading(false);
  //   };

  if (!loading) {
    return (
      <>
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="userresult_container"
        >
          <Row>
            {users.map((user, index) => (
              <Col lg={3} md={4} sm={6} xs={12} key={index}>
                <UserItem user={user} />
              </Col>
            ))}
          </Row>
        </motion.div>
      </>
    );
  } else {
    return <Loader />;
  }
};

export default UserResult;
