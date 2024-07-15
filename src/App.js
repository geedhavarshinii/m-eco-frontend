import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import GreenRewards from "./components/GreenRewards";
import RentItHome from "./components/RentItHome";
import RentItItem from "./components/RentItItem";
import RentItProduct from "./components/RentItProduct";
import DonateIt from "./components/DonateIt";
import NotFound from "./components/NotFound";
import ThriftItHome from "./components/ThriftItHome";
import ThriftItProduct from "./components/ThriftItProduct";
import DashBoard from "./components/DashBoard";


function App() {
  
  const data = [
    { label: "thrifting", points: 40, color: "pink" },
    { label: "renting", points: 170, color: "green" },
    { label: "donations", points: 60, color: "blue" },
  ];

  return (
    <Router>
      <Navbar />
      <div className="pt-20">
      <Routes>
        <Route path="/" exact element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rentithome" element={<RentItHome />} />
        <Route path="/rentititem" element={<RentItItem />} />
        <Route path="/rent-it-product/:id" element={<RentItProduct/>}/>
        <Route path="/greenrewards" element={<GreenRewards data={data}/>} />
        <Route path="/donateit" element={<DonateIt />} />
        <Route path="/thriftithome" element={<ThriftItHome />} />
        <Route path="/product/:id" element={<ThriftItProduct />} />
        <Route path="/dashboard" element={<DashBoard />} />{" "}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;