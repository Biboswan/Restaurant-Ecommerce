import React, { Fragment } from 'react';
import { Card, Button } from 'react-materialize';

const MenuCard = ({ data }) => {
  console.log(data);
  const { item_name, image_url, category, subcategory, price } = data;
  return (
    <Card
      className="small"
      header={<div>{item_name}</div>}
      actions={[<Button waves="light">Add To Cart</Button>]}
    >
      I am a very simple card. I am good at containing small bits of
      information. I am convenient because I require little markup to use
      effectively.
    </Card>
  );
};

export default MenuCard;
