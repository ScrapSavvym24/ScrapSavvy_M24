import React from "react";
import Sidebar from "../Company/Sidebar";

const ListOfPayments = () => {
    return (
        <div className="d-flex">
          <Sidebar />
          <div className='container'>
            <h1 className="dashboard-title">List of payments</h1>
            <div class="table-responsive">

            
          <table class="table table-hover table-responsive">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Transaction id</th>
                <th scope="col">Received from</th>
                <th scope="col">Payment mode</th>
                <th scope="col">Status</th>
                <th scope="col">Paid on</th>
                <th scope="col">Invoice</th>
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
              </tr>
              <tr>
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
              </tr>
              
            </tbody>
          </table>
          </div>
          </div>
        </div>
      );
}

export default ListOfPayments;