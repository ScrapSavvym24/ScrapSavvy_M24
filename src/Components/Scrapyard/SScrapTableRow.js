import React, { useEffect, useState } from "react";
import SScrapBuyItem from "./SScrapBuyItem";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../State/Actions/ActionCreator";

const SScrapTableRow = ({record}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setProduct(record);
    }, [record]);

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
        <tr class="table-secondary" key={product.productId}>
            <td>{product.productId}</td>
            <td>{product.category?.categoryName}</td>
            <td>{product.productName}</td>
            <td>{product.productQuantity}</td>
            <td>{product.userProfile?.companyName}</td>
            <td>{product.createdOn}</td>
            <td>{product.pricePerQuantity}</td>
            <td>{product.productQuantity * product.pricePerQuantity}</td>
            <td>
            <button className="btn btn-primary" onClick={() => handleOpenBuyModal(product)}>Buy</button>
            </td>
          </tr>
          <SScrapBuyItem open={isModalOpen} onClose={handleCloseModal} product={product}/>
        </>
        
    )
}

export default SScrapTableRow;