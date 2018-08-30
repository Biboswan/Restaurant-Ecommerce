import React, { PureComponent } from 'react';
import { Table } from 'react-materialize';
import { connect } from 'react-redux';
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
    );
  }
}

function mapStateToProps({ auth, unknowncart }) {
  return { auth, unknowncart };
}

export default connect(mapStateToProps)(Cart);
