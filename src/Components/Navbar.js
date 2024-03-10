import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand mx-5 mb-2 shubham" to="/">
            {`Shubham Tiwari`}
          </Link>
          <button
            className="navbar-toggler mx-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-5"
                  aria-current="page"
                  to="/About"
                >
                  <p>About Me</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-5"
                  aria-current="page"
                  to="/Portfolio"
                >
                  <p>My Portfolio</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-5"
                  aria-current="page"
                  to="/Contact"
                >
                  <p>Get In Touch</p>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
