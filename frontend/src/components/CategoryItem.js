import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import placeholder from "../assets/images/play.png";

function CategoryItem({ category }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        <Link to={"/video"}>
          <Card.Title as="div">
            <strong>{category.title}</strong>
          </Card.Title>
        </Link>
        <Link to={"/video"}>
          <Card.Text as="div">
            <div className="my-3">
              <Card.Img
                src={category.thumb}
                className="CategoryListItem-img"
              ></Card.Img>
              {/* <Card.Img src={placeholder} ></Card.Img> */}
            </div>
          </Card.Text>
        </Link>

        <Card.Text as="p">{category.details}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CategoryItem;
