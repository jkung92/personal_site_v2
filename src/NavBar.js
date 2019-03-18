import React, { Component } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar dark expand="md" sticky={'top'}>
        <NavLink exact to="/" className="navbar-brand">
          Jonathan Kung
        </NavLink>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
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
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
