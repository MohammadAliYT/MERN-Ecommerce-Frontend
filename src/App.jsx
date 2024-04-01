import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./componet/layout/Footer/Footer";
import Header from "./componet/layout/Header/Header";
import Home from "./componet/layout/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
