import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import "./style.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Veuillez remplir tout les champs.");
    } 
    else {
      
      try {

        const {data} = await axios.post("http://localhost:8080/api/auth/login", {
          email,
          password,
        });

        console.log("data", data);
        setEmail("");
        setPassword("");

        localStorage.setItem('token', JSON.stringify(data?.token));
        localStorage.setItem('userId', JSON.stringify(data?.user?._id));
        localStorage.setItem('username', JSON.stringify(data?.user?.username));
        
        setTimeout(() => {
          window.location.replace("/");
        }, 2000);

      } catch (error) {
        console.log("err", error);
        setError(error?.response?.data?.message);
        // throw Error(error);
      }
    }
  };

  return (
    <div className="auth_container">
      <div className="login_container">
        <h2 className="text-capitalize text-center">Login</h2>
        <form className="mt-5 d-flex flex-column" onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="form-control p-2"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password..."
              className="form-control p-2"
            />
          </div>

          <button className="btn btn-danger fw-bold my-3">Login</button>
          <Link to="/register" className="btn fw-bold btn-primary btn-top">
            Register
          </Link>
        </form>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
