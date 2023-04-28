import React, { useState } from "react";
import { useNavigate, redirect } from "react-router-dom";
import Payment from "./payment";

import "./payment.css";

const Address = () => {
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [number, setNumber] = useState(0);
  const form = document.querySelector("form");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const Add = () => {
    if (!district || !state || !pin || !number) {
      alert("All Field Is Required");
    } else {
      setData([
        " District: ",
        district,
        " state: ",
        state,
        " Pin: ",
        pin,
        " Number: ",
        number,
      ]);

      navigate("/Payment");
    }
  };

  return (
    <div>
      <form>
        <h2>Add Your Address</h2>
        <label for="card-number">District:</label>
        <input
          type="text"
          id="card-number"
          name="card-number"
          onChange={(e) => setDistrict(e.target.value)}
        />
        <label for="card-name">State:</label>
        <input
          type="text"
          id="card-name"
          name="card-name"
          onChange={(e) => setState(e.target.value)}
        />
        <label for="expiration-date">Pin:</label>
        <input
          type="text"
          id="expiration-date"
          name="expiration-date"
          onChange={(e) => setPin(e.target.value)}
        />
        <label for="security-code">Mobile Number:</label>
        <input
          type="number"
          id="security-code"
          name="security-code"
          onChange={(e) => setNumber(e.target.value)}
        />
        <input type="submit" value="Submit Address" onClick={Add} />
      </form>
    </div>
  );
};

export default Address;
