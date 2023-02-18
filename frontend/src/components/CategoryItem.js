import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryItem({ category }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        {console.log("???? : " + category.id)}
        <Link to={"/video/" + category.id}>
          <Card.Title as="div">
            <strong>{category.title}</strong>
          </Card.Title>
        </Link>
        <Link to={"/video/" + category.id}>
          <Card.Text as="div">
            <div className="my-3">
              <Card.Img src={category.thumb} className="CategoryListItem-img" />
            </div>
          </Card.Text>
        </Link>

        <Card.Text as="p">{category.details}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CategoryItem;
