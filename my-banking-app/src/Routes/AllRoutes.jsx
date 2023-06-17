import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./../Pages/Home";
import ContactUs from "./../Pages/ContactUs";
import AboutUs from "./../Pages/AboutUs";
import Products from "../Pages/Products";
import OpenAccount from "../Pages/OpenAccount";
import PrivateRoute from "./PrivateRoutes";
import NavbarUpper from "../Navbars/NavbarUpper";
import Navbar from "../Navbars/Navbar";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const AllRoutes = () => {
  return (
    <>
      <NavbarUpper />
      <Routes>
        <Route exact path="/logo" />
        <Route path="/login" component={<Login />} />
        <Route path="/sigup" component={<SignUp />} />
      </Routes>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route
          path="/openAccount"
          element={
            <PrivateRoute>
              <OpenAccount />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
