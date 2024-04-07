import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "../Product/ProductCard.jsx";
import MetaData from "../Metadata/MetaData.jsx";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../../actions/productActions.jsx";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => {
    return state.products;
  });

  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    if (error) {
      toast.error(error, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: prefersDarkMode.matches ? "dark" : "light",
      });
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        //Add Loader/spinner here later on
        <>
          <MetaData title="Bawa" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="container">
              <button>
                Scroll
                <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
