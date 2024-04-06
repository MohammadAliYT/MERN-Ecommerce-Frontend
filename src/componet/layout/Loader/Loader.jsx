import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const Loader = () => {
  const options = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div className="sweet-loading">
      <FadeLoader
        color="#ffffff"
        loading="true"
        cssOverride={options}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
