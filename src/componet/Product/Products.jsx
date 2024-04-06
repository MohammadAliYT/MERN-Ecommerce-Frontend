import React, { useEffect, useState } from "react";
import Loader from "../layout/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productActions";
import ProductCard from "../layout/Product/ProductCard";
import MetaData from "../layout/Metadata/MetaData";
import "./Products.css";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";

const Products = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const { products, loading, error, productCounts, resultPerPage } =
    useSelector((state) => state.products);

  //   const entireState = useSelector((state) => {
  //     console.log("Entire Redux Store State:", state);
  //     return state.products;
  //   });

  console.log("sjdnq", resultPerPage, productCounts);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  //search functionality as 06:50
  useEffect(() => {
    dispatch(getProduct(params, currentPage));
  }, [dispatch, params, currentPage]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          {/* {resultPerPage < productsCount && ( */}
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
          {/* )} */}
        </>
      )}
    </>
  );
};

export default Products;
