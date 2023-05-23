import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="nav-logo" to="/">
              <img src="/navbar-logo.png" alt="Navbar-logo" />
            </Link>
            <button
              className="navbar-toggler burger-menu"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon burger-menu-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="nav-items">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/science">Science</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/business">Businees</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/sports">Sports</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/entertainment">Entertainment</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/technology">Technology</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
