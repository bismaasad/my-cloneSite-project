import React, { useState } from "react";
import "./styles/joinFifth.css";

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    "Who can register to be a donor?",
    "Can I register with NMDP if I've already registered with another organization?",
    "How are donors matched to patients?",
    "How long will it take me to get matched?",
    "How long does it take to recover from donating?",
  ];

  return (
    <div className="faq-container">
      <div className="faq-image">
        <img
          src="https://my.bethematch.org/resource/1706162842000/JoinFAQImage#JoinFAQImage.png" 
          alt="Donor holding a sign"
        />
      </div>
      <div className="faq-content">
        <h1>Frequently asked questions</h1>
        <p>
          You probably have a few questions about what it takes to save a life.
          We get it—we’d have them too.
        </p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>
                    This is a sample answer for: "{faq}". Replace this with
                    actual content.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
