import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { useSelector } from "react-redux";
  import Toast from "../Common/Snackbar";
import Razorpay from "../Common/Razorpay";
import ScrapyardService from "../../Services/ScrapyardService";
  
  const CScrapBuyItem = ({ open, onClose, product }) => {
  
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    // const product = useSelector(state => state.Product.state)
    
    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
    };

    const handlePayment = async (amount) =>{
      
      try {
        let paymentDetails = await Razorpay(amount);

        if (paymentDetails !== undefined){
          let formData = new FormData();
          formData.append({'product_id': product.productId})
          formData.append({'token': 12})
          formData.append({'product': {}})
          ScrapyardService.BuyProduct();
        }
        console.log(paymentDetails);
      } catch (error) {
        console.error("Payment failed or was cancelled:", error);
      }
    }
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
              Buy this product
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
                <InputLabel id="product-select-label">Select product</InputLabel>
                <Select labelId="product-select-label" value={product.productName} label="Product name">
                  <MenuItem value={10}>Iron</MenuItem>
                  <MenuItem value={20}>Aluminium</MenuItem>
                  <MenuItem value={30}>Copper</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="category-select-label">Select category</InputLabel>
                <Select labelId="category-select-label" value={product.productCategory} label="Product category">
                  <MenuItem value={10}>Metal</MenuItem>
                  <MenuItem value={20}>Plastic</MenuItem>
                  <MenuItem value={30}>Paper</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <TextField label="Product quantity in kg" value={product.productQuantity}/>
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <TextField label="Price/kg" value={product.productPrice}/>
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <TextField label="Total amount" value={product.totalAmount}/>
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <TextField label="Product description" fullWidth value={product.productDescription}/>
              </FormControl>
            </Box>
            <Box sx={{ mt: 3, textAlign: "right" }}>
              <button type="button" class="btn btn-dark" onClick={() => handlePayment(product.totalAmount)}>
                Buy product
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
  
  export default CScrapBuyItem;
  