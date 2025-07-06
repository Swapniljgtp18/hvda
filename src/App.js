import logo from './logo.svg';
import './App.css';
import Index from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import HelpCenter from './pages/Helpcenter';
import SupportTeam from './pages/SupportTeam';
import Community from './pages/Community';
import LoginPage from './pages/LoginPage';
import OtpVerifyPage from './pages/OtpVerifyPage';
import Dashboard from './pages/Dashboard';
import AddFunds from './pages/AddFunds';
import Electricity from './pages/Electricity';
import MobileRecharge from './pages/MobileRecharge';
import UserDetails from './pages/UserDetails';
import ShowPlans from './pages/ShowPlans';



function App() {
  return (
    <Router>  
    <Header />
    <Routes>
      <Route path="/" element={<Index />} />  
      <Route path="/privacy" element={<Privacy />} />  
      <Route path="/terms" element={<Terms />} />  
      <Route path="/help-center" element={<HelpCenter />} /> 
      <Route path="/support-team" element={<SupportTeam />} /> 
      <Route path="/community" element={<Community />} /> 
      <Route path="/login" element={<LoginPage />} />
      <Route path="/otp" element={< OtpVerifyPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path="/addfunds" element={<AddFunds />} />
      <Route path="/electricity" element={<Electricity/>} />
      <Route path="/mobile-recharge" element={<MobileRecharge/>} />
      <Route path='/user-details' element={<UserDetails/> } />
      <Route path="/show-plans" element={<ShowPlans/>} />
      
      
             
    </Routes>
   
    <Footer />
  </Router>
);
}

export default App;
