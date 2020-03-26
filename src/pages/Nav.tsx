import * as React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="ui stackable container menu">
        <Link className="item" to="/">
          Home
        </Link>
        <Link className="item" to="/start">
          Get Started
        </Link>
        <Link className="item" to="/projected">
          Projected Results
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
