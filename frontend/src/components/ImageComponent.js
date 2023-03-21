import React, { useState, useEffect, useRef } from "react";

import clickIcon from "../assets/images/click.png";

let image_url = "";
let position = "";
let style = null;
let stylePersona = null;
const width = 100;
const height = 100;
let personaObj = null;
let isHighlighted = null;

function ImageComponent(props) {
  image_url = props.actionThumb;
  position = props.position;
  personaObj = props.personaObj;

  if (position == 1) {
    style = styles.containerTopLeft;
    stylePersona = styles.containerLeftPersona;
    isHighlighted = true;
  } else if (position == 2) {
    style = styles.containerTopRight;
    stylePersona = styles.containerRightPersona;
  } else if (position == 3) {
    style = styles.containerBottomLeft;
    stylePersona = styles.containerLeftBottomPersona;
  } else if (position == 4) {
    style = styles.containerBottomRight;
    stylePersona = styles.containerRightBottom;
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
    backgroundSize: "cover",
    border: isHighlighted ? "5px solid green" : "none"
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
  },

  containerLeftPersona: {
    backgroundImage: image_url,
    backgroundSize: "cover",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    marginLeft: "10px",
    top: 300,
    left: 200,
    position: "absolute",
    width: "30%",
    backgroundColor: "#cbcbcb",
    color: "white"
    // border: "2px solid red",
    // borderRadius: "2px"
  },
  containerRightPersona: {
    backgroundImage: image_url,
    backgroundSize: "cover",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    marginLeft: "10px",
    top: 300,
    right: 200,
    position: "absolute",
    width: "30%",
    backgroundColor: "#cbcbcb",
    color: "white"
    // border: "2px solid red",
    // borderRadius: "2px"
  },
  containerLeftBottomPersona: {
    backgroundImage: { image_url },
    backgroundSize: "cover",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    marginLeft: "10px",
    position: "absolute",
    bottom: 0,
    left: 200,
    backgroundColor: "#cbcbcb",
    width: "30%",
    color: "white"
    // border: "2px solid red",
    // borderRadius: "2px"
  },
  containerRightBottomPersona: {
    backgroundImage: image_url,
    backgroundSize: "cover",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    marginLeft: "10px",
    bottom: 0,
    right: 200,
    position: "absolute",
    backgroundColor: "#cbcbcb",
    width: "30%",
    color: "white"
    // border: "2px solid red",
    // borderRadius: "2px"
  }
};

export default ImageComponent;
