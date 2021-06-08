import React from "react";

import "./footer.styles.scss";

// ICONS
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Footer = () => (
  <div className="footer">
    <div className="social-media-links">
      <p>Follow us,</p>
      <div className="links">
        <a href="#facebook">
          <FacebookIcon />
        </a>
        <a href="#instagram">
          <InstagramIcon />
        </a>
        <a href="#linkedin">
          <LinkedInIcon />
        </a>
        <a href="#pinterest">
          <PinterestIcon />
        </a>
        <a href="#twitter">
          <TwitterIcon />
        </a>
        <a href="#reddit">
          <RedditIcon />
        </a>
        <a href="#youtube">
          <YouTubeIcon />
        </a>
      </div>
    </div>

    <form id="contact-form">
      <p>Give us feedback</p>
      <input type="email" placeholder="your email" />
      <input type="text" placeholder="feedback" />
      <button type="submit">Send</button>
    </form>
  </div>
);

export default Footer;
