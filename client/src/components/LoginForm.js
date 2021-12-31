import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ setUser }) {
  const navigate = useNavigate();
  const [loginFormInfo, setLoginFormInfo] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginFormInfo),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setUser(data);
          navigate("/");
        });
      }
    });
  }

  function handleLoginChange(e) {
    setLoginFormInfo({ ...loginFormInfo, [e.target.name]: e.target.value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={loginFormInfo.username}
        onChange={handleLoginChange}
        required
      />
      <input
        type="password"
        name="password"
        value={loginFormInfo.password}
        onChange={handleLoginChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
