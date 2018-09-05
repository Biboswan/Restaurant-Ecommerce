import React, { PureComponent, Fragment } from 'react';
import { Table, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import './Cart.css';

class Cart extends PureComponent {
  renderCartDetails() {
    if (this.props.auth) return this.props.auth.cart;
    return this.props.unknowncart;
  }

  renderItemRows() {
    const { items } = this.renderCartDetails();
    let i = 0,
      total = 0,
      rows = [];
    _.forIn(items, (value, key) => {
      const { price, quantity } = value;
      total += price * quantity;
      rows.push(
        <tr key={key}>
          <td>{++i}</td>
          <td>{[key]}</td>
          <td>
            &#8377;
            {price}
          </td>
          <td>{quantity}</td>
        </tr>
      );
    });
    rows.push(
      <tr key="total">
        <td>Total</td>
        <td />
        <td>
          &#8377;
          {total}
        </td>
      </tr>
    );
    return rows;
  }
  render() {
    return (
      <Fragment>
        <Table>
          <thead>
            <tr>
              <th data-field="id">Sl.No</th>
              <th data-field="item">Item</th>
              <th data-field="price">Price</th>
              <th data-field="quantity">Quantity</th>
            </tr>
          </thead>
          <tbody>{this.renderItemRows()}</tbody>
        </Table>
        <Button
          role="link"
          onClick={() => this.props.history.push('/checkout')}
        >
          Checkout
        </Button>
      </Fragment>
    );
  }
}

function mapStateToProps({ auth, unknowncart, history }) {
  return { auth, unknowncart, history };
}

export default connect(mapStateToProps)(withRouter(Cart));
