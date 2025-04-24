import React from "react";
import "./styles/joinForth.css";

const VideoComponent = () => {
  return (
    <div className="video-container">
      <h1>4 things to know before joining</h1>
      <div className="video-frame">
        <iframe
          src="https://youtu.be/dj5cN_HRlgE"
          title="4 things to know"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoComponent;
