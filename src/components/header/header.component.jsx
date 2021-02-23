import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

// ICONS
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";

const Header = () => {
  const hamburgerMenu = useRef();

  const showHamburgerMenu = () => {
    hamburgerMenu.current.style.display = "block";
  };

  const hideHamburgerMenu = () => {
    hamburgerMenu.current.style.display = "none";
  };
  return (
    <div className="header">
      <div className="app-name">
        <Link to="/css-snippets">
          <div className="left">
            <ChevronLeftOutlinedIcon />
          </div>
          <div className="right">
            <ChevronRightOutlinedIcon />
          </div>
          <span>CSS Snippets</span>
        </Link>
      </div>
      <div onClick={() => showHamburgerMenu()} className="hamburger-menu-icon">
        <MenuIcon />
      </div>
      <div ref={hamburgerMenu} className="hamburger-menu-container">
        <div className="hamburger-menu">
          <div onClick={() => hideHamburgerMenu()} className="close-btn">
            <CloseIcon />
          </div>
          <div className="hamb-links">
            <Link to="/css-snippets/gradient-colors">Gradient Colors</Link>
            <Link to="/css-snippets/css-tricks">CSS Tricks</Link>
            <Link to="/css-snippets/gradient-colors">Learn More</Link>
          </div>
        </div>
      </div>
      <div className="links">
        <Link to="/css-snippets/gradient-colors">Gradient Colors</Link>
        <Link to="/css-snippets/css-tricks">CSS Tricks</Link>
        <Link to="/css-snippets/gradient-colors">Learn More</Link>
      </div>
    </div>
  );
};

export default Header;
