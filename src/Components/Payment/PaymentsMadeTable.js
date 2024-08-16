import React, { useEffect, useState } from "react";
import Sidebar from "../Common/CompanySidebar";
import PaymentsTableRow from "./PaymentsReceivedTableRow";
// import { useSelector } from "react-redux";

const PaymentsMadeTable = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
  let transactionId = 12345; // initial transaction ID
  // const userProfile = useSelector((state) => state.userProfile);
  const [product, setProduct] = useState({});
  const transactions = [
    {
      srNo: 1,
      transactionId: `TXN${transactionId++}`,
      // receivedFrom: userProfile?.companyName, //product.userProfile?.companyName,
      receivedFrom: "Customer A",
      paymentMode: "Credit Card",
      status: "Paid",
      paidOn: formattedDate,
      invoice: "INV-001",
    },
    {
      srNo: 2,
      transactionId: `TXN${transactionId++}`,
      receivedFrom: "Customer B",
      paymentMode: "Debit Card",
      status: "Pending",
      paidOn: formattedDate,
      invoice: "INV-002",
    },
  ];
  return (
      <div>
        <div className="dashboard-title">
          <h2>Your transactions</h2>
        </div>
        <div className="table-responsive mt-5">
          <table className="table table-hover table-dark">
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
                return <PaymentsTableRow record={record} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default PaymentsMadeTable;