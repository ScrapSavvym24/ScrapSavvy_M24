import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  InputAdornment
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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
  const [userRole, setUserRole] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const validate = () => {
    const tempErrors = {};
    let isValid = true;

    if (!name) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!ValidateEmail(email)) {
      tempErrors.email = "Invalid email";
      isValid = false;
    }

    if (!mobile) {
      tempErrors.mobile = "Mobile is required";
      isValid = false;
    }

    if (!companyName) {
      tempErrors.companyName = "Company name is required";
      isValid = false;
    }

    if (!companyAddress) {
      tempErrors.companyAddress = "Company address is required";
      isValid = false;
    }

    if (!password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (!ValidatePassword(password)) {
      tempErrors.password = "Invalid password";
      isValid = false;
    }

    if (!confirmPassword) {
      tempErrors.confirmPassword = "Confirm password is required";
      isValid = false;
    } else if (password !== confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!userRole) {
      tempErrors.userRole = "User role is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSignUp = async () => {
    if (!validate()) {
      return;
    }

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
          setTimeout(() => {
            navigate("/signin");
          }, 2000)

        } else {
          handleSnackbar("Server error!", "error", true);
        }
      })
      .catch(error => {
        handleSnackbar(error.response.data, "error", true);
      })
  }

  const handleSnackbar = (message, severity, show) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(show);
  };

  const handleRoleChange = (event) => {
    setUserRole(event.target.value);
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
                required
                error={errors.name ? true : false}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                error={errors.email ? true : false}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Mobile"
                variant="outlined"
                value={mobile}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length === 0 || (value.length <= 10 && !isNaN(value) && (value.length === 1 || /^[06879]/.test(value)))) {
                    setMobile(value);
                  }
                }}
                type="tel"
                inputMode="tel"
                required
                error={errors.mobile ? true : false}
                helperText={errors.mobile}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Company Name"
                variant="outlined"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                error={errors.companyName ? true : false}
                helperText={errors.companyName}
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
                required
                error={errors.companyAddress ? true : false}
                helperText={errors.companyAddress}
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
                {errors.userRole && <div style={{ color: 'red' }}>{errors.userRole}</div>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                error={errors.password ? true : false}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type={showConfirmPassword ? "text" : "password"}
                label="Confirm Password"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                error={errors.confirmPassword ? true : false}
                helperText={errors.confirmPassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle confirm password visibility"
                        onClick={toggleShowConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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