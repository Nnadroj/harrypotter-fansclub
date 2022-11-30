import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <ul>
          <li>
            <a
              href="https://hp-api.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              All the data comes from the free HP-API{" "}
            </a>
            made by
            <a
              href="https://github.com/KostaSav"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Kostas Savvidis
            </a>
          </li>
          <li>
            <a
              href="https://wizardingworld.warnerbros.fr/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              This is an unofficial Harry Potter website. Warner Bros. 2022 -
              All rights reserved
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
