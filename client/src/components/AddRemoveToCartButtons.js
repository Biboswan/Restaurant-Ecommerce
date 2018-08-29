import React, { PureComponent } from 'react';
import { Button, Row, Col, Icon } from 'react-materialize';
import { connect } from 'react-redux';
import { updateCart } from '../actions';

class AddRemoveToCartButtons extends PureComponent {
  render() {
    const { name } = this.props;

    return (
      <Row>
        <Col s={4} m={4}>
          <Button>
            <Icon>add</Icon>
          </Button>
        </Col>
        <Col className="center-align" s={4} m={4}>
          <p>
            {this.props.auth
              ? this.props.auth.cart.items[name].quantity
              : this.props.unknowncart.items[name].quantity}
          </p>
        </Col>
        <Col s={4} m={4}>
          <Button>
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
  { updateCart }
)(AddRemoveToCartButtons);
