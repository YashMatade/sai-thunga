import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Data Objects
const footerPages = [
  {
    title: 'Navigation',
    links: [
      { text: 'About', route: '/about' },
      { text: 'Features', route: '/features' },
      { text: 'Doctor', route: '/doctor' },
      { text: 'Service', route: '/service' },
    ],
  },
  {
    title: 'Support',
    links: [
      { text: 'Documentation', route: '/documentation' },
      { text: 'Call Ambulance', route: '/call-ambulance' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { text: 'Privacy', route: '/privacy' },
      { text: 'Term', route: '/terms' },
      { text: 'Partner', route: '/partner' },
    ],
  },
  {
    title: 'Info',
    links: [
      { text: 'About us', route: '/about-us' },
      { text: 'Blog', route: '/blog' },
      { text: 'About', route: '/about' },
      { text: 'Contact us', route: '/contact-us' },
    ],
  },
];

const socialLinks = [
  {
    title: 'Instagram',
    icon: <FaInstagram size={30}/>,
    route: 'https://instagram.com',
  },
  {
    title: 'Whatsapp',
    icon: <FaWhatsapp size={30}/>,
    route: 'https://whatsapp.com', 
  },
];

const contactInfo = {
  name: 'Sai Thunga Hospital',
  phone: '+0000 0000 0000',
  email: 'hello@yourwebsite.com',
};

const ctaContent = {
  heading: 'Do you need help?',
  text: 'Need help? Our experts are ready. Get personalized assistance for all your insurance questions. Click to connect now',
  buttonText: 'Get consultation',
};

const Footer = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer_cta">
          <div className="row">
            <div className="col-lg-7">
              <div className="cta_footer_content">
                <h3>{ctaContent.heading}</h3>
                <p>{ctaContent.text}</p>
              </div>
            </div>
            <div className="col-lg-5">
              <button className='cta_footer_btn'>
                {ctaContent.buttonText} <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>

        <div className="footer-intro">
          <div className="row">
            <div className="col-lg-2">
              <div className="company_info">
                <h3>{contactInfo.name}</h3>
                <p>{contactInfo.phone}</p>
                <p>{contactInfo.email}</p>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="company_pages">
                {footerPages.map((page, index) => (
                  <div className="company_page" key={index}>
                    <h3>{page.title}</h3>
                    <ul>
                      {page.links.map((link, idx) => (
                        <li key={idx}>
                          <Link to={link.route}  style={{color:"white",textDecoration:"none"}}>{link.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <div className="row">
            {socialLinks.map((link, index) => (
              <div className="col-lg-6" key={index}>
                <div className="social_link">
                  <h3>{link.title}</h3>
                  <a href={link.route} target="_blank" rel="noopener noreferrer" style={{color:"white",textDecoration:"none"}}>
                    {link.icon}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-copyrights">
          <h3>&copy; 2024 Your Company Name. All rights reserved.</h3>

          {showGoTop && (
            <div className="gototop" onClick={scrollToTop}>
              <div className="gototop_icon">
                <FaLongArrowAltUp />
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
