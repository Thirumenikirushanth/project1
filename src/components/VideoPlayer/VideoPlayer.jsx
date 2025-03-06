import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/college-video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const playerRef = useRef(null);

  const handleClosePlayer = (e) => {
    if (e.target === playerRef.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={playerRef}
      onClick={handleClosePlayer}
    >
      <video src={video} autoPlay muted controls onClick={(e) => e.stopPropagation()}></video>
    </div>
  );
};

export default VideoPlayer;

