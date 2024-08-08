import React from "react";

const ScrapTableRow = ({record}) => {
    return(

        <tr class="table-primary">
            <td>{record.srNo}</td>
            <td>{record.category}</td>
            <td>{record.companyName}</td>
            <td>{record.quantity}</td>
            <td>{record.listedOn}</td>
            <td>{record.pricePerKg}</td>
            <td>{record.totalAmount}</td>
            <td>
                <button className="btn btn-primary">Buy</button>
            </td>
          </tr>
    )
}

export default ScrapTableRow;