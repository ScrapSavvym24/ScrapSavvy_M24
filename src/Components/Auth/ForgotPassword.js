import React from "react";
import { Link } from "react-router-dom";
import { BRANDNAME } from "../../Services/Utils";
import Navbar from "../Common/Navbar";

const ForgotPassword = () => {
  return (
    <>
    <Navbar />
    <div className="centered">
      <div className="sm-container mb-3">
        <div className="header-div">
        <h1>{BRANDNAME}</h1>
        </div>
        <h3>Forgot password</h3>
        <form>
          <div className="row">
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                id="txtEmail"
                value=""
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                id="txtPassword"
                value=""
                placeholder="Password"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                id="txtConfirmPass"
                value=""
                placeholder="Confirm password"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary w-100 mt-4">
                Update
              </button>
              <br />
              <br />
              <Link to="/signin" className="btn btn-light w-100 mt-3">
                Back to sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
   
  );
};

export default ForgotPassword;
