/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = ({ theme }) => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [teamsDropdown, setTeamsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""} ${scroll ? "nav-scroll" : ""}`}>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <img 
              src="\img\logo\logo_transparent.png"
              alt="WHDC" 
              style={{ transform: 'scale(3)', transformOrigin: 'left center' }}
            />
          </Link>
        </div>

        <button
          className={`navbar-toggler ${toggle ? "active" : ""}`}
          type="button"
          onClick={() => setToggle(!toggle)}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className={`collapse navbar-collapse ${toggle ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <span className="nav-link">TOP</span>
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => scrollToSection('services')} style={{ cursor: 'pointer' }}>
                SERVICES
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => scrollToSection('group-companies')} style={{ cursor: 'pointer' }}>
                GROUP
              </span>
            </li>
            <li className={`nav-item dropdown ${teamsDropdown ? "show" : ""}`}>
              <span 
                className="nav-link dropdown-toggle" 
                role="button"
                onClick={() => setTeamsDropdown(!teamsDropdown)}
                onMouseEnter={() => setTeamsDropdown(true)}
                onMouseLeave={() => setTeamsDropdown(false)}
              >
                TEAMS
              </span>
              <div 
                className={`dropdown-menu ${teamsDropdown ? "show" : ""}`}
                onMouseEnter={() => setTeamsDropdown(true)}
                onMouseLeave={() => setTeamsDropdown(false)}
              >
                <Link href="/management_team/management_team">
                  <span className="dropdown-item">Management Team</span>
                </Link>
                <Link href="/governance_team/governance_team">
                  <span className="dropdown-item">Governance Team</span>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <a href="https://www.twhdc.co.jp/ir/" target="_blank" rel="noopener noreferrer">
                <span className="nav-link">IR</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.twhdc.co.jp/inquiry/" target="_blank" rel="noopener noreferrer">
                <span className="nav-link">CONTACT</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
