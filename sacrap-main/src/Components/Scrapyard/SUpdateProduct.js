import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Toast from "../Common/Snackbar";
import CompanyService from "../../Services/CompanyService";
import ScrapyardService from "../../Services/ScrapyardService";


const SUpdateProduct = ({ open, onClose, product }) => {
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

  const handleUpdateProduct = async () => {
    const userProfileId = localStorage.getItem("userId")
    const formData = {
      "productId": productId,
      "productName": productName,
      "productQuantity":productQuantity,
      "pricePerQuantity": pricePerQuantity,
      "productDescription": productDescription,
    };

    try {
      const response = await ScrapyardService.UpdateProduct(userProfileId, formData);
      if (response.status === 200) {
        setSnackbarMessage('Product updated successfully!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        setTimeout(() => {
          onClose();
        }, 1000);
      }
    } catch (error) {
      setSnackbarMessage('Failed to update product.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleQuantityChange = (event) => {
    const quantity = Number(event.target.value);
    setProductQuantity(quantity);
    setTotalAmount(quantity * pricePerQuantity);
  };

  const handlePriceChange = (event) => {
    const price = Number(event.target.value);
    setPricePerQuantity(price);
    setTotalAmount(productQuantity * price);
  };

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
            Update your product
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
                onChange={(e) => setProductName(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField
                label="Product quantity in kg"
                type="number"
                value={productQuantity}
                onChange={handleQuantityChange}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField
                label="Price/kg"
                type="number"
                value={pricePerQuantity}
                onChange={handlePriceChange}
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
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box sx={{ mt: 3, textAlign: "right" }}>
            <button className="btn btn-dark me-2" onClick={handleUpdateProduct}>
              Update
            </button>
            <button className="btn btn-secondary me-2" onClick={onClose} sx={{ ml: 2 }}>
              Cancel
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

export default SUpdateProduct;
