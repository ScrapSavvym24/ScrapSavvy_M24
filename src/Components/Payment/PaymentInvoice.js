import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import jsPDF from 'jspdf';

const PaymentInvoice = ({record}) => {

    const generatePDF = () => {
        console.log(record);
        const doc = new jsPDF();
        doc.text(`Invoice Number: ${record.transactionId}`, 10, 10);
        doc.text(`Date: ${record.paidOn}`, 10, 20);
        doc.text(`Client Name: ${"Company name"}`, 10, 30);

        let startY = 50;
        doc.text('Items:', 10, startY);
        doc.text(`Item: ${record.receivedFrom}, Quantity: ${record.paymentMode}, Price: ${record.status}`, 10, startY);

        startY += 20;
        doc.text(`Total: $${record.TotalPaidAmount}`, 10, startY);

        doc.save(`invoice_${record.transactionId}.pdf`);
    };

    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={generatePDF}
            >
                Download invoice
            </button>
        </div>
    );
};

export default PaymentInvoice;
