import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./componet/layout/Footer/Footer";
import Header from "./componet/layout/Header/Header";
import Home from "./componet/layout/Home/Home";
import ProductDetails from "./componet/Product/ProductDetails";
import Products from "./componet/Product/Products";
import Search from "./componet/Product/Search";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} exact />
        <Route path="/products" element={<Products />} exact />
        <Route path="/search" element={<Search />} exact />
      </Routes>

      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
