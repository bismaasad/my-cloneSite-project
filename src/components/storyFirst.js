import React from 'react';
import './styles/storyFirst.css';

const StoryFirst = () => {
  return (
    <div className="story-container">
      <nav className="breadcrumb">
        <a href="#stories">Stories and impact</a> &gt; 
        <a href="#research">Research and innovation</a>
      </nav>
      <h1 className="story-title">
        The ACCESS clinical trial gave Johanna a second chance at life
      </h1>
      <img
        src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-recipient-johannam-and-catherine-smiling-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3D6ac93c08627c426da74506601bd608db%26hash%3DD1FF895313AFE1D3A5B69DE4A2245488&w=1080&q=75" 
        alt="Two women embracing"
        className="story-image"
      />
      <p className="story-date">Original published date: 8/29/2024</p>
    </div>
  );
};

export default StoryFirst;
