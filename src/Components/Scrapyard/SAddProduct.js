import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Toast from "../Common/Snackbar";
import CompanyService from "../../Services/CompanyService";

const SAddProduct = ({ open, onClose }) => {
  let userState = useSelector((state) => state.User);
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [categoryId, setCategorId] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [pricePerQuantity, setPricePerQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [productDescription, setProductDescription] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [productCategories, setProductCategories] = useState([]);

  useEffect(() => {
    getCategories();
  },[])

  const getCategories = async () =>{
    console.log("called categories")
    await CompanyService.GetProductCategories()
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        setProductCategories(response.data)
      //   dispatch(ActionCreator.SetUserToken(response.data.token))
      //   dispatch(ActionCreator.SetUserProfile(response.data.userProfile))
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

  const handleAddProduct = async () =>{
    // Validation checks
    if (!productName || !categoryId || !productQuantity || !pricePerQuantity || !totalAmount) {
      handleSnackbar("All fields are required.", "error", true);
      return;
  }

  if (productQuantity <= 0) {
      handleSnackbar("Product quantity must be greater than zero.", "error", true);
      return;
  }

  if (pricePerQuantity <= 0) {
      handleSnackbar("Price per quantity must be greater than zero.", "error", true);
      return;
  }

  if (totalAmount <= 0) {
      handleSnackbar("Total amount must be greater than zero.", "error", true);
      return;
  }
  const userId = localStorage.getItem("userId");
    let formData = {
    "productName": productName,
    "categoryId": categoryId,
    "productQuantity": productQuantity,
    "pricePerQuantity": pricePerQuantity,
    "totalAmount": totalAmount,
    "productDescription": productDescription,
    "userProfileId":userId
    }

    // await CompanyService.AddProduct(formData, userState.User.state.token)
    await CompanyService.AddProduct(formData)
    .then(response => {
        handleSnackbar(response.data, "success", true)
        setTimeout(() => {
          setSnackbarOpen(false);
        }, 2000);
    })
    .catch(error => {
      handleSnackbar(error.response.data, "error", true);
    })
    
  }

  const handleCategoryChange = (event) =>{
    setProductCategory(event.target.value);
    setCategorId(event.target.value)
    setTotalAmount(productQuantity * pricePerQuantity);
  }


  const handleQuantityChange = (event) =>{
    setProductQuantity(event.target.value);
    setTimeout((e) => {
      setTotalAmount(event.target.value * pricePerQuantity);
    }, 1000)
  }

  const handlePriceChange = (event) =>{
    setPricePerQuantity(event.target.value);
    setTimeout(() => {
      setTotalAmount(productQuantity * event.target.value);
    }, 1000)
    
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Add your product
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 3,
              textAlign: "left",
            }}
          >
            <FormControl fullWidth variant="outlined">
              <InputLabel id="category-select-label">Select category</InputLabel>
              <Select labelId="category-select-label" value={productCategory} onChange={handleCategoryChange} label="Product category">
                
                {productCategories.map((product) => (
                <MenuItem key={product.categoryId} value={product.categoryId}>
                  {product.categoryName}
                </MenuItem>
              ))}
              </Select>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField label="Product name" value={productName} onChange={(e) => setProductName(e.target.value)}/>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField label="Product quantity in kg" value={productQuantity} onChange={handleQuantityChange}/>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField label="Price/kg" value={pricePerQuantity} onChange={handlePriceChange}/>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField label="Total amount" value={totalAmount}/>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField label="Product description" fullWidth value={productDescription} onChange={(e) => setProductDescription(e.target.value)}/>
            </FormControl>
          </Box>
          <Box sx={{ mt: 3, textAlign: "right" }}>
            <button type="button" class="btn btn-dark" onClick={handleAddProduct}>
              Add product
            </button>
          </Box>
        </Box>
      </Modal>
      <Toast
        open={snackbarOpen}
        close={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </div>
  );
};

export default SAddProduct;
