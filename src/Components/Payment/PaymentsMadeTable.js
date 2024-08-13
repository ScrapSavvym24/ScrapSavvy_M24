import React, { useState, useEffect } from "react";
import PaymentInvoice from "./PaymentInvoice";

const PaymentsMadeTable = () => {
  const currentDate = new Date().toISOString().slice(0, 10);

  const initialTransactions = [
    {
      srNo: 1,
      transactionId: "TXN00001",
      receivedFrom: "Customer A",
      paymentMode: "Credit Card",
      status: "Paid",
      paidOn: currentDate,
      invoice: "INV-001",
      TotalPaidAmount: 100,
    },
    {
      srNo: 2,
      transactionId: "TXN00002",
      receivedFrom: "Customer B",
      paymentMode: "Debit Card",
      status: "Paid",
      paidOn: currentDate,
      invoice: "INV-002",
      TotalPaidAmount: 200,
    },
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [receivedFrom, setReceivedFrom] = useState("");
  const [paymentMode, setPaymentMode] = useState("Credit Card");
  const [invoice, setInvoice] = useState("");
  const [totalPaidAmount, setTotalPaidAmount] = useState("");
  const [lastTransactionId, setLastTransactionId] = useState(2);

  useEffect(() => {
    const maxId = Math.max(...transactions.map(t => parseInt(t.transactionId.slice(3))));
    setLastTransactionId(maxId);
  }, []);

  const addTransaction = () => {
    const newTransactionId = `TXN${String(lastTransactionId + 1).padStart(5, '0')}`;
    const newInvoiceId = `INV-${String(transactions.length + 1).padStart(3, '0')}`;

    const newTransaction = {
      srNo: transactions.length + 1,
      transactionId: newTransactionId,
      receivedFrom,
      paymentMode,
      status: "Pending",
      paidOn: currentDate,
      invoice: newInvoiceId,
      TotalPaidAmount: parseFloat(totalPaidAmount),
    };

    setTransactions([...transactions, newTransaction]);
    setLastTransactionId(lastTransactionId + 1);
    setReceivedFrom("");
    setPaymentMode("Credit Card");
    setInvoice("");
    setTotalPaidAmount("");
  };

  return (
    <div>
      <div className="dashboard-title">
        <h2>Your Transactions</h2>
      </div>
      
      <div className="transaction-form mb-4">
        <input
          type="text"
          placeholder="Received From"
          value={receivedFrom}
          onChange={(e) => setReceivedFrom(e.target.value)}
          required
        />
        <select
          value={paymentMode}
          onChange={(e) => setPaymentMode(e.target.value)}
        >
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="PayPal">PayPal</option>
        </select>
        <input
          type="text"
          placeholder="Invoice ID"
          value={invoice}
          onChange={(e) => setInvoice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Total Paid Amount"
          value={totalPaidAmount}
          onChange={(e) => setTotalPaidAmount(e.target.value)}
          required
        />
        <button onClick={addTransaction}>Add Transaction</button>
      </div>

      <div className="table-responsive mt-5">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Transaction ID</th>
              <th scope="col">Received From</th>
              <th scope="col">Payment Mode</th>
              <th scope="col">Status</th>
              <th scope="col">Paid On</th>
              <th scope="col">Invoice</th>
              <th scope="col">Total Paid Amount</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((record) => (
              <tr key={record.transactionId}>
                <td>{record.srNo}</td>
                <td>{record.transactionId}</td>
                <td>{record.receivedFrom}</td>
                <td>{record.paymentMode}</td>
                <td>{record.status}</td>
                <td>{record.paidOn}</td>
                <td>{record.invoice}</td>
                <td>${record.TotalPaidAmount}</td>
                <td>
                  <PaymentInvoice record={record} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsMadeTable;