import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../State/Actions/ActionCreator";
import CScrapBuyItem from "./CScrapBuyItem";

const CScrapTableRow = ({product}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [product, setProduct] = useState();
    const dispatch = useDispatch();
    const handleOpenBuyModal = (buyItem) => {
        // setProduct(buyItem);
        
        // dispatch(ActionCreator.SetProduct(buyItem));

        setTimeout(() => {
            setIsModalOpen(true);    
        }, 1000);
    };
    const handleCloseModal = () => setIsModalOpen(false);

    return(
        <>
        <CScrapBuyItem open={isModalOpen} onClose={handleCloseModal} product={product}/>
        <tr class="table-secondary">
            <td>{product.srNo}</td>
            <td>{product.category}</td>
            <td>{product.productName}</td>
            <td>{product.quantity}</td>
            <td>{product.listedOn}</td>
            <td>{product.pricePerKg}</td>
            <td>{product.totalAmount}</td>
            <td>
            <button className="btn btn-primary" onClick={() => handleOpenBuyModal(product)}>Buy</button>
            </td>
          </tr>
        </>
        
    )
}

export default CScrapTableRow;