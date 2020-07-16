import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProjectPage from "./ProjectPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

const MainPage = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/project" component={ProjectPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  );
};

export default MainPage;
