import { Container } from "react-bootstrap";
import UserResult from "../components/users/UserResult";
import UserSearch from "../components/users/UserSearch";
import AnimatedPage from "../components/AnimatedPage";

const HomePage = () => {
  return (
    <>
      <AnimatedPage>
        <div className="home_container">
          <Container>
            <UserSearch />
            <UserResult />
          </Container>
        </div>
      </AnimatedPage>
    </>
  );
};

export default HomePage;
