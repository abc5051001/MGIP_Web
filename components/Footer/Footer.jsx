import React from 'react';
import './Footer.css'; // Ensure CSS is linked
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import NewLogo from '../../pictures/Untitled-1_logo_in_white.svg'; // Update this line
const Footer = ({ credits }) => {
  const currentYear = new Date().getFullYear(); // Gets the current year

  return (
    <>
      <div style={{ width: '100%', height: '20px', backgroundColor: "#6C8EAD" }} />
      <div className='footer-container'>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section company-info">
            <h3 className="footer-title">MUNCY, GEISSLER, <br /> OLDS & LOWE, P.C.</h3>
            </div>
            <div className='link-parent'>
              <div className="footer-section quick-links">
                <h4 style={{ marginBottom: '0px' }}>QUICK LINKS</h4>
                <ul style={{ marginTop: '10px' }}>
                  <li><a href="/">About</a></li>
                  <li><a href="/careers">Careers</a></li>
                  <li><a href="/team">Team</a></li>
                  <li><a href="/contact">Contact us</a></li>
                </ul>
              </div>
              <div className="footer-section contact-info">
                <h4 style={{ marginBottom: '0px' }}>GET IN TOUCH</h4>
                <div style={{ marginTop: '10px', display: 'inline', lineHeight:'25px', alignItems: 'center'}}>
                    <a>125 S Royal St</a><br />
                    <a>Alexandria, VA 22314</a><br />
                    <div style={{paddingTop:'10px'}}>
                        <a>+1(703)621-7140</a>
                    </div>
                    <div className="social-icons" style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                    <a href="https://www.linkedin.com" className="icon-button">
                      <FaLinkedin size={20} color="white" />
                    </a>
                    <a href="mailto:info@tvdcp.com" className="icon-button">
                      <IoMdMail size={20} color="white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-credits">
            <span>© {currentYear} MG-IP Law. All Rights Reserved</span>
            {credits && (<span><a href="https://www.flaticon.com/free-icons/project" style={{ color: 'white', textDecoration: 'none' }} title="project icons">Project icons created by surang - Flaticon</a></span>)}
            <span>Website by Minty Web Designs</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
