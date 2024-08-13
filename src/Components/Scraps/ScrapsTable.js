import React, { useState } from "react";
import ScrapTableRow from "./ScrapTableRow";
import CompanySidebar from "../Common/CompanySidebar";
import { Box, Button } from "@mui/material";
import AddProduct from "../Company/CAddProduct";

const ScrapsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const records = [
    {
      srNo: 1,
      category: "Category 1",
      productName: "Product A",
      quantity: 100,
      listedOn: "2023-11-24",
      pricePerKg: 10,
      totalAmount: 1000,
      action: "Edit",
    },
    {
      srNo: 2,
      category: "Category 2",
      productName: "Product B",
      quantity: 200,
      listedOn: "2023-12-01",
      pricePerKg: 15,
      totalAmount: 3000,
      action: "Delete",
    },
    // ... more records
  ];
  return (
    <div className="d-flex">
      <CompanySidebar />

      <div className="container">
      <div class="d-flex justify-content-between align-items-center">
    <h1 class="dashboard-title">View products</h1>
    <button className="btn btn-primary" onClick={handleOpenModal}>+ Add product</button>
    
  </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Category</th>
              <th scope="col">Product name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Listed on</th>
              <th scope="col">Price/kg</th>
              <th scope="col">Total amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => {
              return <ScrapTableRow record={record} />;
            })}
          </tbody>
        </table>
        <AddProduct open={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default ScrapsTable;
