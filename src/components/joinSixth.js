import React from "react";
import './styles/joinSix.css';


const PrivacyBanner = () => {
  return (
    <div className="privacy-banner">
      <div className="content">
        <h1>Your privacy is our priority</h1>
        <p>
          For more than 35 years, we’ve managed the most diverse blood stem cell
          registry in the world—and the only one that’s federally funded and
          Congressionally authorized.
        </p>
        <p>
          During that time, protecting the personal information of our donors
          has been a top priority. Learn more in our{" "}
          <a href="/privacy-policy">privacy policy</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyBanner;
