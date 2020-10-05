import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Rating } from '.';

const Product = ({
  product: { name, _id: id, image, rating, numReviews, price },
}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${id}`}>
        <Card.Img src={image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${id}`}>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              rating={rating}
              text={`${numReviews} reviews`}
              // color="orange"
            />
          </div>
        </Card.Text>

        <Card.Text as="h3">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
