/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import "./App.css";
import Home from "./components/UI/Home";
import NavBar from "./components/UI/NavBar";
import ProductPage from "./components/UI/ProductPage";
import "./styles/tail.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Dashboard from "./components/UI/Dashboard";
import Error from "./components/UI/Error";
import Register from "./components/UI/Register";

export default function App() {
  return (
    <div className="w-full flex flex-col h-screen overflow-auto">
      <NavBar />
      {/* <ProductPage /> */}
      {/* <div className="flex-1 bg-blue-600" >

      </div> */}

      <Router>
        <Routes>
          <Route path="/products" element={<Home />} />

          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/products/:id" element={<ProductPage />} />
          
          <Route path="/*" element={<Error />} />
          {/* <Route path="/product" element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}
