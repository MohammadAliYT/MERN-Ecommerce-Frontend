// import { Rating } from "@material-ui/lab";
import React from "react";
import profilePng from "../../images/profilePng.png";
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {
  const options = {
    edit: false,
    color: "rgba (20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 8 : 12,
    value: review.ratings,
    isHalf: true,
  };

  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
      <ReactStars {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
