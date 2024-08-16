// Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../.././Static/Sidebar.css";
import { BRANDNAME } from "../../Services/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faCreditCard,
  faHome,
  faTachometerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";


const CompanySidebar = () => {
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <div >
      {/* Sidebar for larger screens */}
      <div
        className="bg-dark border-right d-none d-lg-block"
        id="sidebar-wrapper"
      >
        <div className="sidebar-heading">{BRANDNAME}</div>
        <div className="list-group list-group-flush" >
          <Link
            to="/company-dashboard"
            className="list-group-item list-group-item-action text-light"
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
            Dashboard
          </Link>
          <Link
            to="/com-list-of-scraps"
            className="list-group-item list-group-item-action text-light"
          >
            <FontAwesomeIcon icon={faBoxOpen} className="icon" />
            View products
          </Link>
          <Link
            to="/company-payments"
            className="list-group-item list-group-item-action text-light"
          >
            <FontAwesomeIcon icon={faCreditCard} className="icon" />
            Payments
          </Link>
          <Link
            to="/company-profile"
            className="list-group-item list-group-item-action text-light"
          >
            <FontAwesomeIcon icon={faUser} className="icon" />
            Profile
          </Link>
        </div>
      </div>

      {/* Offcanvas for smaller screens */}
      <div style={{height: '20px'}}>
        <button
          className="btn btn-primary"
          type="button"
          onClick={toggleOffcanvas}
          data-bs-toggle="offcanvas"
          aria-controls="offcanvasExample"
        >
          <FontAwesomeIcon icon={faHome} />
        </button>
        <div
          className={`offcanvas offcanvas-start ${
            isOffcanvasOpen ? "show" : ""
          }`}
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          aria-hidden={!isOffcanvasOpen}
          style={{ visibility: isOffcanvasOpen ? "visible" : "hidden" }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              BRANDNAME
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              aria-label="Close"
              onClick={toggleOffcanvas}
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="list-group list-group-flush">
              <Link
                to="/"
                className="list-group-item list-group-item-action text-light"
              >
                <FontAwesomeIcon icon={faHome} className="icon" />
                Dashboard
              </Link>
              <Link
                to="/features"
                className="list-group-item list-group-item-action text-light"
              >
                <FontAwesomeIcon icon={faBoxOpen} className="icon" />
                Products
              </Link>
              <Link
                to="/pricing"
                className="list-group-item list-group-item-action text-light"
              >
                <FontAwesomeIcon icon={faCreditCard} className="icon" />
                Payments
              </Link>
              <Link
                to="/about"
                className="list-group-item list-group-item-action text-light"
              >
                <FontAwesomeIcon icon={faUser} className="icon" />
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page content wrapper */}
      <div id="page-content-wrapper">{/* Content goes here */}</div>

      
    </div>
  );
};

export default CompanySidebar;
