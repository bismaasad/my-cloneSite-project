import React from 'react';
import './styles/giveFooter.css'; 
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa';
function GiveFooter() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="footer-left">
          <p>NMDP</p>
          <p>500 N. Fifth St.</p>
          <p>Minneapolis, MN 55401 US</p>
          <p ><a className='link' href="#">NMDP Privacy Policy</a></p>
          <div className="Social-icons">
          <a href="#instagram"><FaInstagram /></a>
                    <a href="#facebook"><FaFacebookF /></a>
                    <a href="#twitter"><FaTwitter /></a>  
                    <a href="#linkedin"><FaLinkedin /></a> 
          </div>  
        </div>
        <div className="footer-right">
          <p>Donor support</p> 
          <p ><a href="mailto:adserv@nmdp.org">adserv@nmdp.org</a></p>
        </div>
        </div>
    </footer>
  );
}  
export default GiveFooter;  