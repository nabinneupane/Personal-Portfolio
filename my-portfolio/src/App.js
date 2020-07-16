import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./container/Footer";
import Header from "./container/Header";
import MainPage from "./RoutingPages/MainPage";

function App() {
  return (
    <Router>
      <Header />
      <MainPage />
      <Footer />
    </Router>
  );
}

export default App;
