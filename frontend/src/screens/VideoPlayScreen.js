import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import thumb from "../assets/images/thumb_1.png";
import axios from "axios";

var actionTimeArray = [];
export default function VideoPlayScreen() {
  const params = useParams();

  const [videoActions, setVideoActions] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);

  const [rightCornerAd, setRightCornerAd] = useState("");
  const [actionThumb, setActionThumb] = useState("");

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef();

  useEffect(() => {
    actionTimeArray = [];

    async function fetchVideoActions() {
      const { data } = await axios.get("/api/video-action/" + params.id);
      console.log("fetchVideoActions : " + data);
      for (const element of data) {
        actionTimeArray.push(Math.ceil(element.startTime));
      }
      setVideoActions(data);
    }
    fetchVideoActions();

    async function fetchSingleVideo() {
      const { data } = await axios.get("/api/single-video/" + params.id);
      setVideoDetails(data);

      if (data.length > 0) {
        console.log("fetchSingleVideo : " + data[0].video);
      }

      setTimeout(() => {
        videoRef.current.play();
      }, duration * 9000);
    }
    fetchSingleVideo();
  }, []);

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
    let currentTime = Math.ceil(videoRef.current.currentTime);
    if (actionTimeArray.includes(currentTime)) {
      getActionObject(currentTime);
    }
  };

  const getActionObject = (time) => {
    for (const element of videoActions) {
      let actionObject = element;
      let duration = parseInt(actionObject.duration);

      if (time == actionObject.startTime) {
        if (rightCornerAd == "") {
          setRightCornerAd("show");
          setActionThumb(actionObject.thumb);
          setTimeout(() => {
            setRightCornerAd("");
          }, duration * 1000);
        }
        break;
      }
    }
  };

  return (
    <div className="container-full videoBackground p-0">
      <video
        ref={videoRef}
        src={videoDetails.length > 0 ? videoDetails[0].video : null}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        class="video-Player"
        width="100%"
        height="100%"
        poster={videoDetails.length > 0 ? videoDetails[0].thumb : thumb}
      />

      {rightCornerAd !== "" ? (
        <button class="close">
          <div class="video-them">
            <img src={actionThumb} alt="new" />
          </div>
        </button>
      ) : null}
    </div>
  );
}
