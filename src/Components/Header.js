import React from "react";
import Navigation from "./Navigation";

const Header = (props) => {
  if (props.data) {
    var name = props.data.name;
    var occupation = props.data.occupation;
    var description = props.data.description;
    var city = props.data.address.city;
    var networks = props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a target="_blank" rel="noopener noreferrer" href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <div id="particles-js"></div>
      <Navigation />
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">Hi! I'm {name}</h1>
          <h3>
            {city} based <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
