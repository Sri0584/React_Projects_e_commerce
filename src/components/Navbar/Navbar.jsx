import React, { useState } from "react";
import "./Navbar.css";
import { images } from "../../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav-bar">
      <div className="image">
        <img src={images.gericht} alt="logo" className="logo" />
      </div>
      <ul className="nav-items">
        <li className="nav-links">
          <a href="#home">Home</a>
        </li>
        <li className="nav-links">
          <a href="#about">About</a>
        </li>
        <li className="nav-links">
          <a href="#menu">Menu</a>
        </li>
        <li className="nav-links">
          <a href="#awards">Awards</a>
        </li>
        <li className="nav-links">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="last-item">
        <div className="login">
          <a href="#login">Login / Register</a>
        </div>
        <div className="line"></div>
        <div className="book">
          <a href="#book">Book Table</a>
        </div>
      </div>
      <div className="small-screen">
        {showMenu ? (
          <div className="overlay">
            <MdOutlineRestaurantMenu
              fontSize={27}
              onClick={() => setShowMenu(false)}
              className="overlay-icon"
            />
            <ul className="overlay-items">
              <li className="nav-links">
                <a href="#home">Home</a>
              </li>
              <li className="nav-links">
                <a href="#about">About</a>
              </li>
              <li className="nav-links">
                <a href="#menu">Menu</a>
              </li>
              <li className="nav-links">
                <a href="#awards">Awards</a>
              </li>
              <li className="nav-links">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        ) : (
          <GiHamburgerMenu
            onClick={() => setShowMenu(true)}
            className="menu-icon"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
