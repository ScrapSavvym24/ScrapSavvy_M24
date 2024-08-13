import logo from './logo.svg';
// import './App.css';
import '../src/Static/Style.css'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import CompanyDashboard from './Components/Company/CompanyDashboard';
import Signup from './Components/Auth/Signup';
import Signin from './Components/Auth/Signin';
import ForgotPassword from './Components/Auth/ForgotPassword';
import ScrapsTable from './Components/Scraps/ScrapsTable';
import CustomerDashboard from './Components/Customer/CustomerDashboard';
import ScrapyardDashboard from './Components/Scrapyard/ScrapyardDashboard';
import PaymentsReceivedTable from './Components/Payment/PaymentsReceivedTable';
import PaymentsMadeTable from './Components/Payment/PaymentsMadeTable';
import ScrapyardPayments from './Components/Scrapyard/ScrapyardPayments';
import CompanyProfile from './Components/Company/CompanyProfile';
import CustomerProfile from './Components/Customer/CustomerProfile';
import ScrapyardProfile from './Components/Scrapyard/ScrapyardProfile';
import SScrapsTable from './Components/Scrapyard/SScrapsTable';
import MySScrapsTable from './Components/Scrapyard/MySScrapsTable';
import CustomerTransactions from './Components/Customer/CustomerTransactions';
import CScrapsTable from './Components/Customer/CScrapsTable';
import CompPaymentsReceivedTable from './Components/Company/CompPaymentsReceivedTable';
import CompScrapsTable from './Components/Company/CompScrapsTable';
import Frontpage from './frontpage';
import Footer from './Components/Common/footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          
        <Route path="/" exact element={<Frontpage />} />

          <Route path="/" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/forgotPassword" exact element={<ForgotPassword />} />

          <Route path="/company-dashboard" exact element={<CompanyDashboard />} />
          <Route path="/com-list-of-scraps" exact element={<CompScrapsTable />} />
          <Route path="/company-payments" exact element={<CompPaymentsReceivedTable />} />
          <Route path="/company-profile" exact element={<CompanyProfile />} />

          <Route path="/scrapyard-dashboard" exact element={<ScrapyardDashboard />} />
          <Route path="/sr-list-of-scraps" exact element={<SScrapsTable />} />
          <Route path="/mysr-list-of-scraps" exact element={<MySScrapsTable />} />
          <Route path="/scrapyard-payments" exact element={<ScrapyardPayments />} />
          <Route path="/scrapyard-profile" exact element={<ScrapyardProfile />} />

          <Route path="/customer-dashboard" exact element={<CustomerDashboard />} />
          <Route path="/cus-list-of-scraps" exact element={<CScrapsTable />} />
          <Route path="/customer-transactions" exact element={<CustomerTransactions />} />
          <Route path="/customer-profile" exact element={<CustomerProfile />} />
          
          <Route path="/r-payments" exact element={<PaymentsReceivedTable />} />
          <Route path="/m-payments" exact element={<PaymentsMadeTable />} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
