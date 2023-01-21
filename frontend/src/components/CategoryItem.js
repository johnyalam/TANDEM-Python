import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import slideImg1 from "../assets/images/c1.png";
import videoPreview from "../assets/video-placeholder.png";

function CategoryItem({ category }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        <Link to={"/video"}>
          <Card.Title as="div">
            <strong>{category.title}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Card.Img src={slideImg1}></Card.Img>
          </div>
        </Card.Text>

        <Card.Text as="p">{category.details}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CategoryItem;
