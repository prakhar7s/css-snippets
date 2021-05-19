import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

// ICONS
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import ColorLensIcon from "@material-ui/icons/ColorLens";

import { toggleHamburgerMenu } from "../../redux/features/features.actions";
import { connect } from "react-redux";

const Header = ({ toggleHamburgerMenu, hamburgerMenuValue }) => {
  return (
    <div className="header">
      <div className="app-name">
        <Link to="/css-snippets">
          <span className="codes first">V</span>
          <div className="main-icon">
            <ColorLensIcon />
          </div>
          <span className="codes">&#47;</span>
          <span className="codes last">V</span>
          <span>CSS Snippets</span>
        </Link>
      </div>
      <div
        onClick={() => toggleHamburgerMenu()}
        className="hamburger-menu-icon"
      >
        <MenuIcon />
      </div>
      <div
        style={{ display: hamburgerMenuValue ? "block" : "none" }}
        className="hamburger-menu-container"
      >
        <div className="hamburger-menu">
          <div onClick={() => toggleHamburgerMenu()} className="close-btn">
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

const mapStateToProps = (state) => ({
  hamburgerMenuValue: state.features.hamburgerMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHamburgerMenu: () => dispatch(toggleHamburgerMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
