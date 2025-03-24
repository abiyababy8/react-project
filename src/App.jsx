import React from "react";
import {Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";
import AdminPanel from "./pages/AdminPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";


function App() {
  return (
  <>
  <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer />
  </>
  );
}

export default App;
