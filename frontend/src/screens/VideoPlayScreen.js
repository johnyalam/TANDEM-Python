import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function VideoPlayScreen() {
  return (
    <Container className="py-3" class="container bg-dark">
      <Link to={"/"}>
        <h1>CountryScreen</h1>
      </Link>
    </Container>
  );
}

export default VideoPlayScreen;
