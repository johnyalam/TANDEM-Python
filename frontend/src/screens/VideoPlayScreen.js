import React, { useState, useEffect, useRef } from "react";
import slideImg2 from "../assets/images/c1.png";

import slideImg1 from "../assets/video-placeholder.png";
import thumb from "../assets/images/thumb_1.png";
import axios from "axios";

var position = 0;

export default function VideoPlayScreen() {
  const [videoActions, setVideoActions] = useState([]);
  const [rightCornerAd, setRightCornerAd] = useState("");

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef();
  const thumbRef = useRef(null);

  useEffect(() => {
    async function fetchVideoActions() {
      const { data } = await axios.get("/api/video-action/1");
      setVideoActions(data);
      console.log("-------fetchVideoActions: ", data);
    }
    fetchVideoActions();
  }, []);

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
    var currentTime = Math.ceil(videoRef.current.currentTime);
    checkActions(currentTime);

    console.log(
      "currentTime: " +
        Math.ceil(currentTime) +
        " ? " +
        videoRef.current.currentTime +
        " ? rightCornerAd:  " +
        rightCornerAd
    );
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const checkActions = (time) => {
    if (videoActions.length > 0 && position < videoActions.length) {
      var startTime = parseInt(videoActions[position].startTime);
      var duration = parseInt(videoActions[position].duration);
      console.log(
        position +
          " ##### ::::: startTime: " +
          startTime +
          " duration: " +
          duration
      );

      if (time == startTime && rightCornerAd == "") {
        position = position + 1;
        console.log(position);

        setRightCornerAd("show");

        setTimeout(() => {
          setRightCornerAd("");
        }, duration * 1000);
      }
    }
  };

  return (
    <div className="container-full videoBackground p-0">
      <video
        ref={videoRef}
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        class="video-Player"
        width="100%"
        height="100%"
        controls
        poster={thumb}
      />

      {rightCornerAd !== "" ? (
        <button class="close">
          <div class="video-them">
            <img src={slideImg2} alt="new" />
          </div>
        </button>
      ) : null}
    </div>
  );
}
