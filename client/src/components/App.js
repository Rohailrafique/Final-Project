import React, { useState, useEffect } from "react";
import "../App.css";
import TopNav from "./TopNav";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Listings from "./Listings";
import SignupPage from "./SignupPage";

function App() {
  const [user, setUser] = useState("");
  const [listings, setListings] = useState([])
  const [searchedData, setSearchedData] = useState(listings)

  useEffect(() => {
       fetch("/items")
      .then(response => response.json())
      .then((data) => setListings(data))
  }, [])

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
  useEffect(() => {
    setSearchedData(listings)
  }, [listings])


    function handleSearch(e){
     const filteredData = listings.filter((item) => {
              return item.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
            setSearchedData(filteredData)
    }
  return (
    <>
      <TopNav
        user={user}
        handleLogout={handleLogout}
        setListings={setListings}
        listings={listings}
        handleSearch={handleSearch}
      />
      <Routes>
        <Route
          exact path="login"
          element={<LoginForm setUser={setUser} />}
        ></Route>
        <Route exact path="/" element={<Listings listings={searchedData} user={user}/>}></Route>
        <Route exact path="signup" element={<SignupPage setUser={setUser} user={user}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
