import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography, Grid, Snackbar, Alert } from "@mui/material";
import { BRANDNAME } from "../../Services/Utils";
import Navbar from "../Common/Navbar";
import Toast from "../Common/Snackbar";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../State/Actions/ActionCreator";

const Signup = () => {
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
    

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setSnackbarMessage('Passwords do not match!');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }
    
    dispatch(ActionCreator.SetUserProfile({"email": email, "password": password}));
    // Simulate a successful sign-up
    setSnackbarMessage('Sign-up successful!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);

    // Uncomment below for real API call
    // try {
    //   const response = await yourSignUpAPI({ name, email, mobile, companyName, address, password });
    //   if (response.success) {
    //     setSnackbarMessage('Sign-up successful!');
    //     setSnackbarSeverity('success');
    //     setSnackbarOpen(true);
    //     setTimeout(() => {
    //       navigate("/dashboard");
    //     }, 2000);
    //   } else {
    //     setSnackbarMessage('Sign-up failed!');
    //     setSnackbarSeverity('error');
    //     setSnackbarOpen(true);
    //   }
    // } catch (error) {
    //   setSnackbarMessage('An error occurred during sign-up!');
    //   setSnackbarSeverity('error');
    //   setSnackbarOpen(true);
    // }
  };

  return (
    <>
      <Navbar />
      <div className="md-container">
      <Toast
        open={snackbarOpen}
        close={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
        <div className="header-div">
            <h1>Sign up</h1>
          </div>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Mobile"
                variant="outlined"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Company Name"
                variant="outlined"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Address"
                variant="outlined"
                multiline
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="password"
                label="Confirm Password"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12} sm={6}>
            <button type="button" className="btn btn-primary w-100" onClick={handleSignUp}>
                Sign up
              </button>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Link type="button" className="btn btn-light w-100" to="/signin">
                Have an account?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Signup;
