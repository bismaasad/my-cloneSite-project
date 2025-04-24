import React, { useState } from "react";
import "./styles/Stories.css"; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  const Story_First_Route = '/storyFirst';

  const handleJoinStoryClick = () => {
    navigate(Story_First_Route);
  }

  const slides = [
    {
      img: "https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fcell-structure-carousel%2Fnmdp-image-cellstructure-carousel-recipient-johannam-smiling-500x500.jpg%3Fh%3D500%26iar%3D0%26w%3D500%26rev%3D8ac752044d2d468ba56e327fd3f9409d%26hash%3D0913001F53E30E46FC684BB6AD6C9E9B&w=1920&q=75", 
      title: "Johanna’s second chance at life",
      description: "Innovative research shows promising results—giving new hope to patients like Johanna who don’t have a full donor match.",
      buttonText: "Read Johanna's story",
      onClick: handleJoinStoryClick,
    },
    {
      img: "https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fcell-structure-carousel%2Fnmdp-image-cellstructure-carousel-jeremiah-holding-blood-bag-500x500.jpg%3Fh%3D500%26iar%3D0%26w%3D500%26rev%3Dc3e38f3b31204cac943015bd1c914f21%26hash%3DA571B9B5919B1E02A1FA44B2EDAB957C&w=1920&q=75", 
      title: "The importance of saying 'yes'",
      description: "Jeremiah’s childhood dream of being a hero took a real-life turn when he faced the decision to donate blood stem cells.",
      buttonText: "Read Jeremiah's story",
    },
    {
      img: "https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fcell-structure-carousel%2Fnmdp-image-cellstructure-carousel-searchingpatient-caydena-smiling-500x500.jpg%3Fh%3D500%26iar%3D0%26w%3D500%26rev%3D4775b3895358419783958bce3ecae6aa%26hash%3D038F04D437B0B45126C7B3F77500169D&w=1920&q=75", 
      title: "A bright future awaits",
      description: "Through countless donations, children around the world have been given a chance to thrive and succeed.",
      buttonText: "Discover the impact",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Start at first slide

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="Carousel">
      <h2>Stories of the mission</h2>
      <div className="Carousel-slide">
  {/* Previous Image */}
  <div className="side-image">
    <img 
      src={slides[(currentIndex - 1 + slides.length) % slides.length].img} 
      alt="Previous slide" 
    />
  </div>

  {/* Current Image */}
  <div className="main-image">
    <img 
      src={slides[currentIndex].img} 
      alt={`Slide ${currentIndex + 1}`} 
    />
  </div>

  {/* Next Image */}
  <div className="side-image">
    <img 
      src={slides[(currentIndex + 1) % slides.length].img} 
      alt="Next slide" 
    />
  </div>
</div>


      <div className="Carousel-text">
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].description}</p>
        <button 
          className="Carousel-button" 
          onClick={slides[currentIndex].onClick || (() => {})}
        >
          {slides[currentIndex].buttonText}
        </button>
      </div>

      <div className="Carousel-controls">
        <button className="prev" onClick={handlePrevClick}>
          <FaChevronLeft />
        </button>
        <button className="next" onClick={handleNextClick}>
          <FaChevronRight />
        </button>
      </div>

      {/* Navigation dots */}
      <div className="Carousel-navigation">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
