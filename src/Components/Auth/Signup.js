import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography, Grid, Snackbar, Alert, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { BRANDNAME } from "../../Services/Utils";
import Navbar from "../Common/Navbar";
import Toast from "../Common/Snackbar";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../State/Actions/ActionCreator";
import AuthService from "../../Services/AuthService";
import { ValidateEmail, ValidatePassword } from "./Validation";

const Signup = () => {
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userRole, setUserRole] = useState();
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
    

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const validate = () => {
    const tempErrors = {};
    let isValid = true;
    console.log(email + "----" + password);
    isValid = ValidateEmail(email, tempErrors) && isValid;
    isValid = ValidatePassword(password, tempErrors, "password") && isValid;

    console.log(tempErrors);
    setErrors(tempErrors);
    return isValid;
  };
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setSnackbarMessage('Passwords do not match!');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }
    //dispatch(ActionCreator.SetUserProfile({"email": email, "password": password}));
    if (validate()) {
      let formData = {
      "email": email,
      "name": name,
      "mobile": mobile,
      "companyName": companyName,
      "companyAddress": companyAddress,
      "password": password,
      "confirmPassword": confirmPassword,
      "userRole": userRole
      }
      await AuthService.SignUp(formData)
        .then((response) => {
          console.log(response)
            if (response.status === 201) {
              handleSnackbar("Sign-up successful!", "success", true);
              setTimeout(()=>{
                navigate("/signin");
              }, 2000)
              
            }
            else{
                handleSnackbar("Server error!", "error", true);
            }
        })
        .catch(error => {
            handleSnackbar(error.response.data, "error", true);
        })
  } 
    
}

  const handleSnackbar = (message, severity, show) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(show);
  };

  const handleRoleChange = (event) =>{
    setUserRole(event.target.value);
  }
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
            <Grid item xs={12} sm={6}>
              <TextField
              fullWidth
                label="Company Address"
                variant="outlined"
                multiline
                rows={3}
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="category-select-label">Sign up as </InputLabel>
              <Select labelId="category-select-label" value={userRole} onChange={handleRoleChange} label="Product category">
                <MenuItem value="customer">Customer</MenuItem>
                <MenuItem value="company">Company</MenuItem>
                <MenuItem value="scrapyard">Scrapyard</MenuItem>
              </Select>
            </FormControl>
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
