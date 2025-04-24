import React from 'react';
import './styles/joinSecond.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Join the movement. Save a life.</h1>
        <p>
          Every year, 18,000 patients are diagnosed with life-threatening blood cancers or other blood disorders 
          that could be cured or treated with a blood stem cell transplant. But 70% of them don’t have a fully 
          matched donor in their family. They depend on <span className="highlight">NMDP</span> to find an unrelated donor.
        </p>
        <p className="highlight">
          Your healthy blood stem cells may be a patient’s best or only hope for a cure.
        </p>
      </div>
      
    </div>
  );  
};

export default Hero; 

