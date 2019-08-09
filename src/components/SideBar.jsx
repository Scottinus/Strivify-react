import React from 'react';
import { Nav, NavItem, NavLink, NavbarBrand, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../data/strivify.png'


export default class SideBar extends React.Component {
  render() {
    return (
      <div className="row d-flex sidebar-container fixed-top justify-content-between">
        <Nav vertical className="sidebar">
          <div className="col-8">
        <NavbarBrand href="/">
              <img src={logo} alt="..." width="95px"/>
          </NavbarBrand>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Search</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Library</NavLink>
          </NavItem>
        </div>
        <div className="col-4 button-group">

        <Button className="button-side signup-btn">
            Sign Up</Button>{' '}

        <Button className="button-side  login-btn">Login</Button>{' '}
 
        </div>
        </Nav>
      </div>
    );
  }
}