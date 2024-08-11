import React, { useState } from "react";
import PaymentsMadeTable from "../Payment/PaymentsMadeTable";
import PaymentsReceivedTable from "../Payment/PaymentsReceivedTable";
import ScrapyardSidebar from "../Common/ScrapyardSidebar";
import LogoutMenu from "../Common/LogoutMenu";

const ScrapyardPayments = () => {
  const [view, setView] = useState("received");

  return (
    <div className="d-flex">
      <ScrapyardSidebar />
      <div className="container">
        <div className="dashboard-content">
          <div className="float-end">
            <LogoutMenu />
          </div>
          <div className="dashboard-title">
            <h1>Payments</h1>
            <hr />
          </div>
          <div className="d-flex float-end">
            <button
              className="btn btn-primary me-3  mt-2"
              onClick={() => setView("received")}
            >
              Payments received
            </button>
            <button
              className="btn btn-primary me-3 mt-2"
              onClick={() => setView("done")}
            >
              Payments done
            </button>
          </div>
          <div>
            {view === "received" ? (
              <PaymentsReceivedTable />
            ) : (
              <PaymentsMadeTable />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrapyardPayments;
