import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Lives.css';

function Lives() {
  const navigate = useNavigate();

  const MOVEMENT_FIRST_ROUTE = '/MovementFirst';

const handleJoinMovementClick = () => {
  navigate(MOVEMENT_FIRST_ROUTE);
};

  return (
    <div className="lives">
      <header className="lives-header">
        <span className="first">We save lives. And so can you.</span>
        <p>
          At NMDP<sup>SM</sup> (formerly Be The Match<sup>®</sup>), we believe each of us holds the key to curing blood cancers and disorders. Our vision is to create a world where every patient can receive their life-saving cell therapy. Your support helps push the boundaries of what's possible.
        </p>
        <button className="join-movement-button" onClick={handleJoinMovementClick}>
          Join the movement
        </button>
      </header>  

      <div className="lives-cards">
        <div className="card">
          <img src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fcallout-card%2Fnmdp-image-callout-card-swabbing-malik-taylour-cristian-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3Dbe628e50a41148a4b72f4a1b00a7a361%26hash%3D77F459125FBD591317F8D2F3D6CBFEA7&w=3840&q=75" />
          <div className="ALL">
            <h2>Register to be a blood stem cell donor</h2>
            <p>Join our donor registry to help those who don't have a suitable match in their family.</p>
            <button className="rejistry"> registry</button>
          </div>
        </div>  
        <div className="card">
          <img
            src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fcallout-card%2Fnmdp-image-callout-card-women-bike-riding-in-nmdp-shirts-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3Da1d8d774c18845999cd8b444dc27366c%26hash%3D23F8D56ABAE940B3E1950D3CB17843D7&w=3840&q=75"
            alt="Fundraise to save lives"
          />
          <div className="ALL">
            <h2>Fundraise to save lives</h2>
            <p>Help patients struggling with medical costs by attending a community-led fundraiser or hosting your own.</p>
            <button className="fundraise">Fundraise</button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fcallout-card%2Fnmdp-image-callout-card-women-with-nmdp-signs-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3D717555189c7b44dcb8c1c3229ce17e00%26hash%3D74B7A565743C242371A30098731F4D04&w=3840&q=75"
            alt="Become a legislative advocate"
          />
          <div className="ALL">
            <h2>Become a legislative advocate</h2>
            <p>Engage your state and federal legislators to help maintain and improve patient access to care.</p>
            <button className="advocate">Advocate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lives;
