import React, { PureComponent } from 'react';
import { Button, Row, Col, Icon } from 'react-materialize';
import { connect } from 'react-redux';
import { updateAddToCart, updateRemoveFromCart } from '../actions';

class AddRemoveToCartButtons extends PureComponent {
  render() {
    const { item_name } = this.props;
    console.log(item_name);
    console.log('item!' + item_name);
    return (
      <Row>
        <Col s={4} m={4}>
          <Button onClick={() => this.props.updateAddToCart({ item_name })}>
            <Icon>add</Icon>
          </Button>
        </Col>
        <Col className="center-align" s={4} m={4}>
          <p>
            {this.props.auth
              ? this.props.auth.cart.items[item_name].quantity
              : this.props.unknowncart.items[item_name].quantity}
          </p>
        </Col>
        <Col s={4} m={4}>
          <Button
            onClick={() =>
              this.props.updateRemoveFromCart({
                item_name,
              })
            }
          >
            <Icon>remove</Icon>
          </Button>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ auth, unknowncart }) {
  return { auth, unknowncart };
}

export default connect(
  mapStateToProps,
  { updateAddToCart, updateRemoveFromCart }
)(AddRemoveToCartButtons);
