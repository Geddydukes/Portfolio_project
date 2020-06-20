import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Interests from "../pages/Interests";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/interests" component={Interests} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/resume" component={Resume} />
  </Switch>
);
