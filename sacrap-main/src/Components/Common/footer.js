import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from './ContactUs'
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
          <Link to="/ContactUs" className="contact-us-link">
            Contact Us
          </Link>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/scacpsavvy_m24/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="scrapsavvy.m24@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="8329826990">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; ScrapSavvy. We Deal with RuestGold.</p>
      </div>
    </footer>
  );
}

export default Footer;