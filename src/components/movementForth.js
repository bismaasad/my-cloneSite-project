import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/movementForth.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa';


function Lives() {

  return (
      <div className="LIves-CArds">
        <div className="chart">
          <img src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-kyle-running-race-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3Dba21aac4dbc24a2f8a8f3cb83c70edea%26hash%3DDB28995CE21A120383ABDC88719B81C7&w=1920&q=75" />
          <div className="full">
            <h2>Fundraise</h2>
            <p>Raising funds is essential to saving lives through cell therapy. Donations allow us to offer grants to patients who face financial obstacles, support research that paves the way to new cures and expand the donor registry.</p>
            <button className="fundraising">Get starting fundraising</button>
          </div>
        </div> 
        <div className="chart">
          <img
            src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-black-female-students-with-nmdp-signs-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3D919c2d98092543d78b1b8a11259a96cd%26hash%3DE0FA6DF780F6F4670086AA4310BA752F&w=1920&q=75"
            alt="Fundraise to save lives"
          />
          <div className="full">
            <h2>Spread the word</h2>
            <p>Raise awareness for all the critical work we do together by sharing our mission with your friends, family and others. By getting the word out, you multiply the impact we can make for patients.</p>
            <button className="cause">Promote the cause</button>
          </div>
        </div>
        <div className="chart">
          <img
            src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-sitecore-employees-joyking-jamiemargolis-with-check-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3Dbcc760d4e11444149cea044f769c58c6%26hash%3D87EADEA1F7376DF8D22995E187B56B46&w=1920&q=75"
            alt="Become a legislative advocate"
          />
          <div className="full">
            <h2>Make a gift</h2>
            <p>With a financial gift, you can unlock more cures for patients. Find out how your one-time gift, monthly donation or decision to include NMDP in your estate planning makes our mission possible. Together, we can ensure that every patient can receive their life-saving cell therapy.</p>
            <button className="gift">Make a gift</button>
          </div>
        </div>
        <div className="chart">
          <img src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-nmdp-advocates-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3D0b03e5881ae2405d92fbab28f98e10cc%26hash%3D37D59E6DDBB2F8F191AE84210BCF9AC0&w=1920&q=75" />
          <div className="full">
            <h2>Advocate</h2>
            <p>Be a voice for change by standing up for patients. During this difficult time in their lives, they’re focused on the transplant process, not on pushing for new or improved legislation. You can help make their lives and those of future patients better by promoting policies and initiatives that support them.</p>
            <button className="patients">Advocate for patients</button>
          </div>
        </div>
        <div className="chart">
          <img
            src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-volunteers-at-golf-event-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3Dae9f27b352ac4b6e9425847e31c3a8fd%26hash%3D24B9350C913C2BA54F757A7FFCB59069&w=1920&q=75"
            alt="Fundraise to save lives"
          />
          <div className="full">
            <h2>Attend an event</h2>
            <p>NMDP hosts events all over the country. Whether you take part a fundraiser, marathon, auction or gala, the good you do is most impactful when shared with your community.</p>
            <button className="event">Participate in an event</button>
          </div>
        </div>
        <div className="chart">
          <img
            src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-female-student-volunteers-with-dog-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3Dcc523fc220b146f0acbed27b195865c6%26hash%3D3D4537D55F7B82B654D4179D4C39B277&w=1920&q=75"
            alt="Become a legislative advocate"
          />
          <div className="full">
            <h2>Volunteer</h2>
            <p>There are so many ways you can get hands-on with NMDP. Whether it’s hosting a registry recruitment event, helping out at a fundraiser or mentoring patients and caregivers, volunteers help us make the impossible possible.</p>
            <button className="choose">Choose how tou want to Volunteer</button>
          </div>
        </div>
        <div className="chart">
          <img src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-creighton-university-campus-volunteers-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3D91452aab0a2a49e48bbedef21c652818%26hash%3D2FD5B089816BEC45558DD88F18E903CE&w=1920&q=75" />
          <div className="full">
            <h2>Join us on campus</h2>
            <p>Saving lives can be part of your college experience. Gain leadership skills by setting up or joining a chapter on your campus, help us spread the word as an Ambassador or get involved in our athletics-based Get in the Game program. See the kind of difference you can make.</p>
            <button className="campus">Get involved on campus</button>
          </div>
        </div>
        <div className="chart">
          <img
            src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-nmdp-sponor-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3Dbd7e8dc2aacf4f97a4d55b6a0dd95c79%26hash%3D4E2914893CBFD3C2D1588F6B99B190C4&w=1920&q=75"
            alt="Fundraise to save lives"
          />
          <div className="full">
            <h2>Partner</h2>
            <p>Regardless of the size of your corporation, foundation, college, church or community group, partnering with us multiplies the good you and your team can do. Let us know how we can meet your unique philanthropic goals.</p>
            <button className="partner">Partner with us</button>
          </div>
        </div>
        <div className="chart">
          <img
            src="https://www.nmdp.org/_next/image?url=https%3A%2F%2Fwww.nmdp.org%2F-%2Fmedia%2Fproject%2Fnmdp%2Fnmdpsite%2Fimages%2Fimage-block-component%2Fnmdp-image-imageblock-nmdp-merch-960x540.jpg%3Fh%3D540%26iar%3D0%26w%3D960%26rev%3D89ac6091d2bd4548be47c76a08ec519b%26hash%3DB9BC5056BD8240C50303F3FAC3616EF5&w=1920&q=75"
            alt="Become a legislative advocate"
          />
          <div className="full">
            <h2>Shop for the cause</h2>
            <p>Check out our online shop! You can stock up on NMDP merch and show your support while financially supporting patients with blood cancers or other blood disorders.</p>
            <button className="visit">Visit the store</button>
          </div>
        </div>
        <div className="help">
      <header className="help-header">
        <span className="FIRST">Help inspire others</span>
        <p>
        If you're a donor, patient, transplant recipient or NMDPSM supporter who would like to share your story with us and others in the community, fill out our <a href="#">Publicity Consent Form.</a>
        </p>
      </header>
      </div>
      <footer className="move-footer">
            <div className="move-footer-explore">
                <h3>Explore</h3>
                <ul>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#support">Patient support services</a></li>
                    <li><a href="#websites">NMDP websites</a></li>
                    <li><a href="#careers">Careers at NMDP</a></li>
                    <li><a href="#shop">Shop</a></li>
                </ul>
            </div>
            <div className="move-footer-connect">
                <h3>Connect with us</h3>
                <a href="#contact" className="contact-link">Contact us</a>
                <div className="social-icons">
                    <a href="#instagram"><FaInstagram /></a>
                    <a href="#facebook"><FaFacebookF /></a>
                    <a href="#twitter"><FaTwitter /></a>
                    <a href="#youtube"><FaYoutube /></a>
                    <a href="#tiktok"><FaTiktok /></a>
                    <a href="#linkedin"><FaLinkedin /></a>
                </div>
            </div>
            <div className="move-footer-links">
                <ul>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Use</a></li>
                    <li><a href="#financial">Financial Contribution Privacy Statement</a></li>
                    <li><a href="#eeo">EEO / Affirmative Action Employer</a></li>
                    <li><a href="#fundraising">State Fundraising Notices</a></li>
                    <li><a href="#whistleblower">Whistleblower Hotline</a></li>
                </ul>
                <a href="#sitemap" className="move-sitemap-link">Sitemap</a>
            </div>
            <div className="move-footer-bottom">
                <p>NMDP<sup>SM</sup> is entrusted and under contract to operate the federally authorized C.W. Bill Young Cell Transplantation Program.</p>
                <div className="move-footer-Copy">
                <p>Copyright © 2024 National Marrow Donor Program. All Rights Reserved.</p></div>
            
            </div>
        </footer>
      </div>  
        
  ); 
}

export default Lives;
