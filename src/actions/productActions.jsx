import axios from "axios";
import {
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  CLEAR_ERROR,
} from "../constants/productConstants";

export const getProduct = () => async (dispatch) => {
  // const serializableHeaders = {}

  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    const data = await axios.get("http://localhost:4000/api/v1/products");

    // console.log("productActions", data);
    // for (const [key, value] of data.headers.entries()) {
    //   serializableHeaders[key] = value;
    // }
    // payload: { ...data, headers: serializableHeaders },
    dispatch({ type: ALL_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Clearing the errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
