import React, { useState } from 'react';
import './styles/movementSecond.css';

const slides = [     
  {
    src: 'https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-donor-jeremiah-holding-blood-bag-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3D30713b73bdb74952bc30603499909078%26hash%3DB723E99E9A8D6F6F1FFA08B45EEA2711&w=1920&q=75',
    heading: 'The  importance of s,aying "yes" to donate blood dtem cells',
    text: "Jeremiah's childhood dream of being a hero took a real-life turn when he faced the decision to donate stem cells. ",
    buttonText: "Read Jeremiah's story",
     },
  { 
    src: 'https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-donor-natalieo-with-dog-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3Df5cc54f7d0664abaa5548e5cf545a841%26hash%3D99AA5EFEF2865CCFC4DD1B541591ABEE&w=1920&q=75',
    heading: "A simple swab launched Natalie's donor journey",
    text: "A registry recruitment event led Natalie to an unexpected act of compassion , transforming her life-and someone else's.",
    buttonText: "Read Natalie's story",
},
{ 
  src: 'https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-donor-bradyr-holding-blood-bag-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3D11c7d948016746c5a515bcc027c74c72%26hash%3DCFD791839F2363B5908A02EF4B9324B9&w=1920&q=75',
  heading: "A University of Rhode Island football player tranforms a life by donating blood stem cells",
  text: "Brady's donation story blew up on social, sparking an outpouring of gratitude and changing hir perspective forever.",
  buttonText: "Read Brady's story",
},
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const { src, heading, text, buttonText } = slides[currentIndex];

  return (
    <div className='Back'>
      <div className='hdng'>Donor stories</div>
    <div className="CArousel">
        <div className="CArousel-Images">
  <img src={src} alt={heading} />
  </div>
      <div className="CArousel-Text">
        <h2>{heading}</h2>
        <p>{text}</p>
        <button className="Carousel-Button">{buttonText}</button>
      </div>
    </div>
    <div className='CArousel-NAvigation'>
      <div className="CArousel-Controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
      <div className="CArousel-Dots">
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

