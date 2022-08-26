import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { routes } from "../../router/routes";
import { Capitalize } from "../../utils";

function Nav() {
  return (
    <div className="navContent">
      <Container>
        <Row>
          <Col className="linkContent">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Nav;
