import React, { useState, useEffect } from "react";
import { Player } from "video-react";
import slideImg2 from "../assets/images/c1.png";

import slideImg1 from "../assets/video-placeholder.png";

export default function VideoPlayScreen() {
  const [rightCornerAd, setRightCornerAd] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("This will be called after 2 seconds");
      setRightCornerAd("show");

      setTimeout(() => {
        console.log("This will be called after 2 seconds");
        setRightCornerAd("");
      }, 5 * 1000);
    }, 15 * 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container-full videoBackground p-0">
      <div class="video-Player">
        {rightCornerAd !== "" ? (
          <button class="close">
            {/* <i className="fas fa-search"></i> */}
            <div class="video-them">
              <img src={slideImg2} alt="new" />
            </div>
          </button>
        ) : null}

        <Player
          playsInline
          poster={slideImg1}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    </div>
  );
}
