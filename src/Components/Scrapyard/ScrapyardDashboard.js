import React, { useState, useEffect } from 'react';
import '../.././Static/Dashboard.css';
import CompanySidebar from '../Common/CompanySidebar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ScrapyardSidebar from '../Common/ScrapyardSidebar';
import LogoutMenu from '../Common/LogoutMenu';
import axios from 'axios';

const ScrapyardDashboard = () => {
  const [data, setData] = useState({
    quantityAvailable: 0,
    quantitySold: 0,
    ordersReceived: 0,
    paymentReceived: 0,
  });

  useEffect(() => {
    // Fetch data from backend API
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your actual API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='d-flex'>
      <ScrapyardSidebar />
      <div className='container'>
        <div className="dashboard-content">
          <div className='float-end'>
            <LogoutMenu />
          </div>

          <div className="dashboard-title">
            <h1>Dashboard - Scrapyard</h1>
            <hr />
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card bg-light text-dark">
                <div className="card-body">
                  Quantity available
                  <h3>{data.quantityAvailable}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card bg-light text-dark">
                <div className="card-body">
                  Quantity sold
                  <h3>{data.quantitySold}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card bg-light text-dark">
                <div className="card-body">
                  Orders received
                  <h3>{data.ordersReceived}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card bg-light text-dark">
                <div className="card-body">
                  Payment received
                  <h3>&#8377;{data.paymentReceived}</h3>
                </div>
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

export default ScrapyardDashboard;
