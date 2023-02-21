import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

import CategoryItem from "../components/CategoryItem";
import axios from "axios";

function CategoryScreen() {
  const params = useParams();

  const [videos, setVideo] = useState([]);

  useEffect(() => {
    async function fetchVideo() {
      const { data } = await axios.get(`/api/video/${params.id}`);
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
              <CategoryItem category={video} />
            </Col>
          ))}
        </Row>
        {videos.length == 0 ? (
          <div className="overlay">
            <Card className="my-3 p-3 rounded">
              <Card.Text as="p">
                No video data found for the selected country.
              </Card.Text>
            </Card>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CategoryScreen;
