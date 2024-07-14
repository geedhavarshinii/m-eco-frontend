import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import GreenRewards from './components/GreenRewards';
import RentItHome from './components/RentItHome';
import RentItItem from './components/RentItItem';
import DonateIt from './components/DonateIt';
import NotFound from './components/NotFound';
import ThriftItHome from './components/ThriftItHome';
import DashBoard from './components/DashBoard'; // Import DashBoard component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Navigate to="/dashboard" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rentithome" element={<RentItHome />} />
        <Route path="/rentititem" element={<RentItItem />} />
        <Route path="/greenrewards" element={<GreenRewards />} />
        <Route path="/donateit" element={<DonateIt />} />
        <Route path="/thriftithome" element={<ThriftItHome />} />
        <Route path="/dashboard" element={<DashBoard />} /> {/* Add Route for DashBoard */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
