import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Impact.css';
 
function Impact() {
  const navigate = useNavigate();

  const IMPACT_FIRST_ROUTE = '/impactFirst';

const handleJoinImpactClick = () => {
  navigate(IMPACT_FIRST_ROUTE);
};
  return (
    <div className="impact">
      <h2>Our impact is growing</h2>
      <p>
        We continue to help more patients by working with partners around the world and serving as a<span className='new'> driver for change.</span>
      </p>
      <button className="impact-button" onClick={handleJoinImpactClick}>Our impact</button>
        
      <div className="impact-stats">
        <div className="stat">
          <h3>130,000+</h3>
          <p>People NMDP has impacted through cell therapy since 1987</p>
        </div>
        <div className="stat">
          <h3>41 million+</h3>
          <p>Number of potential donors worldwide that patients have access to through every donor search</p>
        </div>
        <div className="stat">
          <h3>$5.5 million</h3>
          <p>Provided by supporters through NMDP's patient assistance program in 2023</p>
        </div>
        <div className="stat">
          <h3>200</h3>
          <p>Ongoing studies and clinical trials through NMDP's collaborative research program</p>
        </div>
      </div>
      <div className='NEW'>
        <img src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fstat-callout%2Fnmdp-graphic-stat-callout-circles-and-pill-1440x200.png%3Fh%3D200%26iar%3D0%26w%3D1440%26rev%3D8e1a7cb13c1541f08db66fb139c39b02%26hash%3DA30375571D745B931C96627F27289E70&w=1920&q=75"></img>
      </div>
    </div>
  );
}

export default Impact;
