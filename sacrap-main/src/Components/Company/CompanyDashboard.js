import React, { useEffect, useState } from 'react';
import '../.././Static/Dashboard.css';
import CompanySidebar from '../Common/CompanySidebar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoutMenu from '../Common/LogoutMenu';
import CompScrapsTable from './CompScrapsTable';

const CompanyDashboard = () => {
  const token = useSelector(state => state)

  useEffect(()=>{
    console.log(token);
  })
  return (
    <div className='d-flex'>
    <CompanySidebar/>
    <div className='container'>
    <div className="dashboard-content">
    <div className='float-end'>
        <LogoutMenu />
      </div>
        <h1 className="dashboard-title">Dashboard - Company</h1>
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
