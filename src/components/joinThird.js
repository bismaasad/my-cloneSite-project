import React from 'react';
import './styles/joinThird.css';

const steps = [
  {
    id: 1,
    icon: '📱', // Replace this with an actual image if needed
    title: 'Register online',
    description: 'Answer simple questions about your medical history to make sure you meet health guidelines.',
  },
  {
    id: 2,
    icon: '🧪', // Replace this with an actual image if needed
    title: 'Swab cheek',
    description: 'Your sample will be tested, and your genetic type will be added to the NMDP Registry℠.',
  },
  {
    id: 3,
    icon: '🧬', // Replace this with an actual image if needed
    title: 'Get matched',
    description:
      'Because of the genetic complexity of matching donors to patients, it could be a few months or many years before you’re matched to a patient.',
  },
  {
    id: 4,
    icon: '💉', // Replace this with an actual image if needed
    title: 'Donate',
    description:
      'Patients and their families are counting on you to keep your promise to donate, if needed. You could be someone’s only hope for a cure.',
  },
];

const StepUp = () => {
  return (
    <div className="step-up-container">
      <h1 className="step-up-title">Step up to change a life</h1>
      <p className="step-up-subtitle">
        Become a potential lifesaver to patients battling blood cancers or other blood diseases who need a blood stem cell donor.
      </p>
      <div className="step-up-steps">
        {steps.map((step) => (
          <div className="step" key={step.id}>
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepUp;
