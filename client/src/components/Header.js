import React, { PureComponent } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import logoUrl from '../images/shimlalogo75.png';
export default class Header extends PureComponent {
  render() {
    return (
      <header>
        <Navbar
          className="#b0bec5 blue-grey lighten-3"
          brand={<img src={logoUrl} />}
          right
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/Menu">Menu</NavItem>
          <NavItem href="#">About Us</NavItem>
          <NavItem href="#">
            Cart
            <Icon right>shopping_cart</Icon>
          </NavItem>
        </Navbar>
      </header>
    );
  }
}
