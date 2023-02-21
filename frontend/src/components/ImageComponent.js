import React from "react";

let image_url = "";
const width = 300;
const height = 200;

function ImageComponent({ actionThumb }) {
  image_url = actionThumb;

  return <img src={actionThumb} style={styles.container} alt="image" />;
}

const styles = {
  container: {
    width: `${width}px`,
    height: `${height}px`,
    position: "absolute",
    top: 200,
    right: 10,
    background: `url(${image_url}) no-repeat center center`,
    backgroundSize: "cover"
  }
};

export default ImageComponent;
