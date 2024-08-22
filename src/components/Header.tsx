import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <img src="images/logo.png" alt="Logo" />
          </div>
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Solutions</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
            <div className="nav-button">
              <button>Request a Demo</button>
            </div>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
        <div className="title mt-5">
          <div className="title_content">
            <div className="title_orange_color">
              Take Control of Your Network Security
            </div>
            <div className="title_yellow_color">
              with Dane's Automated Platform
            </div>
            <div className="title_white">
              Automated Policy Management and Real-time Compliance
            </div>
            <div className="title_btn_group">
              <button className="btn_demo">
                Request a Demo <i className="fa fa-tv"></i>
              </button>
              <button className="btn_learn">
                Learn More <i className="fa fa-plus"></i>
              </button>
            </div>
            <img src="images/Frame.png" className="mt-5" alt="frame" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
