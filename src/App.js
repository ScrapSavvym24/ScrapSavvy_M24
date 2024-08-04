import logo from './logo.svg';
// import './App.css';
import '../src/Static/Style.css'
import Signup from './Components/Auth/Signup';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Signin from './Components/Auth/Signin';
import ForgotPassword from './Components/Auth/ForgotPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" exact element={<Signup />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/forgotPassword" exact element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
