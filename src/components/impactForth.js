import React from 'react';
import './styles/impactForth.css';
function BOXES(){
    return(
<div className="LIves-import">
        <div className="read">
          <img src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-donor-jeremiah-holding-blood-bag-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3D30713b73bdb74952bc30603499909078%26hash%3DB723E99E9A8D6F6F1FFA08B45EEA2711&w=1920&q=75" />
          <div className="compl">
            <h2>The importance of saying “yes” to donate blood stem cells</h2>
            <p>Jeremiah's childhood dream of being a hero took a real-life turn when he faced the decision to donate blood stem cells.</p>
            <button className="Jeremiah">Read Jeremiah's story</button>
          </div>
        </div>
        <div className="import">
          <img
            src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-donor-natalieo-with-dog-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3Df5cc54f7d0664abaa5548e5cf545a841%26hash%3D99AA5EFEF2865CCFC4DD1B541591ABEE&w=1920&q=75"
            alt="Fundraise to save lives"
          />
          <div className="compl">
            <h2>A simple swab launched Natalie's donor journey</h2>
            <p>A registry recruitment event led Natalie to an unexpected act of compassion, transforming her life—and someone else's.</p>
            <button className="Natalie">Read Natalie's story</button>
          </div>
        </div>
        <div className="import">
          <img
            src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-donor-lancepekus-and-recipient-ashley-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3Da8940da9f74249a7a35533a5d9b9e481%26hash%3DC7402AB390EDD1C07869E3F42C551B97&w=1920&q=75"
            alt="Become a legislative advocate"
          />
          <div className="compl">
            <h2>The Cowboy Ninja Warrior commits a life-saving act</h2>
            <p>Lance Pekus took on his toughest challenge yet: saving a life through blood stem cell donation.</p>
            <button className="Lance">Read Lance's story</button>
          </div>
        </div>
        </div>
    );
}
export default BOXES;