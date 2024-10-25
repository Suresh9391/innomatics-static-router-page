import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
        <img
            src="https://www.innomatics.in/wp-content/uploads/2023/01/Innomatics-Logo1.png" class="image" alt=""/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li id="navItem1">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li id="navItem2">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li id="navItem3">
              <Link className="nav-link" to="/Achievements">Achievements</Link>
            </li>
            <li id="navItem4">
              <Link className="nav-link" to="/Classrooms">Classrooms</Link>
            </li>
            <li id="navItem5">
              <Link className="nav-link" to="/Internship">Internship</Link>
            </li>
            <li id="navItem6">
              <Link className="nav-link" to="/contact">contact Us</Link>
            </li>
            <li id="navItem7">
              <Link className="nav-link" to="/Follow">Follow us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
