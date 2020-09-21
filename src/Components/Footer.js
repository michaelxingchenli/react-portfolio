import React, { Component } from "react";

const Footer = (props) => {
  if (props.data) {
    var networks = props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a target="_blank" href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
        <div className="copyright">
          Design by{" "}
          <a title="Styleshout" href="http://www.styleshout.com/">
            Styleshout
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
