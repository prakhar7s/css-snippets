import React from "react";
import { Link } from "react-router-dom";

import "./landing-component.styles.scss";

const LandingComponent = () => (
  <div className="landing-component">
    <h1>Welcome!</h1>
    <p>
      Let't get started <Link to="/gradient-colors">Click Here</Link>
    </p>
  </div>
);

export default LandingComponent;
