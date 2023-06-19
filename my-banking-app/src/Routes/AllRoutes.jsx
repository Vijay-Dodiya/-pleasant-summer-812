import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./../Pages/Home";
import ContactUs from "./../Pages/ContactUs";
import AboutUs from "./../Pages/AboutUs";
// import Products from "../Pages/Products";
import OpenAccount from "../Pages/OpenAccount";
import PrivateRoute from "./PrivateRoutes";
import Navbar from "../Navbars/Navbar";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import WithSubnavigation from "../Navbars/nav.jsx";
import Account from "../Pages/LandingPage/Pages/Account";
import Offers from "../Pages/LandingPage/Pages/Offers";
import Loans from "../Pages/LandingPage/Pages/Loans";
import Cards from "../Pages/LandingPage/Pages/Cards";
import Payments from "../Pages/LandingPage/Pages/Payments";
import Insurance from "../Pages/LandingPage/Pages/Insurance";
import Customer from "../Pages/LandingPage/Pages/Payments/Customer";
import Customers from "../Pages/LandingPage/Pages/Payments/Customers";
import Transections from "../Pages/LandingPage/Pages/Payments/Transections";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <WithSubnavigation />
      <Routes>
        <Route path="/" element={<Home />} />
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

      <Routes>
        <Route exact path="/logo" />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/insurance" element={<Insurance />} />
      </Routes>
      <Routes>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/transections" element={<Transections />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
