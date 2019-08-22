import React from "react";
import "./style.css";

function Nav() {
  return (
    <div className="pure-menu pure-menu-horizontal nav adv-nav">
      <a href="/" className="pure-menu-heading">
        AdventureBook
      </a>
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
          <a href="/" className="pure-menu-link">
            Home
          </a>
        </li>
        <li className="pure-menu-item">
          <a href="/register" className="pure-menu-link">
            Register
          </a>
        </li>
        <li className="pure-menu-item">
          <a href="/login" className="pure-menu-link">
            Login
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
