import React, { useState } from "react";
import { Link } from "react-router-dom";
import SScrapBuyItem from "../Scrapyard/SScrapBuyItem";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../State/Actions/ActionCreator";

const ScrapTableRow = ({record}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [product, setProduct] = useState();
    const dispatch = useDispatch();

    const handleOpenBuyModal = (buyItem) => {
        setProduct(buyItem);
        
        dispatch(ActionCreator.SetProduct(buyItem));

        setTimeout(() => {
            setIsModalOpen(true);    
        }, 1000);
    };
    const handleCloseModal = () => setIsModalOpen(false);



    return(
        <>
        <SScrapBuyItem open={isModalOpen} onClose={handleCloseModal}/>
        <tr class="table-secondary">
            <td>{record.srNo}</td>
            <td>{record.category}</td>
            <td>{record.productName}</td>
            <td>{record.quantity}</td>
            <td>{record.listedOn}</td>
            <td>{record.pricePerKg}</td>
            <td>{record.totalAmount}</td>
            <td>
            <button className="btn btn-primary" onClick={() => handleOpenBuyModal(record)}>Buy</button>
            </td>
          </tr>
        </>
        
    )
}

export default ScrapTableRow;