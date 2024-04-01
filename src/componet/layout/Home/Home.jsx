import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "../Product/Product.jsx";
import MetaData from "../Metadata/MetaData.jsx";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../../actions/productActions.jsx";

const Home = () => {
  const product = {
    name: "Blue Tshirt",
    images: [{ url: "https://picsum.photos/200" }],
    price: "100",
    _id: "random",
  };

  const dispatch = useDispatch();
  // const { loading, error, products } = useSelector((state) => state.products);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/v1/products"); // Relative URL handled by proxy
      const data = await response.json();
      console.log("fetchdata ", data);
      // Use the fetched data in your component
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // if (error) {
    //   alert.error(error);
    //   dispatch(clearErrors());
    // }
    fetchData();
    dispatch(getProduct());
  }, [dispatch]);

  return (
    // <Fragment>
    //   {loading ? (
    //     <Loader />
    //   ) : (
    //     <Fragment>
    //       <MetaData title="ECOMMERCE" />
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
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </>
    //   <div className="container" id="container">
    //     {products &&
    //       products.map((product) => (
    //         <ProductCard key={product._id} product={product} />
    //       ))}
    //   </div>
    // </Fragment>
  );
};
// </Fragment>

export default Home;
