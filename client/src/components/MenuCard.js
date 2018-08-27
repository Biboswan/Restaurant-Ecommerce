import React, { Fragment } from 'react';
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardPanel,
  Button,
  Divider,
} from 'react-materialize';

const MenuCard = ({ data }) => {
  console.log(data);
  const { item_name, image_url, category, subcategory, price } = data;
  return image_url ? (
    <Card
      className="medium"
      title={item_name}
      header={<CardTitle image={image_url} />}
      actions={[<Button waves="light">Add To Cart</Button>]}
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
      <Button waves="light">Add To Cart</Button>
    </CardPanel>
  );
};

export default MenuCard;
