import { applyMiddleware, createStore } from "redux";
import cakeReducer from "./Cake/cakeReducer";
import IceCreamReducer from "./IceCream/IceCreamReducer";
import RootReducer from "./RootReducer";

// import logger from "redux-logger";
import thunk from "redux-thunk";




const store = createStore(RootReducer,applyMiddleware(thunk))

export default store