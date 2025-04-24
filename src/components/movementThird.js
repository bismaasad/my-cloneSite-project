import React from 'react';
import './styles/movementThird.css';

function Lives() {

  return (
    <div className="donor">
      <header className="donor-header">
        <span className="FIrst">Become a donor</span>
        <p>
        There’s no one else quite like you—and that could make all the difference for a patient in need of a blood stem cell transplant. With your unique genetic type, you could be the donor match they’ve been looking for, their cure or treatment.
        </p>
        <button className="donor-button">
          Learn What's involved
        </button>
      </header>
      <div className='below'>
      <p>Already know the facts? <a href="#">Join the NMDP <sup>SM</sup> Registry now.</a></p>
      </div>
      </div>
    );
}
export default Lives;