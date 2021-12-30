import React, { useState, useEffect } from "react";
import "../App.css";
import TopNav from "./TopNav";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Listings from "./Listings";

function App() {
  const [thumbnailClicked, setThumbnailClicked] = useState(false);
  const [user, setUser] = useState("");

  function handleAvatarClick() {
    setThumbnailClicked(!thumbnailClicked);
  }

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
        handleAvatarClick={handleAvatarClick}
        user={user}
        handleLogout={handleLogout}
        thumbnailClicked={thumbnailClicked}
      />
      <Routes>
        <Route
          exact path="login"
          element={<LoginForm setUser={setUser} />}
        ></Route>
        <Route exact path="/" element={<Listings />}></Route>
        <Route exact path="signup" element={<SignupPage user={user}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
