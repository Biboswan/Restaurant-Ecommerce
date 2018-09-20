import React, { PureComponent } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { connect } from 'react-redux';
import './FixedBottomNav.css';

class FixedBottomNav extends PureComponent {
  state = {
    value: 'home',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        className="hide-on-large-only bottom-nav"
        value={value}
        onChange={this.handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<Icon>home</Icon>}
        />
        <BottomNavigationAction
          label="Cart"
          value="cart"
          icon={
            <Badge
              badgeContent={
                this.props.auth
                  ? this.props.auth.cart.count
                  : this.props.unknowncart.count
              }
              color="primary"
            >
              <ShoppingCartIcon />
            </Badge>
          }
        />

        <BottomNavigationAction label="Total" value="total" icon={88} />
        <BottomNavigationAction
          label="Call Now"
          value="call"
          icon={
            <a href="tel:+91-882-024-9026">
              <Icon>call</Icon>
            </a>
          }
        />
      </BottomNavigation>
    );
  }
}
function mapStateToProps({ auth, unknowncart }) {
  return { auth, unknowncart };
}

export default connect(
  mapStateToProps,
  null
)(FixedBottomNav);
