import React from "react";

const Footer = ({ data }) => {
  return data ? (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {data.social.map((network) => (
              <li key={network.name}>
                <a target="_blank" rel="noopener noreferrer" href={network.url}>
                  <i className={network.className}></i>
                </a>
              </li>
            ))}
          </ul>
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
  ) : (
    ""
  );
};

export default Footer;
