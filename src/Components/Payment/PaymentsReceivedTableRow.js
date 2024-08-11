import React from "react";
import PaymentInvoice from "./PaymentInvoice";

const PaymentsReceivedTableRow = ({record}) => {

    

    return(

        <tr class="table-secondary">
            <td>{record.srNo}</td>
            <td>{record.transactionId}</td>
            <td>{record.receivedFrom}</td>
            <td>{record.paymentMode}</td>
            <td>{record.status}</td>
            <td>{record.paidOn}</td>
            <td>
                <PaymentInvoice record={record}/>
            </td>
          </tr>
    )
}

export default PaymentsReceivedTableRow;