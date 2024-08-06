import React from "react";
import Sidebar from "./Sidebar";

const ListOfScraps = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className='container'>
        <h1 className="dashboard-title">List of scraps</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col">Category</th>
            <th scope="col">Company name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Listed on</th>
            <th scope="col">Price/kg</th>
            <th scope="col">Total amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-primary">
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr>
          <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class="table-primary">
          <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ListOfScraps;
