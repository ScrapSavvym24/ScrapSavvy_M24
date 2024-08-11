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

  
  const SScrapBuyItem = ({ open, onClose, product }) => {
    const [productId, setProductId] = useState(0);
    const [productName, setProductName] = useState(product.productName || '');
    const [categoryId, setCategoryId] = useState(product.category?.categoryId || '');
    const [productQuantity, setProductQuantity] = useState(product.productQuantity || 0);
    const [pricePerQuantity, setPricePerQuantity] = useState(product.pricePerQuantity || 0);
    const [totalAmount, setTotalAmount] = useState(product.totalAmount || 0);
    const [productDescription, setProductDescription] = useState(product.productDescription || '');
    const [category, setCategory] = useState(product.category?.categoryName || '');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    
    useEffect(() => {
      if (product) {
        setProductId(product.productId || 0);
        setProductName(product.productName || '');
        setCategoryId(product.category?.categoryId || '');
        setProductQuantity(product.productQuantity || 0);
        setPricePerQuantity(product.pricePerQuantity || 0);
        setTotalAmount(product.productQuantity * product.pricePerQuantity || 0);
        setProductDescription(product.productDescription || '');
        setCategory(product.category?.categoryName || '')
      }
    }, [product]);
    
    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
    };

    const handlePayment = async (amount) =>{
      
      try {
        let paymentDetails = await Razorpay(amount);
        console.log(paymentDetails)
        if (paymentDetails !== undefined){
          let userProfileId = localStorage.getItem("userId")
          let formData = {
              'productId': productId,
              'userProfileId': userProfileId,
              'transactionId': paymentDetails
          }
          ScrapyardService.BuyProduct(formData);
        }
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
              <TextField
                label="Category name"
                value={category}
                InputProps={{ readOnly: true }}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField
                label="Product name"
                value={productName}
                InputProps={{ readOnly: true }}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField
                label="Product quantity in kg"
                type="number"
                value={productQuantity}
                InputProps={{ readOnly: true }}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField
                label="Price/kg"
                type="number"
                value={pricePerQuantity}
                InputProps={{ readOnly: true }}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField
                label="Total amount"
                value={totalAmount}
                InputProps={{ readOnly: true }}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField
                label="Product description"
                fullWidth
                multiline
                rows={4}
                value={productDescription}
                InputProps={{ readOnly: true }}
              />
            </FormControl>
          </Box>
            <Box sx={{ mt: 3, textAlign: "right" }}>
              <button type="button" class="btn btn-dark" onClick={() => handlePayment(totalAmount)}>
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
  
  export default SScrapBuyItem;
  