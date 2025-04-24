import React from 'react';
import './styles/joidHeader.css';

const AnnouncementHeader = () => {
  return (
    <div className="Header">
      <div className="announcement">
        Introducing NMDP, formerly known as the National Marrow Donor Program and Be The Match.
        <span className="bold-text">
          Our name has changed but our mission has not: We save lives through cell therapy.
        </span>
        <a href="#" className="learn-more">Learn more</a>
      </div>
      <div className="top-bar">  
        <div className="logo">nmdp</div>
        <div className="top-links">
          <a href="#" className="language">English</a>
          <a href="#" className="login">Log in</a>
        </div>
      </div>  
    </div>
  );
};

export default AnnouncementHeader;
  