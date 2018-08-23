import React, { Component } from 'react';
import Aux from '../hoc/Aux';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    


 export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }



  render() {
    return (
      <Aux >
     <Navbar className="navbar-main" color="light" light toggleable>
          <NavbarBrand className="navbarbrand link" src="" href="/">Writer's Blog</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navbarbrand link" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navbarbrand link" href="/new">Create a Post</NavLink>

              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </Aux>

    );
  }
}  
