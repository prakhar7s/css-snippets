import React from "react";
import { Route, Switch } from "react-router-dom";

import ColorCards from "../components/color-cards/color-cards.component";
import CSSTricks from "../components/css-tricks/css-tricks";
import LandingComponent from "../components/landing-component/landing-component.component";

const Routes = () => (
  <Switch>
    <Route path="/css-snippets" component={LandingComponent} exact />
    <Route path="/css-snippets/gradient-colors" component={ColorCards} />
    <Route path="/css-snippets/css-tricks" exact component={CSSTricks} />
  </Switch>
);

export default Routes;
