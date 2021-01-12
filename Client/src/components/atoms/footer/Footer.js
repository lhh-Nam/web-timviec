import React from "react";
import "./Footer.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="brand">
          <h2>Tìm việc</h2>
          <div className="brand__bottom">
            <p className="item">company</p>
            <p className="item">media</p>
            <p className="item">pr agencies</p>
          </div>
        </div>
        <div className="content">
          <div className="content--cate">
            <p>jobs direction</p>
            <p>employer</p>
            <p>blog</p>
            <p>faq</p>
            <p>about</p>
            <p>contact</p>
          </div>
          <div className="content--media">
            <div className="content--media--icon">
              <p>
                <FacebookIcon />
              </p>
              <p>
                <InstagramIcon />
              </p>
              <p>
                <TwitterIcon />
              </p>
              <p>
                <LinkedInIcon />
              </p>
            </div>
          </div>
          <div className="content--policy">
            <small>Term & Condition</small>
            <small>Privacy Policy</small>
            <small>
              Copyright &copy; 2020,Ltd. All rights reserved. Site credit.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
