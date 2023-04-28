import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [regusername, setRegUsername] = useState();
  const [regpassword, setRegPassword] = useState();
  const register = () => {
    axios
      .post("http://localhost:8080/api/v1/user/register", {
        Username: regusername,
        password: regpassword,
      })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <>
      <div className="register">
        <h2>Register</h2>
        <label>UserName</label>
        <input type="text" onChange={(e) => setRegUsername(e.target.value)} />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setRegPassword(e.target.value)}
        />
        <button onClick={register}>Register</button>
      </div>
      <div className="loginr">
        <h2>Login</h2>
        <label>UserName</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <button>Login</button>
      </div>
    </>
  );
}
