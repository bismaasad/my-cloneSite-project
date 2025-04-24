import React, { useState } from 'react';
import './styles/Image.css';

const images = [     
  {
    heading: 'Join Naz to help Cayden find his match',
    text: "Minnesota Timberwolves Center Naz Reid is helping Cayden find his donor match. You can too with a gift of any size today.",
    buttonText: (
      <>
        Give today
        <i
          className="fa-solid fa-arrow-up-right-from-square"
          style={{ marginLeft: "8px" }}
        ></i>
      </>
    ),
    src: 'https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fhero-carousel%2Fnmdp-image-herocarousel-naz-reid-cayden-988x456.jpg%3Fh%3D456%26iar%3D0%26w%3D988%26rev%3D041963886bfe4b49b91e0820ed336c97%26hash%3D20238F55223CC9BE594F22D13DFB683D&w=1920&q=75',
  },
  {
  heading: 'Leading research to find a Donor For All',
    text: "Science is changing what's possible for patients who need a life-saving cure. And we won't rest until there’s a world where every patient can receive their life-saving cell therapy.",
    buttonText: 'Discover how',
    src: 'https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fhero-carousel%2Fnmdp-image-homepagehero-recipient-johannam-and-catherine-smiling-988x456.jpg%3Fh%3D456%26iar%3D0%26w%3D988%26rev%3D52db2d486cdc4e7ca65c2bf7626c2abb%26hash%3D7DAEC8E349ABE4DA2DF3C49B596A9D0E&w=1920&q=75',
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const { src, heading, text, buttonText } = images[currentIndex];

  return (
    <div className="carousel">
      <div className="carousel-text">
        <h2>{heading}</h2>
        <p>{text}</p>
        <button className="carousel-button">{buttonText}
          
        </button>  
      </div>
      <div className="carousel-image">
      <div className='half-circle-left'>
  <img src='https://www.nmdp.org/static/plum-circle-right.webp' alt='Image 1' />
</div>
<div className='half-circle-right'>
  <img src='https://www.nmdp.org/static/dayglow-circle-left.webp' alt='Image 2' />
</div>   
<div className="carousel-images">
  <img src={src} alt={heading} />
  </div>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

