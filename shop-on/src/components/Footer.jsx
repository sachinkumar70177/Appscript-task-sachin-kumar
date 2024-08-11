import React from "react";
// import { Link } from "react-router-dom";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import './Footer.css'; // Import the CSS file

const Logo = () => (
  <div className="logo">
 
      <img src="https://t4.ftcdn.net/jpg/02/66/71/71/360_F_266717164_J8Fqw4OcXRkKtNwFyHD02zIEsxPI7qHH.jpg" alt="Logo" className="logo1" />
     <h2>ShopOn</h2>
    
  </div>
);

const SocialButton = ({ label, href, icon }) => (
  <a href={href} aria-label={label} className="social-button">
    {icon}
  </a>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <Logo />
            
         
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#about">About us</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact us</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#terms">Terms of Service</a>
            <a href="#legal">Legal</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#status">Status</a>
          </div>
          <div className="footer-section input-section">
            <h4>Stay up to date</h4>
            <div className="subscribe">
              <input
                type="email"
                placeholder="Your email address"
                className="subscribe-input"
              />
              <button className="subscribe-button" aria-label="Subscribe">
                <BiMailSend />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lower">
     
      <div className="follow">
      <h4>Follow Us</h4>
      <div className="social-buttons">
        
              <SocialButton label="Twitter" href="https://twitter.com" icon={<FaTwitter />} />
              <SocialButton label="YouTube" href="https://youtube.com" icon={<FaYoutube />} />
              <SocialButton label="Instagram" href="https://instagram.com" icon={<FaInstagram />} />
            </div> 
      </div>
      <p>© 2023 ShopOn. All rights reserved</p>
      </div>
      
    </footer>
  );
};

export default Footer;
