import { combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import {
  productDetailsReducer,
  productsReducer,
} from "./reducers/productReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
});

let initialState = {};
const middleware = [thunk];
const store = configureStore({
  reducer: rootReducer,
  middleware: (middleware) =>
    middleware({
      serializableCheck: false,
    }),
  initialState,
});

export default store;
