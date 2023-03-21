import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import thumb from "../assets/images/thumb_1.png";
import clickIcon from "../assets/images/click.png";
import message_bac_1 from "../assets/images/message_bac_1.png";
import axios from "axios";
import ImageComponent from "../components/ImageComponent";
import ImagePersonaMessage from "../components/ImagePersonaMessage";

let actionTimeArray = [];
let actionTimeOutArray = [];
// let actionPosition = 0;

export default function VideoPlayScreen() {
  const params = useParams();

  const [selectedPerson1, setSelectedPerson1] = useState(null);
  const [selectedPerson2, setSelectedPerson2] = useState(null);
  const [selectedPerson3, setSelectedPerson3] = useState(null);
  const [selectedPerson4, setSelectedPerson4] = useState(null);

  const [videoActions, setVideoActions] = useState([]);
  const [currentActions, setCurrentActions] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);

  // const [rightCornerAd, setRightCornerAd] = useState("");
  // const [actionThumb, setActionThumb] = useState("");

  // const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef();
  // const overlayRef = useRef(null);

  useEffect(() => {
    actionTimeArray = [];

    async function fetchVideoActions() {
      const { data } = await axios.get("/api/video-action/" + params.id);
      console.log("fetchVideoActions : " + data);
      for (const element of data) {
        actionTimeArray.push(Math.ceil(element.startTime));
        actionTimeOutArray.push(Math.ceil(element.duration));
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
    let currentTime = Math.ceil(videoRef.current.currentTime);

    // Check any action time is matched
    if (actionTimeArray.includes(currentTime)) {
      let currentActions = videoActions.filter(
        (item) => Math.ceil(item.startTime) === currentTime
      );
      setCurrentActions(currentActions);
      clearPersonaClick();
    }
    // Checked any action duration is over
    if (actionTimeOutArray.includes(currentTime)) {
      if (currentActions != null) {
        let currentArray = currentActions.filter(
          (item) => Math.ceil(item.duration) !== currentTime
        );
        setCurrentActions(currentArray);
      }
    }
  };

  const clearPersonaClick = () => {
    setSelectedPerson1(null);
    setSelectedPerson2(null);
    setSelectedPerson3(null);
    setSelectedPerson4(null);
  };

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
        controls
        poster={videoDetails.length > 0 ? videoDetails[0].thumb : thumb}
      />
      {currentActions.length > 3 ? (
        <div onClick={handlePersonClick4}>
          <ImageComponent
            personaObj={currentActions[3]}
            actionThumb={videoActions[3].thumb}
            position={4}
          />

          {selectedPerson4 != null ? (
            <ImagePersonaMessage
              message={currentActions[3].details}
              title={currentActions[3].title}
              thumb={message_bac_1}
              position="right-bottom"
            />
          ) : null}
        </div>
      ) : null}
      {currentActions.length > 2 ? (
        <div onClick={handlePersonClick3}>
          <ImageComponent
            personaObj={currentActions[2]}
            actionThumb={currentActions[2].thumb}
            position={3}
          />
          {selectedPerson3 != null ? (
            <ImagePersonaMessage
              message={currentActions[2].details}
              title={currentActions[2].title}
              thumb={message_bac_1}
              position="left-bottom"
            />
          ) : null}
        </div>
      ) : null}
      {currentActions.length > 1 ? (
        <div onClick={handlePersonClick2}>
          <ImageComponent
            personaObj={currentActions[1]}
            actionThumb={currentActions[1].thumb}
            position={2}
          />
          {selectedPerson2 != null ? (
            <ImagePersonaMessage
              message={currentActions[1].details}
              title={currentActions[1].title}
              thumb={message_bac_1}
              position="right-top"
            />
          ) : null}
        </div>
      ) : null}
      {currentActions.length > 0 ? (
        <div onClick={handlePersonClick1}>
          <ImageComponent
            personaObj={currentActions[0]}
            actionThumb={currentActions[0].thumb}
            position={1}
          />
          {selectedPerson1 != null ? (
            <ImagePersonaMessage
              message={currentActions[0].details}
              title={currentActions[0].title}
              thumb={message_bac_1}
              position="left-top"
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
