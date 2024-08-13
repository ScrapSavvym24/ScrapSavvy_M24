import React from "react";
import LogoutMenu from "../Common/LogoutMenu";
import CustomerSidebar from "../Common/CustomerSidebar";
import PaymentsMadeTable from "../Payment/PaymentsMadeTable";

const CustomerTransactions = () =>{

    return(
        <div className="d-flex">
          <CustomerSidebar/>
      <div className="container">
      <div className="dashboard-content">
      <div className='float-end'>
        <LogoutMenu />
      </div>
      <div className="dashboard-title">
          <h1>Payments</h1>
          <hr/>
        </div>
            <div>
            <PaymentsMadeTable />
            </div>
      
      </div>
      
    </div>
    </div>
    )
}

export default CustomerTransactions;