import React, { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import slideImg1 from "../assets/video-placeholder.png";
import slideImg2 from "../assets/video-placeholder.png";
import videoPreview from "../assets/video-placeholder.png";
import CategoryItem from "../components/CategoryItem";
import axios from "axios";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function CategoryScreen() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function fetchCategoryVideo() {
      const { data } = await axios.get("/api/category/1");
      setCategory(data);
      console.log("-------data", data);
    }
    fetchCategoryVideo();
  }, []);

  // const [country, setCountry] = useState([]);
  // useEffect(() => {
  //   async function fetchCountries() {
  //     const { data } = await axios.get("/api/country/");
  //     setCountry(data);
  //     console.log("-------data", data);
  //   }
  //   fetchCountries();
  // }, []);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <Link to={"/category"}>
          <span style={{ display: "block", textAlign: "left" }}>
            {item.name}
          </span>
        </Link>
      </>
    );
  };

  const categoryItem = (item) => {
    return (
      <>
        <Link to={"/category"}>
          <span style={{ display: "block", textAlign: "left" }}>
            {item.category_name}
          </span>
        </Link>
      </>
    );
  };

  return (
    <div className="container-full videoBackground">
      {/* <div className="selectCountry" style={{ marginBottom: 50 }}>
        <p>Select Country</p>
        <div className="searchGroup">
          <ReactSearchAutocomplete
            items={country}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </div> */}

      <div className="videoGroup">
        {/* <Col>
          {category.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <p class="text-white">Electric Vehicles{item.video.length}</p>
              <Row>
                {item.video.map((video) => (
                  <Col key={video._id} sm={12} md={6} lg={4} xl={3}>
                    <CategoryItem category={video}></CategoryItem>
                  </Col>
                ))}
              </Row>
            </Col>
          ))}
        </Col> */}

        {/* {category.length > 0
          ? category.map((category, index) => {
              console.log("-------data", category.category_name);
            })
          : null} */}

        <p class="text-white">Electric Vehicles</p>

        {/* {category.map((item, key) => {
          return;
          <tr key={key}>
            <td>{item.heading}</td>
            <td>{item.date}</td>
            <td>{item.status}</td>
          </tr>;
        })} */}

        <ul>
          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={videoPreview} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg1} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg1} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg1} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg1} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg1} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg1} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg1} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg1} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg1} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="videoGroup">
        <p class="text-white">Electric Vehicles</p>
        <ul>
          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg2} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg2} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg2} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg2} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg2} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg2} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg2} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg2} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg2} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div class="video-them">
                <img src={slideImg2} alt="new" />
              </div>
              <div className="footerCategory">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CategoryScreen;
