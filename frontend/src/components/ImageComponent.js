import React from "react";

let image_url = "";
let position = "";
let style = null;
const width = 100;
const height = 100;

function ImageComponent(props) {
  image_url = props.actionThumb;
  position = props.position;

  if (position == 1) {
    style = styles.containerTopLeft;
  } else if (position == 2) {
    style = styles.containerTopRight;
  } else if (position == 3) {
    style = styles.containerBottomLeft;
  } else if (position == 4) {
    style = styles.containerBottomRight;
  }

  return <img src={image_url} style={style} alt="image" />;
}

const styles = {
  containerTopRight: {
    width: `${width}px`,
    height: `${height}px`,
    position: "absolute",
    top: 300,
    right: 100,
    background: `url(${image_url}) no-repeat center center`,
    backgroundSize: "cover"
  },
  containerTopLeft: {
    width: `${width}px`,
    height: `${height}px`,
    position: "absolute",
    top: 300,
    left: 100,
    background: `url(${image_url}) no-repeat center center`,
    backgroundSize: "cover"
  },
  containerBottomRight: {
    width: `${width}px`,
    height: `${height}px`,
    position: "absolute",
    right: 100,
    bottom: 10,
    background: `url(${image_url}) no-repeat center center`,
    backgroundSize: "cover"
  },
  containerBottomLeft: {
    width: `${width}px`,
    height: `${height}px`,
    position: "absolute",
    bottom: 10,
    left: 100,
    background: `url(${image_url}) no-repeat center center`,
    backgroundSize: "cover"
  }
};

export default ImageComponent;
