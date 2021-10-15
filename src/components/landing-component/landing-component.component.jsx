import React from "react";
import { Link } from "react-router-dom";

import "./landing-component.styles.scss";

const LandingComponent = () => (
  <div className="landing-component">
    <h1>Welcome to CSS Snippets! </h1>
    <h2>Try our services for free.</h2>
    <div className="services">
      <Link to="/css-snippets/gradient-colors">Gradient Colors</Link>
      <Link to="/css-snippets/css-tricks">CSS Snippets</Link>
    </div>
  </div>
);

export default LandingComponent;
