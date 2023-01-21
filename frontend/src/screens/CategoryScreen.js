import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import slideImg1 from "../assets/video-placeholder.png";
import slideImg2 from "../assets/video-placeholder.png";
import videoPreview from "../assets/video-placeholder.png";
import CategoryItem from "../components/CategoryItem";
import axios from "axios";

function CategoryScreen() {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    async function fetchVideo() {
      const id = 3;
      const { data } = await axios.get(`/api/video/${id}`);
      console.log(data);
      setVideo(data);
    }
    fetchVideo();
  }, []);



  return (
    <div className="container-full videoBackground">
      <div className="videoGroup">
        <Row>
          {videos.map((video) => (
            <Col key={video.id} sm={12} md={6} lg={4} xl={3}>
              <CategoryItem category={video}></CategoryItem>
            </Col>
          ))}
        </Row>

       
      </div>
    </div>
  );
}

export default CategoryScreen;
