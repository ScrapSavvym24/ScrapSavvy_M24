import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const AddItem = ({ open, onClose }) => {
  let userState = useSelector((state) => state);
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleForgotPassword = async () =>{
    let formData = new FormData();
    formData.append("productName", productName)
    formData.append("productCategory", productCategory)
    formData.append("productQuantity", productQuantity)
    formData.append("productPrice", productPrice)
    formData.append("totalAmount", totalAmount)
    formData.append("token", userState.User.state.token);

    setTimeout(() => {
      //navigate("/dashboard");
    }, 6000);
  }

  const handleCategoryChange = (event) =>{
    setProductCategory(event.target.value);
    setTotalAmount(productQuantity * productPrice);
  }

  const handleQuantityChange = (event) =>{
    setProductQuantity(event.target.value);
    setTimeout((e) => {
      setTotalAmount(event.target.value * productPrice);
    }, 1000)
  }

  const handlePriceChange = (event) =>{
    setProductPrice(event.target.value);
    setTimeout(() => {
      setTotalAmount(productQuantity * event.target.value);
    }, 1000)
    
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
            width: 400,
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
              <TextField label="Product name" value={productName} onChange={(e) => setProductName(e.target.value)}/>
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputLabel id="category-select-label">Select category</InputLabel>
              <Select labelId="category-select-label" value={productCategory} onChange={handleCategoryChange} label="Product category">
                <MenuItem value={10}>Metal</MenuItem>
                <MenuItem value={20}>Plastic</MenuItem>
                <MenuItem value={30}>Paper</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField label="Product quantity in kg" value={productQuantity} onChange={handleQuantityChange}/>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField label="Price/kg" value={productPrice} onChange={handlePriceChange}/>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <TextField label="Total amount" value={totalAmount}/>
            </FormControl>
          </Box>
          <Box sx={{ mt: 3, textAlign: "right" }}>
            <button type="button" class="btn btn-dark" onClick={handleForgotPassword}>
              Add product
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddItem;
