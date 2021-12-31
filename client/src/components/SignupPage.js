import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
                console.log(data)
                navigate('/')
            })
    })
  }
  
  function handleSignupChange(e) {
    setNewuserInfo({ ...newUserInfo, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleSignupChange}
        type="text"
        placeholder="username"
        name="username"
        value={newUserInfo.username}
      />
      <input
        onChange={handleSignupChange}
        type="password"
        placeholder="password"
        name="password"
        value={newUserInfo.password}
      />
      <input
        onChange={handleSignupChange}
        type="text"
        placeholder="email"
        name="email"
        value={newUserInfo.email}
      />
      <input
        onChange={handleSignupChange}
        type="text"
        placeholder="gender"
        name="gender"
        value={newUserInfo.gender}
      />
      <input
        onChange={handleSignupChange}
        type="text"
        placeholder="picture"
        name="picture"
        value={newUserInfo.picture}
      />
      <button type="submit">Signup</button>
    </form>
  );
}

export default SignupPage;
