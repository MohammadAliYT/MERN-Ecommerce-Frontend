import { combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./reducers/productReducer";

const rootReducer = combineReducers({
  products: productsReducer,
});

let initialState = {};
const middleware = [thunk];
const store = configureStore({ reducer: rootReducer, initialState });

export default store;
