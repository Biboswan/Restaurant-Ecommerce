import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Navbar, NavItem, Badge, Icon, Dropdown } from 'react-materialize';
import logoUrl from '../images/shimlalogo75.png';
import Cart from './Cart/Cart';

class Header extends PureComponent {
  renderLoginOrOut() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <NavItem href="/auth/google">Login with Google</NavItem>;
      default:
        return <NavItem href="/api/logout">Logout</NavItem>;
    }
  }

  render() {
    return (
      <header>
        <Navbar
          className="#b0bec5 blue-grey lighten-3"
          brand={<img alt="shimlabiryani's logo" src={logoUrl} />}
          right
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/Menu">Menu</NavItem>
          <NavItem href="#">About Us</NavItem>
          <NavItem href="#">
            Cart
            <Dropdown
              trigger={
                <span>
                  <Badge>
                    {this.props.auth
                      ? this.props.auth.cart.count
                      : this.props.unknowncart.count}
                  </Badge>
                  <Icon right>shopping_cart</Icon>
                </span>
              }
              options={{
                hover: true,
                constrainWidth: false,
                coverTrigger: false,
              }}
            >
              <Cart />
            </Dropdown>
          </NavItem>
          <NavItem divider />
          {this.renderLoginOrOut()}
        </Navbar>
      </header>
    );
  }
}

function mapStateToProps({ auth, unknowncart }) {
  return { auth, unknowncart };
}

export default connect(
  mapStateToProps,
  null
)(Header);
