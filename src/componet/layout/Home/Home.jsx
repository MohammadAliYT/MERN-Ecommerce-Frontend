import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "../Product/Product.jsx";
// // import MetaData from "../layout/MetaData";
// import { clearErrors, getProduct } from "../../actions/productAction";
// import { useSelector, useDispatch } from "react-redux";
// import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";

const Home = () => {
  const product = {
    name: "Blue Tshirt",
    images: [{ url: "https://picsum.photos/200" }],
    price: "100",
    _id: "random",
  };
  //   const alert = useAlert();
  //   const dispatch = useDispatch();
  //   const { loading, error, products } = useSelector((state) => state.products);

  //   useEffect(() => {
  //     if (error) {
  //       alert.error(error);
  //       dispatch(clearErrors());
  //     }
  //     dispatch(getProduct());
  //   }, [dispatch, error, alert]);

  return (
    // <Fragment>
    //   {loading ? (
    //     <Loader />
    //   ) : (
    //     <Fragment>
    //       <MetaData title="ECOMMERCE" />
    <>
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
