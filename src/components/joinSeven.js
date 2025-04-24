import React, { useState } from 'react';
import './styles/joinSeven.css';

const DonorRegistry = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="donor-registry">
      <div className="donor-text">
        <h1>Join the donor registry</h1>
        <p>
          Before you begin, please be aware of our <a href="/guidelines">age guidelines</a>.
          For the safety of patients and donors, you need to be between 18 and 40 to join
          the registry. That's because research has shown that cells from younger donors
          lead to better long-term survival for patients.
        </p>
        <div className="donor-options">
          <p><strong>Which describes you?*</strong></p>
          <div className="button-group">
            <button
              className={`option-button ${selectedOption === '18-40' ? 'active' : ''}`}
              onClick={() => handleOptionClick('18-40')}
            >
              Between 18 And 40
            </button>
            <button
              className={`option-button ${selectedOption === '41+' ? 'active' : ''}`}
              onClick={() => handleOptionClick('41+')}
            >
              41 Or Older
            </button>
          </div>
          <p>
            <a href="/pre-register">Under 18 years old? Pre-register</a>
          </p>
        </div>
        <button className="next-button">Next</button>
      </div>
      <div className="donor-image">
        <img
          src="https://my.bethematch.org/resource/1692842543000/JoinRegUpdatedImage/Join_The_Registry.png" 
          alt="Group of happy people"
        />
      </div>
    </div>
  );
};

export default DonorRegistry;
