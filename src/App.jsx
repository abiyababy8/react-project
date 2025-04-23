import React from "react";
import {Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/User/Profile";

import Nav from "./components/Nav";
import AdminPanel from "./pages/AdminPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import UserHome from "./pages/User/UserHome";
import Pets from "./pages/Pets";
import PetDetails from "./pages/PetDetails";
import LostPets from "./pages/LostPets";


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
        <Route path="/user-home" element={<UserHome/>} />
        <Route path="/adopt-pets" element={<Pets/>} />
        <Route path="/pets" element={<PetDetails/>} />
        <Route path="/lost-pets" element={<LostPets/>} />
      </Routes>
      <Footer />
  </>
  );
}

export default App;
