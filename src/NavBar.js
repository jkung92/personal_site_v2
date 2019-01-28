import React, { Component } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavLink exact to="/" className="navbar-brand">
            Jonathan Kung
          </NavLink>

          <Nav className="ml-auto mr-4" navbar>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
          </Nav>

          <Nav className="ml-auto mr-4" navbar>
            <NavItem>
              <NavLink to="/projects">Projects</NavLink>
            </NavItem>
          </Nav>

          <Nav className="ml-auto mr-4" navbar>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
