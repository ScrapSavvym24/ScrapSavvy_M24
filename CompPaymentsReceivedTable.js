import React from "react";
import Sidebar from "../Common/CompanySidebar";
import PaymentsTableRow from "../Payment/PaymentsReceivedTableRow";
import ScrapyardSidebar from "../Common/ScrapyardSidebar";
import CompPaymentsReceivedTableRow from "./CompPaymentsReceivedTableRow";
import LogoutMenu from "../Common/LogoutMenu";
import CompanySidebar from "../Common/CompanySidebar";

const CompPaymentsReceivedTable = () => {
  const transactions = [
    {
      srNo: 1,
      transactionId: "TXN12345",
      receivedFrom: "Customer A",
      paymentMode: "Credit Card",
      status: "Paid",
      paidOn: "2023-11-24",
      invoice: "INV-001",
    },
    {
      srNo: 2,
      transactionId: "TXN67890",
      receivedFrom: "Customer B",
      paymentMode: "Debit Card",
      status: "Pending",
      paidOn: "2023-12-01",
      invoice: "INV-002",
    },
  ];
  return (
    <div className="d-flex">
      <CompanySidebar />
      <div className="container">
        <div className="dashboard-content">
          <div className="float-end">
            <LogoutMenu />
          </div>
          <div className="dashboard-title">
            <h1>Payments received</h1>
            <hr />
          </div>
          <div class="table-responsive mt-5">
            <table class="table table-hover table-dark">
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
                {transactions.map((record) => {
                  return <CompPaymentsReceivedTableRow record={record} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompPaymentsReceivedTable;
