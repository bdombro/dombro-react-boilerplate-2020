import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./compounds/Header/Header";
import Stacks from "./stacks";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Stacks />
    </BrowserRouter>
  );
}

export default hot(module)(App);
