import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryItem({ category }) {
  return (
    <Card className="my-3 p-3 rounded">
      {/* <Link to={"/video/" + category.id}>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Img src={category.image}></Card.Img>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Link> */}
      <Card.Body>
        <Link to={"/video"}>
          <Card.Title as="div">
            <strong>{category.title}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Card.Img src={category.image}></Card.Img>
          </div>
        </Card.Text>
        <Card.Text as="h3">${category.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CategoryItem;
