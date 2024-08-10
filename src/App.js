import React from 'react';
import AOS from 'aos';
import { Routes, Route } from "react-router-dom";
import 'aos/dist/aos.css';
import './App.scss';
import CustomerInfo from './container/CustomerInfo';
import CustomerInside from './container/CustomerInside';
import CustomerVerify from './container/CustomerVerify';
import CustomerInfoFilled from './container/CustomerInfoFilled';

function App() {
  AOS.init();

  return (
    <>
      <Routes>
        <Route path="/" element={<CustomerInfo />} />
        <Route path="/customer-info" element={<CustomerInfo />} />
        <Route path="/customer-info-filled" element={<CustomerInfoFilled />} />
        <Route path="/customer-inside" element={<CustomerInside />} />
        <Route path="/customer-verify" element={<CustomerVerify />} />
      </Routes>
    </>
  );
}

export default App;