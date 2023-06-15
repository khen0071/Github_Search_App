import { BrowserRouter as Router } from "react-router-dom";
import { GitHubProvider } from "./context/github/GitHubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import { Container } from "react-bootstrap";

import { AnimatePresence } from "framer-motion";

// import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Alert from "./components/Alert";

import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
  return (
    <>
      <GitHubProvider>
        <AlertProvider>
          <Router>
            <Navbar />
            <Container>
              <AnimatePresence mode="wait">
                <div className="app_container">
                  <AnimatedRoutes />
                  <Alert />
                </div>
              </AnimatePresence>
            </Container>
          </Router>
        </AlertProvider>
      </GitHubProvider>
    </>
  );
};

export default App;
