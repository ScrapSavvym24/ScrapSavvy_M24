import React, { useState } from 'react';
import '../.././Static/Dashboard.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomerSidebar from '../Common/CustomerSidebar';
import LogoutMenu from '../Common/LogoutMenu';

const CustomerDashboard = () => {
  
  return (
    <div className='d-flex'>
    <CustomerSidebar/>
    <div className='container'>
    <div className="dashboard-content">
    <div className='float-end'>
        <LogoutMenu />
      </div>
      <div className="dashboard-title">
          <h1>Dashboard - Customer</h1>
          <hr/>
        </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-light text-dark">
            <div className="card-body">Quantity available</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-light text-dark">
            <div className="card-body">Quantity sold</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-light text-dark">
            <div className="card-body">Orders received</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-light text-dark">
            <div className="card-body">Payment received</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card bg-light text-dark">
            <div className="card-body">Large Widget</div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-light text-dark">
            <div className="card-body">Large Widget</div>
          </div>
        </div>
      </div>
        </div>
      
    </div>
    </div>
    
  );
};

export default CustomerDashboard;
