import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toast from "../Common/Snackbar";

const Signup = () => {
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSignUp = async () => {
    
    setSnackbarMessage('Sign-in successful!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);

    // try {
    //   const response = await mockSignIn();

    
    //   if (response.success) {
    //     // Set success message and open Snackbar
    //     setSnackbarMessage('Sign-in successful!');
    //     setSnackbarSeverity('success');
    //     setSnackbarOpen(true);
    //   } else {
    //     setSnackbarMessage('Sign-in failed!');
    //     setSnackbarSeverity('error');
    //     setSnackbarOpen(true);
    //   }
    // } catch (error) {
    //   setSnackbarMessage('An error occurred during sign-in!');
    //   setSnackbarSeverity('error');
    //   setSnackbarOpen(true);
    // }
  };

  return (
    <div className="centered">
        <Toast
        open={snackbarOpen}
        close={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
      <div className="md-container mb-3">
        <div className="header-div">
          <h1>Scrap Spot</h1>
        </div>
        <h3>Sign up</h3>
        <form>
          <div className="row">
            {/* <label for="txtName" className="form-label mt-2">Name</label> */}
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="txtName"
                value=""
                placeholder="Name"
              />
            </div>
            {/* <label for="txtEmail" className="form-label mt-4">Email</label> */}
            <div className="col-md-6">
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
            {/* <label for="txtMobile" className="form-label mt-4">Mobile</label> */}
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="txtMobile"
                value=""
                placeholder="Mobile"
              />
            </div>
            {/* <label for="txtCompName" className="form-label mt-4">Company name</label> */}
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="txtCompName"
                value=""
                placeholder="Company name"
              />
            </div>
          </div>

          <div className="row">
            {/* <label for="txtAddress" className="form-label mt-4">Company address</label> */}
            <div className="col-md-12 mb-3">
              <textarea
                type="text"
                className="form-control"
                id="txtAddress"
                value=""
                placeholder="Company address"
              />
            </div>
          </div>
          <div className="row">
            {/* <label for="txtPassword" className="form-label mt-4">Confirm password</label> */}
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="txtPassword"
                value=""
                placeholder="Password"
              />
            </div>
            {/* <label for="txtConfirmPass" className="form-label mt-4">Confirm password</label> */}
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="txtConfirmPass"
                value=""
                placeholder="Confirm password"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <button type="button" className="btn btn-primary w-100" onClick={handleSignUp}>
                Sign up
              </button>
            </div>
            <div className="col-md-6">
              <Link type="button" className="btn btn-light w-100" to="/signin">
                Have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
