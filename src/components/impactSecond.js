import React from 'react';
import './styles/impactSecond.css';
function BOXES(){
    return(
<div className="LIves-read">
        <div className="read">
          <img src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-searchingpatient-caydena-smiling-01-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3D0c175af1eb7b4ebfad16078279dac3ab%26hash%3D4909FFE062465B9075870C787F2C70DC&w=1920&q=75" />
          <div className="comp">
            <h2>Give Cayden the gift of possibility</h2>
            <p>Leukemia has taken a lot from this 7-year-old—but not his fighting spirit. You could be the match that saves his life.</p>
            <button className="Cayden">Read Cayden's story</button>
          </div>
        </div>
        <div className="read">
          <img
            src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-searchingpatient-rhyder-smiling-in-sunflower-field-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3Da559827f69f649b6854f737210494ca6%26hash%3DF92574837B6C43890A5E1D54CBC7745E&w=1920&q=75"
            alt="Fundraise to save lives"
          />
          <div className="comp">
            <h2>Help Rhyder find a life-saving blood stem cell donor</h2>
            <p>Searching patient Rhyder, known for his “aloha spirit,” got support from hundreds who came to BYU-Hawaii for a donor drive.</p>
            <button className="Rhyder">Read Rhyder's story</button>
          </div>
        </div>
        <div className="read">
          <img
            src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-recipient-layla-smiling-in-snow-gear-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3Df2c12fdc996348698aba7d2bbd58f6d5%26hash%3D8DEEEBB8CE1F23267A43429E862E9EED&w=1920&q=75"
            alt="Become a legislative advocate"
          />
          <div className="comp">
            <h2>St. Louis Blues superfan has victory over rare blood disorder</h2>
            <p>Laila, a young St. Louis Blues supporter, beat the odds when she received a transplant—and gained a new friend along the way.</p>
            <button className="Laila">Read Laila's story</button>
          </div>
        </div>
        </div>
    );
}
export default BOXES;