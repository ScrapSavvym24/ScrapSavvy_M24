import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../State/Actions/ActionCreator";
import CompUpdateProduct from "./CompUpdateProduct";
import CompanyService from "../../Services/CompanyService";
import Toast from "../Common/Snackbar";

const CompScrapTableRow = ({ record }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [product, setProduct] = useState({});
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const dispatch = useDispatch();

    useEffect(() => {
        setProduct(record);
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
        await CompanyService.DeleteProduct(userProfileId, productId)
        .then(response => {
            handleSnackbar('Product deleted successfully!', 'success', true);
            
        })
        .catch(error => {
            handleSnackbar('Server error!', 'error', true);
        })
        setTimeout(() => {
            handleSnackbarClose(false);
        }, 1000);
    }

    const handleCloseModal = () => setIsModalOpen(false);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
      };

      const handleSnackbar = (message, severity, show) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(show);
      };

    return (
        <tr className="table-secondary" key={product.productId}>
            <td>{product.productId}</td>
            <td>{product.category?.categoryName}</td>
            <td>{product.productName}</td>
            <td>{product.productQuantity}</td>
            <td>{product.userProfile?.companyName}</td>
            <td>{product.createdOn}</td>
            <td>{product.pricePerQuantity}</td>
            <td>{product.productQuantity * product.pricePerQuantity}</td>
            <td>
                <button className="btn btn-info me-2" onClick={() => handleOpenUpdateModal(product)}>Edit</button>
                <button className="btn btn-danger me-2" onClick={() => handleDeleteProduct(product.productId)}>Delete</button>
            </td>
            <CompUpdateProduct open={isModalOpen} onClose={handleCloseModal} product={product}/>
            <Toast
        open={snackbarOpen}
        close={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
        </tr>
    );
};

export default CompScrapTableRow;
