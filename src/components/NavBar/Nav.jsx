import React from "react";
import { NavLink } from "react-router-dom";

import { routes } from "../../router/routes";
import { Capitalize } from "../../utils";
import "../../styles/nav.css";
function Nav() {
  return (
    <div>
      <div>
        <div className="navContent">
          <div className="linkContent">
            {routes[0].children.map((route, index) => (
              <NavLink
                className="navlink"
                key={index}
                to={route.path}
                // className="nav-link"
                activeClassName="active"
              >
                {route.path === "" ? "Home" : Capitalize(route.path)}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
