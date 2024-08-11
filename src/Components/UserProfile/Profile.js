import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import CompanySidebar from "../Common/CompanySidebar";
import Toast from "../Common/Snackbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthService from "../../Services/AuthService";

const Profile = () => {
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [branchName, setBranchName] = useState("");

  let userState = useSelector((state) => state);

  useEffect(() => {
    loadUserProfile();
  });

  const handlePersonalDetailsChange = async () => {
    setSnackbarMessage("Personal details updated successfully");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);

    console.log(userState.User.state);

    let formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("companyName", companyName);
    formData.append("companyAddress", companyAddress);
    formData.append("token", userState.User.state.token);
    setTimeout(() => {
      //navigate("/dashboard");
    }, 6000);
  };

  const loadUserProfile = async () => {
    const userProfileId = localStorage.getItem("userId");
    await AuthService.UserProfile(userProfileId)
      .then((response) => {
        setFullName(response.data.name);
        setEmail(response.data.email);
        setCompanyName(response.data.companyName);
        setCompanyAddress(response.data.companyAddress);
      })
      .catch((error) => {
        handleSnackbar(error.response.data, "error", true);
      });
  };

  const handleBankDetailsChange = async () => {
    

    console.log(userState.User.state);

    let formData = new FormData();
    formData.append("bankName", bankName);
    formData.append("ifscCode", ifscCode);
    formData.append("accountNumber", accountNumber);
    formData.append("branchName", branchName);
    formData.append("token", userState.User.state.token);

    setTimeout(() => {
      //navigate("/dashboard");
    }, 6000);
  };
  const handleSnackbar = (message, severity, show) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(show);
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  return (
    <Box className="d-flex">
      <CompanySidebar />
      <Container maxWidth="lg">
        <Box className="dashboard-content" sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            className="dashboard-title"
            sx={{ mb: 3 }}
          >
            My Profile
          </Typography>
          <Card
            elevation={3}
            sx={{ borderRadius: 5, boxShadow: 3, marginBottom: 5 }}
          >
            <CardContent>
              <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Personal Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Full name"
                    variant="outlined"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Phone number"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Company name"
                    variant="outlined"
                    fullWidth
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Company address"
                    variant="outlined"
                    fullWidth
                    value={companyAddress}
                    onChange={(e) => setCompanyAddress(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={handlePersonalDetailsChange}
                  >
                    Save Changes
                  </button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card
            elevation={3}
            sx={{ borderRadius: 5, boxShadow: 3, marginBottom: 5 }}
          >
            <CardContent>
              <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Bank Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Bank name"
                    variant="outlined"
                    fullWidth
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Account number"
                    variant="outlined"
                    fullWidth
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="IFSC code"
                    variant="outlined"
                    fullWidth
                    value={ifscCode}
                    onChange={(e) => setIfscCode(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Branch"
                    variant="outlined"
                    fullWidth
                    value={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={handleBankDetailsChange}
                  >
                    Save Changes
                  </button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Toast
        open={snackbarOpen}
        close={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </Box>
  );
};

export default Profile;
