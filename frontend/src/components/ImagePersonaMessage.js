import React from "react";

let image_url = "";
let message = "";
let title = "";
let position = "";

function ImagePersonaMessage(props) {
  image_url = props.thumb;
  message = props.message;
  title = props.title;
  position = props.position;

  if (position == "left-top") {
    return (
      <div style={styles.containerLeft}>
        <div className="scrollable-paragraph-container">
          <p className="scrollable-paragraph">{message}</p>
        </div>
      </div>
    );
  } else if (position == "right-top") {
    return (
      <div style={styles.containerRight}>
        <div className="scrollable-paragraph-container">
          <p className="scrollable-paragraph">{message}</p>
        </div>
      </div>
    );
  } else if (position == "left-bottom") {
    return (
      <div style={styles.containerLeftBottom}>
        <div className="scrollable-paragraph-container">
          <p className="scrollable-paragraph">{message}</p>
        </div>
      </div>
    );
  } else if (position == "right-bottom") {
    return (
      <div style={styles.containerRightBottom}>
        <div className="scrollable-paragraph-container">
          <p className="scrollable-paragraph">{message}</p>
        </div>
      </div>
    );
  }
}

const styles = {
  containerLeft: {
    backgroundImage: image_url,
    backgroundSize: "cover",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    marginLeft: "10px",
    top: 300,
    left: 210,
    position: "absolute",
    width: "30%",
    backgroundColor: "#0073B8",
    color: "white"
    // height: 100
    // border: "2px solid red",
    // borderRadius: "2px"
  },
  containerRight: {
    backgroundImage: image_url,
    backgroundSize: "cover",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    marginLeft: "10px",
    top: 300,
    right: 210,
    position: "absolute",
    width: "30%",
    backgroundColor: "#0073B8",
    color: "white"
    // height: 100
    // border: "2px solid red",
    // borderRadius: "2px"
  },
  containerLeftBottom: {
    backgroundImage: { image_url },
    backgroundSize: "cover",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    marginLeft: "10px",
    position: "absolute",
    bottom: 0,
    left: 210,
    backgroundColor: "#0073B8",
    width: "30%",
    color: "white"
    // height: 100
    // border: "2px solid red",
    // borderRadius: "2px"
  },
  containerRightBottom: {
    backgroundImage: image_url,
    backgroundSize: "cover",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    marginLeft: "10px",
    bottom: 0,
    right: 210,
    position: "absolute",
    backgroundColor: "#0073B8",
    width: "30%",
    color: "white"
    // height: 100
    // border: "2px solid red",
    // borderRadius: "2px"
  }
};

export default ImagePersonaMessage;
