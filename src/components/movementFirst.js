import React from "react";
import "./styles/movementFirst.css";

const GetInvolved = () => {
  return (
    <div className="get-involved-container">
      <div className="text-section">
        <h2>Get involved</h2>
        <p>
          You have the power to change lives. Use that power for good; join the
          movement. With NMDP, good goes a long way.
        </p>
      </div>
      <div className="image-section">
        <img
          src='https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fhomepage-hero%2Fnmdp-image-homepagehero-volunteers-at-pride-event-1404x1054.jpg%3Fh%3D1054%26iar%3D0%26w%3D1404%26rev%3D45ece52089a3481b8f77f49b9338e594%26hash%3D20838F75A53E7AC460EC0B570834EAC8&w=1920&q=75'
          alt="NMDP supporters at a summer Pride event"
        />
        <p className="image-caption">
          NMDP supporters volunteer at a summer Pride event.
        </p>
      </div>
    </div>
  );
};

export default GetInvolved;
