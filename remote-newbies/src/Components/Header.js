import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header role="banner">
      <h1>
        <Link to="/">Remote Newbies</Link>
      </h1>
      <nav role="navigation">
        <ul className="header-list">
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
