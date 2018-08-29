import React, { Fragment } from 'react';
import { Icon, Badge } from 'react-materialize';

const CartIndicator = () => (
  <Fragment>
    Cart
    <Badge> 0</Badge>
    <Icon right>shopping_cart</Icon>
  </Fragment>
);

export default CartIndicator;
