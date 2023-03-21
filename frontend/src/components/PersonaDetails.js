import React, { useState, useEffect, useRef } from "react";

import ImageComponent from "./ImageComponent";

function ImagePersona(props) {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handlePersonaClick = (person) => {
    if (selectedPerson != null) {
      setSelectedPerson(null);
    } else {
      setSelectedPerson(person);
    }
  };

  return <div onClick={handlePersonaClick}></div>;
}

// const styles = {
//   containerLeft: {
//     backgroundImage: image_url,
//     backgroundSize: "cover",
//     color: "#fff",
//     padding: "10px",
//     borderRadius: "5px",
//     marginLeft: "10px",
//     top: 300,
//     left: 200,
//     position: "absolute",
//     width: "30%",
//     backgroundColor: "#cbcbcb",
//     color: "white"
//     // border: "2px solid red",
//     // borderRadius: "2px"
//   },
//   containerRight: {
//     backgroundImage: image_url,
//     backgroundSize: "cover",
//     color: "#fff",
//     padding: "10px",
//     borderRadius: "5px",
//     marginLeft: "10px",
//     top: 300,
//     right: 200,
//     position: "absolute",
//     width: "30%",
//     backgroundColor: "#cbcbcb",
//     color: "white"
//     // border: "2px solid red",
//     // borderRadius: "2px"
//   },
//   containerLeftBottom: {
//     backgroundImage: { image_url },
//     backgroundSize: "cover",
//     color: "#fff",
//     padding: "10px",
//     borderRadius: "5px",
//     marginLeft: "10px",
//     position: "absolute",
//     bottom: 0,
//     left: 200,
//     backgroundColor: "#cbcbcb",
//     width: "30%",
//     color: "white"
//     // border: "2px solid red",
//     // borderRadius: "2px"
//   },
//   containerRightBottom: {
//     backgroundImage: image_url,
//     backgroundSize: "cover",
//     color: "#fff",
//     padding: "10px",
//     borderRadius: "5px",
//     marginLeft: "10px",
//     bottom: 0,
//     right: 200,
//     position: "absolute",
//     backgroundColor: "#cbcbcb",
//     width: "30%",
//     color: "white"
//     // border: "2px solid red",
//     // borderRadius: "2px"
//   }
// };

export default ImagePersona;
