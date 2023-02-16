import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import CategoryItem from "../components/CategoryItem";
import axios from "axios";

function CategoryScreen() {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    async function fetchVideo() {
      const { data } = await axios.get(`/api/video/${1}`);
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
