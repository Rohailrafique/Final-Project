import React, { useState, useEffect } from "react";
import "../App.css";
import TopNav from "./TopNav";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Listings from "./Listings";
import SignupPage from "./SignupPage";

function App() {
  const [user, setUser] = useState("");
  
  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setUser({
          username: "",
          password: "",
        });
      }
    });
  }

  return (
    <>
      <TopNav
        user={user}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route
          exact path="login"
          element={<LoginForm setUser={setUser} />}
        ></Route>
        <Route exact path="/" element={<Listings user={user}/>}></Route>
        <Route exact path="signup" element={<SignupPage setUser={setUser} user={user}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
