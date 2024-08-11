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
import ScrapyardSidebar from "../Common/ScrapyardSidebar";
import LogoutMenu from "../Common/LogoutMenu";
import AuthService from "../../Services/AuthService";

const ScrapyardProfile = () => {
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [userId, setUserId] = useState(0);
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
  },{});

  const loadUserProfile = async () => {
    const userProfileId = localStorage.getItem("userId");
    await AuthService.UserProfile(userProfileId)
      .then((response) => {
        console.log(response.data)
        setFullName(response.data.name);
        setEmail(response.data.emailId);
        setPhoneNumber(response.data.mobile);
        setCompanyName(response.data.companyName);
        setCompanyAddress(response.data.companyAddress);
        setUserId(response.data.user.userId)
      })
      .catch((error) => {
        handleSnackbar("Server error", "error", true);
      });
  };
  const handleSnackbar = (message, severity, show) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(show);
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handlePersonalDetailsChange = async () => {
    let formData = {
    "name": fullName,
    "email": email,
    "mobile": phoneNumber,
    "companyName": companyName,
    "companyAddress": companyAddress,
    "userId" : userId,
    // "token": userState.User.state.token
    }
    const userProfileId = localStorage.getItem("userId");
    await AuthService.UpdateUserProfile(userProfileId, formData)
    .then(response=>{
      loadUserProfile();
      setSnackbarMessage("Personal details updated successfully");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    })
  };

  const handleBankDetailsChange = async () => {
    setSnackbarMessage("Bank details updated successfully");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);

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

  return (
    <div className="d-flex">
      <ScrapyardSidebar />
      <div className="container">
      <div className="dashboard-content">
      <div className='float-end'>
        <LogoutMenu />
      </div>
      <div className="dashboard-title">
          <h1>Account profile</h1>
          <hr/>
        </div>
        
        <Box className="dashboard-content" sx={{ mt: 4 }}>
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
      <Toast
        open={snackbarOpen}
        close={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
      </div>
      </div>
    </div>
  );
};

export default ScrapyardProfile;
