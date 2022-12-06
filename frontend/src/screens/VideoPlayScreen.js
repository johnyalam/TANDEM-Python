import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
 
import { Player } from 'video-react';
import slideImg1 from '../assets/video-placeholder.png';
function VideoPlayScreen() {
  return (
    <div className="container-full videoBackground p-0">
      <div class="video-Player">
        <button class="close"><i className="fas fa-search"></i></button>
      <Player
      playsInline
      poster={slideImg1}
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
    </div>
    </div>
  );
}

export default VideoPlayScreen;
