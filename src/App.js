import React, { useEffect, useLayoutEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
// import Header from "./components/Header";
import Payment from "./payment/payment";

import Footer from "./Footer/Footer";
import Register1 from "./Pages/Register";

import Address from "./payment/Address";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("");
  }, []);

  return (
    <>
      <div className="app">
        <Navbar />
        {/* {location.pathname !== "/" ? null : <Header />} */}

        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/register" element={<Register1 />} />
          <Route path="/Address" element={<Address />} />
          <Route element={<Default />} />
        </Routes>
        <Modal />
      </div>
      <Footer className="footer-page" />
    </>
  );
}

export default App;
