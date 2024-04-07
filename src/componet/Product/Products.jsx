import React, { useEffect, useState } from "react";
import Loader from "../layout/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productActions";
import ProductCard from "../layout/Product/ProductCard";
import MetaData from "../layout/Metadata/MetaData";
import "./Products.css";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Typography from "@mui/material/Typography";
import { Slider } from "@mui/material";

const Products = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const categories = [
    "Electronics",
    "Books",
    "Clothing",
    "Home and Kitchen",
    "Beauty and Personal Care",
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const { products, loading, error, productCounts, resultPerPage } =
    useSelector((state) => state.products);

  //   const entireState = useSelector((state) => {
  //     console.log("Entire Redux Store State:", state);
  //     return state.products;
  //   });

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  //search functionality as 06:50
  useEffect(() => {
    dispatch(getProduct(params, currentPage, category, ratings));
  }, [dispatch, params, currentPage, category, ratings]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="All Products" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            <Typography color={"black"}>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component="legend" color={"black"}>
                Ratings Above
              </Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>

          {resultPerPage < productCounts && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productCounts}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Products;
