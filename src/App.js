import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import GreenRewards from './components/GreenRewards';
import RentItHome from './components/RentItHome';
import RentItItem from './components/RentItItem';
import DonateIt from './components/DonateIt';
import NotFound from './components/NotFound';
import ThriftItHome from './components/ThriftItHome';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Navigate to="/greenrewards" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rentithome" element={<RentItHome />} />
        <Route path="/rentititem" element={<RentItItem />} />
        <Route path="/greenrewards" element={<GreenRewards />} />
        <Route path="/donateit" element={<DonateIt />} />
        <Route path="/thriftithome" element={<ThriftItHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
