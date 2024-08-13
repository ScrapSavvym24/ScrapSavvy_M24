import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BRANDNAME } from "../../Services/Utils";
import Navbar from "../Common/Navbar";
import { Box, TextField } from "@mui/material";
import { ValidateEmail, ValidatePassword } from "./Validation";
import Toast from "../Common/Snackbar";
import AuthService from "../../Services/AuthService";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  

  const validate = () => {
    let isValid = true;
    const tempErrors = {};

    isValid = ValidateEmail(email, tempErrors) && isValid;
    isValid = ValidatePassword(password, tempErrors, "password") && isValid;
    isValid = ValidatePassword(confirmPassword, tempErrors, "confirmPassword") && isValid;

    setErrors(tempErrors);
    return isValid;
  };

  const handleForgotPassword = async (e) =>{
    e.preventDefault();
    const tempErrors = {};
    if (password !== confirmPassword) {
      tempErrors["confirmPassword"] = "Passwords do not match!";
      setErrors(tempErrors)
      return false;
    }
    else if (validate()){
      const formData = {
        "email": email,
        "password": password,
        "confirmPassword": confirmPassword
      }
      await AuthService.ForgotPassword(formData)
          .then(response => {
            console.log(response)
            if (response.status === 200) {
              handleSnackbar(response.data, "success", true);
              setTimeout(()=>{
                  navigate("/signin");
              }, 1000)
              
            }
            else{
                handleSnackbar(response, "error", true);
            }
          })
          .catch(error => {
            // handleSnackbar(error.response, "error", true);
        })
      
    }
  }

  const handleSnackbar = (message, severity, show) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(show);
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  return (
    <>
    <Navbar />
    <div className="centered">
      <div className="sm-container mb-3">
        <div className="header-div">
        <h2>Forgot password</h2>
        </div>
        <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField label="Email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
                />
              <TextField label="Password" type="password" variant="outlined" fullWidth value={password} onChange={(e) =>setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                margin="normal"
                />
              <TextField label="Comfirm password" type="password" variant="outlined" fullWidth value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                margin="normal"
                />
              <div className="row">
            <div className="col-md-12">
              <button type="button" className="btn btn-primary w-100 mt-4" onClick={handleForgotPassword}>
                Update
              </button>
              <Link to="/signin" className="btn btn-light w-100 mt-3">
                Back to sign in
              </Link>
            </div>
          </div>
            </Box>
          
      </div>
      <Toast
        open={snackbarOpen}
        close={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </div>
    </>
   
  );
};

export default ForgotPassword;
