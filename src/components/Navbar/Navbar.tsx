import React from "react";

import { Link } from "react-router-dom";
import { routes } from "../../routes";
import c from "../../assets/colors";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar: React.FC = () => {
  return (
    <>
      <Navbar bg={c.indigo} expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>

          <Nav>
            {routes.map(nav => (
              <Nav.Link as={Link} key={nav.text} href={nav.path} to={nav.path}>
                {nav.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
