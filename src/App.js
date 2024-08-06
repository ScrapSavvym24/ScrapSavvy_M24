import logo from './logo.svg';
// import './App.css';
import '../src/Static/Style.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Components/Company/Dashboard';
import Navbar from './Components/Common/Navbar';
import Signup from './Components/Auth/Signup';
import Signin from './Components/Auth/Signin';
import ForgotPassword from './Components/Auth/ForgotPassword';
import Sidebar from './Components/Company/Sidebar';
import ListOfScraps from './Components/Company/ListOfScraps';
import ListOfPayments from './Components/Payment/ListOfPayments';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" exact element={<Signup />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/forgotPassword" exact element={<ForgotPassword />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/list-of-scraps" exact element={<ListOfScraps />} />
          <Route path="/payments" exact element={<ListOfPayments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
