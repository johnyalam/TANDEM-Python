import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryScreen() {
  return (
    <div className="container-full containerBackground">
      <div className="videoGroup">
        <ul>
          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div>
                {/* <image src="../../public/thumb.png" /> */}
                {/* <image src={require(imageName)} /> */}
              </div>
              <div className="footerCategory">
                <p>Details</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div>
                <image src="../../public/logo512.png"></image>
              </div>
              <div className="footerCategory">
                <p>Details</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div>
                <image src="../../public/logo512.png"></image>
              </div>
              <div className="footerCategory">
                <p>Details</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div>
                <image src="../../public/logo512.png"></image>
              </div>
              <div className="footerCategory">
                <p>Details</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div>
                <image src="../../public/logo512.png"></image>
              </div>
              <div className="footerCategory">
                <p>Details</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div>
                <image src="../../public/logo512.png"></image>
              </div>
              <div className="footerCategory">
                <p>Details</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to={"/video"}>
              <div className="headerCategory">
                <h1>First Video</h1>
              </div>
              <div>
                <image src="../../public/logo512.png"></image>
              </div>
              <div className="footerCategory">
                <p>Details</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CategoryScreen;
