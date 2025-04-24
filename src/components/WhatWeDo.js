import React from 'react';
import './styles/WhatWeDo.css';

const whatWeDoData = [
    {
        image: 'https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fcallout-card%2Fnmdp-image-callout-card-vials-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3D19ebb2b405aa4906a40846638b398b00%26hash%3D21805842D9636F829216C31A75B72B32&w=3840&q=75',
        title: 'We find cures',
        description: 'Because of NMDP researchers, blood stem cell transplants have evolved. What was once a new procedure is now a standard treatment for many life-threatening diseases. We continue our work to find treatments and cures for blood cancers and other blood-related diseases.',
        buttonLabel: 'Our research',
    },   
    {
        image: 'https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fcallout-card%2Fnmdp-image-callout-card-young-girl-in-hospital-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3D0924a3a67d834adc88013d157c8f8330%26hash%3D60F546EF6DAA67549558ACC9EC383BBD&w=3840&q=75', 
        title: 'We help patients live longer, healthier lives',
        description: 'In partnership with the Medical College of Wisconsin, NMDP is running approximately 200 clinical trials and studies. These trials will help provide new medications, improve transplant processes and give us a greater understanding of diseases. As a result, we can help patients thrive.',
        buttonLabel: 'Clinical trials',
    },
    {
        image: 'https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fcallout-card%2Fnmdp-image-callout-card-patient-with-doctor-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3D7d3418c0a00c4e15bc0985c78c154e32%26hash%3D5AD0AD65E801634DC77E9072111EC85D&w=3840&q=75',
        title: 'We show up',
        description: 'Patients and caregivers have needs before, during, and after transplant. We provide physical, emotional, and spiritual support to everyone involved throughout the process and financial support for our patients.',
        buttonLabel: 'Support for patients',
    },
];  

const WhatWeDo = () => { 
    return ( 
        <div className="what-we-do">
            <h2>What we do</h2>
            <p>We save lives through cell therapy. When a patient receives cell therapy, their diseased or damaged cells are replaced by healthy ones. The process might use a patient’s own cells or those from a donor. At NMDP, we harness the power of cell therapy to treat or cure blood cancers and other blood disorders.</p>
            <div className="cards">
                {whatWeDoData.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.image} alt={item.title} className="card-image" />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <button className="card-button">{item.buttonLabel}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatWeDo;
