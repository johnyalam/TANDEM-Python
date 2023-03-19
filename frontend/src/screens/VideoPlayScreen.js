import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import thumb from "../assets/images/thumb_1.png";
import message_bac_1 from "../assets/images/message_bac_1.png";
import axios from "axios";
import ImageComponent from "../components/ImageComponent";
import ImagePersonaMessage from "../components/ImagePersonaMessage";
import ImagePersonaMessageBottom from "../components/ImagePersonaMessageBottom";

let actionTimeArray = [];
let actionPosition = 0;

export default function VideoPlayScreen() {
  const params = useParams();

  const [videoActions, setVideoActions] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);

  const [rightCornerAd, setRightCornerAd] = useState("");
  const [actionThumb, setActionThumb] = useState("");

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef();
  const overlayRef = useRef(null);

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
          // setTimeout(() => {
          //   setRightCornerAd("");
          // }, duration * 1000);
        }
        break;
      }
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const [selectedPerson1, setSelectedPerson1] = useState(null);
  const [selectedPerson2, setSelectedPerson2] = useState(null);
  const [selectedPerson3, setSelectedPerson3] = useState(null);
  const [selectedPerson4, setSelectedPerson4] = useState(null);

  const handlePersonClick1 = (person) => {
    if (selectedPerson1 != null) {
      setSelectedPerson1(null);
    } else {
      setSelectedPerson1(person);
    }
  };
  const handlePersonClick2 = (person) => {
    if (selectedPerson2 != null) {
      setSelectedPerson2(null);
    } else {
      setSelectedPerson2(person);
    }
  };
  const handlePersonClick3 = (person) => {
    if (selectedPerson3 != null) {
      setSelectedPerson3(null);
    } else {
      setSelectedPerson3(person);
    }
  };
  const handlePersonClick4 = (person) => {
    if (selectedPerson4 != null) {
      setSelectedPerson4(null);
    } else {
      setSelectedPerson4(person);
    }
  };

  return (
    <div className="container-full videoBackground p-0">
      <video
        ref={videoRef}
        className="video"
        src={videoDetails.length > 0 ? videoDetails[0].video : null}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        class="video-Player"
        width="100%"
        height="auto"
        poster={videoDetails.length > 0 ? videoDetails[0].thumb : thumb}
      />

      {videoActions.length > 0 && rightCornerAd !== "" ? (
        <div>
          <div onClick={handlePersonClick1}>
            <ImageComponent actionThumb={videoActions[0].thumb} position={1} />
            {selectedPerson1 != null ? (
              <ImagePersonaMessage
                message={videoActions[0].details}
                title={videoActions[0].title}
                thumb={message_bac_1}
                position="left-top"
              />
            ) : null}
          </div>

          <div onClick={handlePersonClick2}>
            <ImageComponent actionThumb={videoActions[1].thumb} position={2} />
            {selectedPerson2 != null ? (
              <ImagePersonaMessage
                message={videoActions[1].details}
                title={videoActions[1].title}
                thumb={message_bac_1}
                position="right-top"
              />
            ) : null}
          </div>

          <div onClick={handlePersonClick3}>
            <ImageComponent actionThumb={videoActions[2].thumb} position={3} />
            {selectedPerson3 != null ? (
              <ImagePersonaMessageBottom
                message={videoActions[2].details}
                title={videoActions[2].title}
                thumb={message_bac_1}
                position="left"
              />
            ) : null}
          </div>

          <div onClick={handlePersonClick4}>
            <ImageComponent actionThumb={videoActions[3].thumb} position={4} />
            {selectedPerson4 != null ? (
              <ImagePersonaMessageBottom
                message={videoActions[3].details}
                title={videoActions[3].title}
                thumb={message_bac_1}
                position="right"
              />
            ) : null}
          </div>
        </div>
      ) : null}

      {/* {rightCornerAd !== "" ? (
        <ImageComponent actionThumb={actionThumb} position="top-left" />
      ) : null} */}
    </div>
  );
}
