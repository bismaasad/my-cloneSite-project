import React from "react";
import "./styles/impactFirst.css";

const impactFirst = () => {
  return (
    <div className="GET-involved-container">
      <div className="TEXT-section">
        <h2>Stories and impact</h2>
        <p>
        Get inspired by our patients, donors and supporters and see how we're driving cell therapy forward.
        </p>
      </div>
      <div className="IMAGE-section">
        <img
          src='https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fhomepage-hero%2Fnmdp-image-homepagehero-donor-joeyb-smiling-1404x1054.jpg%3Fh%3D1054%26iar%3D0%26w%3D1404%26rev%3D95e3dc1327784247922686252b567a5a%26hash%3DD4C467DC70BDF04442082CF6CFB47D2C&w=1920&q=75'
          alt="NMDP supporters at a summer Pride event"
        />
        <p className="IMAGE-caption">
        Joey, blood stem cell donor.
        </p>
      </div>
      <div className="transplant">
      <header className="transplant-header">
        <span className="trans">Transplant stories</span>
        <p>
        Patients are the heart of what we do at NMDP<sup>SM</sup>. Their journeys are long and filled with challenges and their resilience fuels our vision to create a world where <strong> every</strong> patient can receive their life-saving cell therapy.
        </p>
        <button className="transplant-button">
        All Transplant stories
        </button>
      </header>
      </div>
    </div>
    
  );
};

export default impactFirst;
