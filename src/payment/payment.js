import React, { useState } from "react";
import "./payment.css";

const Payment = (props) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [code, setCode] = useState(0);
  const form = document.querySelector("form");

  const pay = () => {
    if (!cardNumber || !cardName || !expDate || !code) {
      alert("All Field Is Required");
    }
  };

  return (
    <div>
      <h1>{props.District}</h1>
      <h1>{props.state}</h1>
      <form>
        <h2>Payment Information</h2>
        <label for="card-number">Card Number:</label>
        <input
          type="text"
          id="card-number"
          name="card-number"
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <label for="card-name">Card Name:</label>
        <input
          type="text"
          id="card-name"
          name="card-name"
          onChange={(e) => setCardName(e.target.value)}
        />
        <label for="expiration-date">Expiration Date:</label>
        <input
          type="text"
          id="expiration-date"
          name="expiration-date"
          onChange={(e) => setExpDate(e.target.value)}
        />
        <label for="security-code">Security Code:</label>
        <input
          type="number"
          id="security-code"
          name="security-code"
          onChange={(e) => setCode(e.target.value)}
        />
        <input type="submit" value="Submit Payment" onClick={pay} />
      </form>
    </div>
  );
};

export default Payment;
