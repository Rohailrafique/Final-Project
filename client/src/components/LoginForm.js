import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
    <>
    <h3 id="login-title">Enter your username and password to sign in</h3>
    <Box 
      id="login-form-box"
      onSubmit={handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="username" type="text" name="username" value={loginFormInfo.username} onChange={handleLoginChange}required variant="outlined" />
      <TextField id="outlined-basic" label="password" type="password" name="password" value={loginFormInfo.password} onChange={handleLoginChange}required variant="outlined" />
      <button id="login-info-button" type="submit">Login</button>
    </Box>
    </>
    
  );
}

export default LoginForm;

