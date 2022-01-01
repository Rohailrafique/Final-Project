import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function SignupPage({ setUser, user }) {
  const navigate = useNavigate();
  const [newUserInfo, setNewuserInfo] = useState({
    username: "",
    password: "",
    email: "",
    gender: "",
    picture: "",
  });

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: newUserInfo.username,
            email: newUserInfo.email,
            password: newUserInfo.password,
            gender: newUserInfo.gender,
            picture: newUserInfo.picture,
        })
    })
    .then(res => {
            res.json().then(data => {
                setUser(data)
                navigate('/')
            })
    })
  }
  
  function handleSignupChange(e) {
    setNewuserInfo({ ...newUserInfo, [e.target.name]: e.target.value });
  }

  return (
    <Box 
      id="signup-form-box"
      onSubmit={handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="username" type="text" name="username" value={newUserInfo.username} onChange={handleSignupChange} required variant="outlined" />
      <TextField id="outlined-basic" label="password" type="password" name="password" value={newUserInfo.password} onChange={handleSignupChange} required variant="outlined" />
      <TextField id="outlined-basic" label="email" type="text" name="email" value={newUserInfo.email} onChange={handleSignupChange} required variant="outlined" />
      <TextField id="outlined-basic" label="gender" type="text" name="gender" value={newUserInfo.gender} onChange={handleSignupChange} variant="outlined" />
      <TextField id="outlined-basic" label="picture url" type="text" name="picture" value={newUserInfo.picture} onChange={handleSignupChange} variant="outlined" />
      <button type="submit">Signup</button>
    </Box>
  );
}

export default SignupPage;
