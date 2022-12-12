import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CountryScreen() {
  return (
    <Container className="py-3" class="container bg-dark">
      <Link to={"/category"}>
        <h1>CountryScreen</h1>
      </Link>
    </Container>
  );
}

export default CountryScreen;
