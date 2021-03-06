import React from "react";
import { Provider } from "react-redux";
import store from "../store";

import NavBar from "./nav-bar/nav-bar-container";
import Hero from "./hero/hero-container";
import Footer from "./footer/footer-container"

const App = () => {
  return (
    <Provider store={store}>
      {/*Placeholder for <Router>*/}

      {/*Place All Comps Below*/}

      <NavBar />
      <Hero />
      <Footer/>

    </Provider>
  );
};

export default App;
