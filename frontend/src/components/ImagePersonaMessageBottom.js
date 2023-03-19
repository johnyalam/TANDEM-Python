import React from "react";

let image_url = "";
let message = "";
let title = "";
let position = "";

function ImagePersonaMessageBottom(props) {
  image_url = props.thumb;
  message = props.message;
  title = props.title;
  position = props.position;

  if (position == "left") {
    return (
      <div style={styles.containerLeftBottom}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    );
  } else if (position == "right") {
    return (
      <div style={styles.containerRightBottom}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    );
  }
}

const styles = {
  containerLeftBottom: {
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
  containerRightBottom: {
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

export default ImagePersonaMessageBottom;
