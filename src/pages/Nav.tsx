import * as React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="ui stackable container menu">
        <NavLink className="item" activeClassName="active" to="/" exact={true}>
          Home
        </NavLink>
        <NavLink className="item" activeClassName="active" to="/start">
          Get Started
        </NavLink>
        <NavLink className="item" activeClassName="active" to="/sample-apps">
          Sample Application
        </NavLink>
        <NavLink className="item" activeClassName="active" to="/projected">
          Projected Results
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
