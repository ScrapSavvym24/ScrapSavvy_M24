import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SScrapBuyItem from "./SScrapBuyItem";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../State/Actions/ActionCreator";
import SUpdateProduct from "./SUpdateProduct";
import ScrapyardService from "../../Services/ScrapyardService";
import Toast from "../Common/Snackbar";

const MySScrapTableRow = ({record}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [product, setProduct] = useState({});
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const dispatch = useDispatch();

    useEffect(() => {
        setProduct(record);
        console.log(record);
    }, [record]);

    const handleOpenUpdateModal = (buyItem) => {
        setProduct(buyItem);
        
        dispatch(ActionCreator.SetProduct(buyItem));

        setTimeout(() => {
            setIsModalOpen(true);    
        }, 100);
    };

    const handleDeleteProduct = async (productId) => {
        const userProfileId = localStorage.getItem("userId")
        await ScrapyardService.DeleteProduct(userProfileId, productId)
        .then(response => {
            handleSnackbar('Product deleted successfully!', 'success', true);
        })
        .catch(error => {
            handleSnackbar('Server error!', 'error', true);
        })
    }
    const handleSnackbar = (message, severity, show) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(show);
      };

    const handleCloseModal = () => setIsModalOpen(false);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
      };

    return(
        <>
        <SUpdateProduct open={isModalOpen} onClose={handleCloseModal} product={product}/>
        <tr className="table-secondary" key={product.productId}>
            <td>{product.productId}</td>
            <td>{product.category?.categoryName}</td>
            <td>{product.productName}</td>
            <td>{product.productQuantity}</td>
            <td>{product.createdOn}</td>
            <td>{product.pricePerQuantity}</td>
            <td>{product.productQuantity * product.pricePerQuantity}</td>
            <td>{product.productStatus ? "Available" : "Sold"}</td>
            <td>
            <button className="btn btn-info me-2" onClick={() => handleOpenUpdateModal(product)}>Edit</button>
                <button className="btn btn-danger me-2" onClick={() => handleDeleteProduct(product.productId)}>Delete</button>
            </td>
          </tr>
          <Toast
        open={snackbarOpen}
        close={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
        </>
        
    )
}

export default MySScrapTableRow;