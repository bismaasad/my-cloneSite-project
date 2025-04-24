import React, { useState } from 'react';
import './styles/DonatePage.css';

const DonationPage = () => {
    const [donationType, setDonationType] = useState('One-time');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('USD'); 
    const handleSubmit = () => {   
        alert(`Thank you for your ${donationType} donation of ${amount} ${currency}!`);
    };
    return (
        <div className="donation-page">  
            <div className="header-logo">
                <img
                    src="https://th.bing.com/th/id/OIP.8IO3LZQGoDo7vr9KSyqizAHaCG?w=540&h=153&rs=1&pid=ImgDetMain"
                    alt="NMDP Logo"
                    className="logo"
                /> 
            </div> 
            <div className='optionsSection'>
                <select className='select currency' >
                    <option>AED|</option>
                    <option>AFN|</option>
                    <option>ALL</option>
                    <option>AMD|</option>
                    <option>ANG|</option>
                    <option>AOA|</option>
                    <option>ARS|</option>
                    <option>AUD|</option>
                    <option>AWG|</option>
                    <option>AZN|</option>
                    <option>BAM|</option>
                    <option>BBD|</option>
                    <option>BDT|</option>
                    <option>BGN|</option>
                    <option>BHD|</option>
                    <option>BIF|</option>
                    <option>BMD|</option>
                    <option>BND|</option>
                    <option>BOB|</option>
                    <option>BRL|</option>
                    <option>BSD|</option>
                    <option>BTN|</option>
                    <option>BWP|</option>
                    <option>BZD|</option>
                    <option>CAD|</option>
                    <option>CHF|</option>
                    <option>CLF|</option>
                </select>
            </div>
            <div className='all'>
            <div className="donation-header">
                <h1>Give more hope and healing</h1>
                <p className='para'> 
                   <span className='firstText'> It takes more than marrow to save lives.</span> With donations from generous
                    people like you, more patients like JJ(pictured above) will get a second chance at life.
                    <span className='secondText'> Your gift today will connect patients to the life-saving marrow transplany they need, ocver uninsured costs for transplant recipients, and fund groundbreaking research.
                    </span>
                    <span className='thirdText'>You can help save more lives by making a donation today.</span>
                </p>
            </div>
            <div className="donation-content">
                <img 
                    src="https://giving.nmdp.org/_next/image?url=https%3A%2F%2Fassets.classy.org%2F33099506%2Fdabee21c-3fc8-11ef-83f0-0affede33573.png&w=640&q=75"
                    alt="Child"
                    className="donation-image"
                />
                <div className="donation-form">
                <h2>Good goes a long way  <span className="heart">♥</span></h2>
                    <div className="donation-type">
                        <label>
                            <input
                                type="radio"
                                name="donationType"
                                value="One-time"
                                checked={donationType === 'One-time'}
                                onChange={(e) => setDonationType(e.target.value)}
                            />
                            One-time
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="donationType"
                                value="Monthly"
                                checked={donationType === 'Monthly'}
                                onChange={(e) => setDonationType(e.target.value)}
                            />
                            Monthly
                        </label>
                    </div>
                    <div className="donation-amount">
                        <button onClick={() => setAmount(35)}>$35</button>
                        <button onClick={() => setAmount(50)}>$50</button>
                        <button onClick={() => setAmount(100)}>$100</button>
                        <button onClick={() => setAmount(250)}>$250</button>
                    </div>
                    <p className='second'>Choose an amount to donate</p>
                    <div className="donation-currency">
                        <span className='dollor' >USD</span>
                        <input type="text" placeholder="$ Other" />
                    </div>
                    <button className="donation-submit" onClick={handleSubmit}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
        </div>
    );  
};
export default DonationPage;
