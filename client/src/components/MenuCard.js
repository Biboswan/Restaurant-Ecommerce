import React, { PureComponent } from 'react';
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardPanel,
  Button,
  Divider,
} from 'react-materialize';
import { connect } from 'react-redux';
import AddRemoveToCartButtons from './AddRemoveToCartButtons';
import { updateCart } from '../actions';

class MenuCard extends PureComponent {
  renderCartButton() {
    const { item_name, price } = this.props.data;
    return (this.props.auth && this.props.auth.cart.items[item_name]) ||
      this.props.unknowncart.items[item_name] ? (
      <AddRemoveToCartButtons name={item_name} />
    ) : (
      <Button onClick={() => this.props.updateCart({ item_name, price })}>
        Add Item
      </Button>
    );
  }

  render() {
    const {
      item_name,
      image_url,
      category,
      subcategory,
      price,
    } = this.props.data;
    return image_url ? (
      <Card
        className="medium"
        title={item_name}
        header={<CardTitle image={image_url} />}
        actions={[this.renderCartButton()]}
      >
        <Row>
          <Col s={6} m={6}>
            {category},{subcategory}
          </Col>
          <Col s={6} m={6}>
            Price: &#8377;
            {price}
          </Col>
        </Row>
      </Card>
    ) : (
      <CardPanel>
        <h5>{item_name}</h5>
        <Row>
          <Col s={6} m={6}>
            {category},{subcategory}
          </Col>
          <Col s={6} m={6}>
            Price: &#8377;
            {price}
          </Col>
        </Row>
        <Divider />
        <br />
        {this.renderCartButton()}
      </CardPanel>
    );
  }
}

function mapStateToProps({ auth, unknowncart }) {
  return { auth, unknowncart };
}

export default connect(
  mapStateToProps,
  { updateCart }
)(MenuCard);
