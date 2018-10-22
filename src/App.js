import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Main />
    </div>
  </BrowserRouter>
);

export default App;
