import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

// Create components for different routes
const Account = () => <h1>Account Page</h1>;
const Loan = () => <h1>Loan Page</h1>;
const Offers = () => <h1>Offers Page</h1>;
const Cards = () => <h1>Cards Page</h1>;

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/loan">Loan</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/cards">Cards</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/account" component={Account} />
        <Route path="/loan" component={Loan} />
        <Route path="/offers" component={Offers} />
        <Route path="/cards" component={Cards} />
      </Routes>
    </>
  );
};

export default Navbar;
