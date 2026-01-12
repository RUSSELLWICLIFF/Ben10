import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    if (isOpen) toggle();
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (isOpen) toggle();
  };

  return (
    <>
      <button className="menu-toggle" onClick={toggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="logo">
          <Link to="/" onClick={() => scrollToSection('home')}>
            <img src="/images/logo.png" alt="Ben 10 Logo" />
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <button className="nav-text-btn" onClick={() => scrollToSection('home')}>Home</button>
          </li>
          <li><button className="nav-text-btn" onClick={() => scrollToSection('aliens')}>Aliens</button></li>
          <li><button className="nav-text-btn" onClick={() => scrollToSection('episodes')}>Episodes</button></li>
          <li><button className="nav-text-btn" onClick={() => scrollToSection('about')}>About</button></li>
        </ul>

        <div className="nav-buttons">
          <Link to="/login">
            <button className="btn btn-outline">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-fill">Sign Up</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
