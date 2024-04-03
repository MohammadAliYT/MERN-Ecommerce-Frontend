import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./componet/layout/Footer/Footer";
import Header from "./componet/layout/Header/Header";
import Home from "./componet/layout/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
