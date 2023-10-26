import { createContext, useState } from "react";
import { Provider } from "react-redux";

import ClickCounter from "./components/ClickCounter";



import HoverCounter from "./components/HoverCounter";
import CakeContainer from "./Redux/Cake/CakeContainer";
import IceCreamContainer from "./Redux/IceCream/IceCreamContainer";
import PostContainer from "./Redux/Post/PostContainer";

import store from "./Redux/Store";

export const UserContext = createContext("");

const App = () => {
  return (

    <Provider store={store}>
      <PostContainer/>
    </Provider>
    
  );
};

export default App;
