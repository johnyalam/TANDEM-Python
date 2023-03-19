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
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    );
  } else if (position == "right-top") {
    return (
      <div style={styles.containerRight}>
        <h2>{title}</h2>
        <p>{message}</p>
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
    left: 200,
    position: "absolute",
    width: "30%",
    backgroundColor: "#cbcbcb",
    color: "white"
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
    right: 200,
    position: "absolute",
    width: "30%",
    backgroundColor: "#cbcbcb",
    color: "white"
    // border: "2px solid red",
    // borderRadius: "2px"
  }
  // containerLeftBottom: {
  //   backgroundImage: image_url,
  //   backgroundSize: "cover",
  //   color: "#fff",
  //   padding: "10px",
  //   borderRadius: "5px",
  //   marginLeft: "10px",
  //   bottom: 300,
  //   left: 200,
  //   position: "absolute",
  //   backgroundColor: "#cbcbcb",
  //   border: "2px solid red",
  //   borderRadius: "2px"
  // },
  // containerRightBottom: {
  //   backgroundImage: image_url,
  //   backgroundSize: "cover",
  //   color: "#fff",
  //   padding: "10px",
  //   borderRadius: "5px",
  //   marginLeft: "10px",
  //   bottom: 300,
  //   right: 200,
  //   position: "absolute",
  //   backgroundColor: "#cbcbcb",
  //   border: "2px solid red",
  //   borderRadius: "2px"
  // }
};

export default ImagePersonaMessage;
