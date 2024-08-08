import React, { useState } from 'react';
import '../.././Static/Dashboard.css';
import CompanySidebar from '../Common/CompanySidebar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CompanyDashboard = () => {
  
  return (
    <div className='d-flex'>
    <CompanySidebar/>
    <div className='container'>
    <div className="dashboard-content">
        
        <h1 className="dashboard-title">Dashboard</h1>
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

export default CompanyDashboard;
