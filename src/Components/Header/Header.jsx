import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Pin from "/pin.png";
import Logo from "/logo.png";
import MLogo from "/m.png";

import { BiSolidAmbulance } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; 
import { MdClose } from "react-icons/md"; 

const locations = ["Banglore", "Delhi", "Mumbai", "Chennai"];

const Header = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); 
  };

  const renderDesktopNavbar = () => (
    <nav className="header-nav">
      <div className="nav_bar">
        <div className="logo_info">
          <div className="Select_location">
            <Link to={`/`}>
              <img src={Logo} alt="Logo" />
            </Link>
            <div className="my_location_dropdown">
              <div className="drop">
                <img src={Pin} alt="Pin" />
                <p className="my_location_text">My Location</p>
              </div>
              <select className="location-select">
                {locations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="top_Btns">
            <button>
              <BiSolidAmbulance color="#E42424" /> Emergency Number
            </button>
            <button>
              <FaRegEnvelope color="#E42424" /> Care@Thungahospital.com
            </button>
          </div>
        </div>
        <div className="pages_menu">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About Us
          </Link>
          <Link
            to="/facilities"
            className={location.pathname === "/facilities" ? "active" : ""}
          >
            Facilities
          </Link>
          <Link
            to="/department/ent"
            className={location.pathname === "/department/ent" ? "active" : ""}
          >
            Departments
          </Link>
          <Link
            to="/doctors"
            className={location.pathname === "/doctors" ? "active" : ""}
          >
            Our Doctors
          </Link>
          <Link
            to="/patient-care"
            className={location.pathname === "/patient-care" ? "active" : ""}
          >
            Patient Care
          </Link>
          <Link
            to="/corporate-tpas"
            className={location.pathname === "/corporate-tpas" ? "active" : ""}
          >
            Corporate & TPAs
          </Link>
          <Link
            to="/careers"
            className={location.pathname === "/careers" ? "active" : ""}
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact Us
          </Link>
          <button>Request An Appointment</button>
        </div>
      </div>
    </nav>
  );

  const renderMobileNavbar = () => (
    <>
      <div className="mobile-nav-bar">
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <GiHamburgerMenu size={30} />
        </div>
      </div>

      <div className="top_elements">
        <div className="mobile_logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="top_Button">
          <button>Request An Appointment</button>
        </div>
      </div>

      <div className="mobile-header">
        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <MdClose size={30} onClick={toggleSidebar} />
          </div>
          <div className="sidebar-content">
            <div className="sidebar-links">
              <Link to="/" onClick={toggleSidebar}>
                Home
              </Link>
              <Link to="/about" onClick={toggleSidebar}>
                About Us
              </Link>
              <Link to="/facilities" onClick={toggleSidebar}>
                Facilities
              </Link>
              <Link to="/department/ent" onClick={toggleSidebar}>
                Departments
              </Link>
              <Link to="/doctors" onClick={toggleSidebar}>
                Our Doctors
              </Link>
              <Link to="/patient-care" onClick={toggleSidebar}>
                Patient Care
              </Link>
              <Link to="/corporate-tpas" onClick={toggleSidebar}>
                Corporate & TPAs
              </Link>
              <Link to="/careers" onClick={toggleSidebar}>
                Careers
              </Link>
              <Link to="/contact" onClick={toggleSidebar}>
                Contact Us
              </Link>

              <div className="top_Btns">
                <button>
                  <BiSolidAmbulance color="#E42424" /> Emergency Number
                </button>
                <button>
                  <FaRegEnvelope color="#E42424" /> Care@Thungahospital.com
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return isMobile ? renderMobileNavbar() : renderDesktopNavbar();
};

export default Header;
