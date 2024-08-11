import React from "react";

const PaymentsMadeTableRow = ({record}) => {
    return(

        <tr class="table-primary">
            <td>{record.srNo}</td>
            <td>{record.transactionId}</td>
            <td>{record.receivedFrom}</td>
            <td>{record.paymentMode}</td>
            <td>{record.status}</td>
            <td>{record.paidOn}</td>
            <td>{record.invoice}</td>
            <td>{record.action}</td>
          </tr>
    )
}

export default PaymentsMadeTableRow;