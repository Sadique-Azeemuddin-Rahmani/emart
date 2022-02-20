import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Context";

export default function Login() {
  const { setLogin } = useContext(Context);
  const [message, setMessage] = useState("");
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const loginData = {
    username: "test",
    password: "test@123",
  };

  function handleChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.username === loginData.username && formData.password === loginData.password) {
      setMessage("Login Successfully");
      setLogin(true);
      setTimeout(() => {
        history.goBack();
      }, 1000);
    } else {
      setMessage("Invalid Username or Password");
    }
    
  }

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Please Login</h3>
        <p className="margin-bottom">{message}</p>
        <input
          className="form-input"
          type="text"
          name="username"
          value={formData.username}
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          name="password"
          value={formData.password}
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <button className="form-btn btn">Submit</button>
      </form>
    </section>
  );
}
