import React from 'react';
import './styles/Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer"> 
            <div className="footer-explore">
                <h3>Explore</h3>
                <ul>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#support">Patient support services</a></li>
                    <li><a href="#websites">NMDP websites</a></li>
                    <li><a href="#careers">Careers at NMDP</a></li>
                    <li><a href="#shop">Shop</a></li>
                </ul>
            </div>
            <div className="FOoter-connect">
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
            <div className="footer-links">
                <ul>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Use</a></li>
                    <li><a href="#financial">Financial Contribution Privacy Statement</a></li>
                    <li><a href="#eeo">EEO / Affirmative Action Employer</a></li>
                    <li><a href="#fundraising">State Fundraising Notices</a></li>
                    <li><a href="#whistleblower">Whistleblower Hotline</a></li>
                </ul>
                <a href="#sitemap" className="SITE-link">Sitemap</a>
            </div>
            <div className="footer-bottom">
                <p>NMDP<sup>SM</sup> is entrusted and under contract to operate the federally authorized C.W. Bill Young Cell Transplantation Program.</p>
                <div className="footer-Copy">
                <p>Copyright © 2024 National Marrow Donor Program. All Rights Reserved.</p></div>
            
            </div>
        </footer>
    );
};  

export default Footer;
