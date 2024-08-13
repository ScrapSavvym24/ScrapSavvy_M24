import React, { useEffect, useState } from "react";
import ScrapTableRow from "../Scraps/ScrapTableRow";
import CompanySidebar from "../Common/CompanySidebar";
import { Box, Button } from "@mui/material";
import AddProduct from "../Company/CAddProduct";
import ScrapyardSidebar from "../Common/ScrapyardSidebar";
import LogoutMenu from "../Common/LogoutMenu";
import SUpdateProduct from "./SUpdateProduct";
import MySScrapTableRow from "./MySScrapTableRow";
import SAddProduct from "./SAddProduct";
import ScrapyardService from "../../Services/ScrapyardService";

const MySScrapsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [allProductsList, setAllProductsList] = useState([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);


  useEffect(()=>{
    getProducts();
  }, [])

  const getProducts = () =>{
    const userProfileId = localStorage.getItem("userId")
    ScrapyardService.GetMyAllProducts(userProfileId)
    .then(response => {
      if (response.status === 200) {
        setAllProductsList(response.data);
        handleSnackbar("Data fetched", "success", true);
        setTimeout(() => {
          setSnackbarOpen(false);
        }, 2000);
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
  return (
    <div className="d-flex">
      <ScrapyardSidebar />
      <div className="container">
      <div className="dashboard-content">
      <div className='float-end'>
        <LogoutMenu />
      </div>
      <div className="dashboard-title">
          <h1>Products</h1>
          <hr/>
        </div>
    
    <div className="d-flex justify-content-between">
    <div className="dashboard-title">
        <h3>Products listed by you</h3>
    </div>
        <button className="btn btn-primary h-50 mt-4" onClick={handleOpenModal}>+ Add product</button>
    </div>
    <div class="table-responsive">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Category</th>
              <th scope="col">Product name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Listed on</th>
              <th scope="col">Price/kg</th>
              <th scope="col">Total amount</th>
              <th scope="col">Product status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allProductsList.map((record, index) => {
              return <MySScrapTableRow record={record} key={index}/>;
            })}
          </tbody>
        </table>
        </div>
        <SAddProduct open={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
    </div>
  );
};

export default MySScrapsTable;
