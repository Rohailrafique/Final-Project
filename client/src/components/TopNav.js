import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TopNav({ user, setUser, handleLogout, handleSearch, listings }) {
  const navigate = useNavigate();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar id="nav-box" position="static">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <div id="title" onClick={handleClick}>
                 Kapray
                </div>
              </Typography>
              { user.username ?
                <form id="search-field">
                  <input
                    placeholder=" 🔍 Search items"
                    onChange={handleSearch}
                  />
                </form> : null
              }
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {user.username ? (
                  <p id="welcome">| Welcome, {user.username} |</p>
                ) : null}

                {user.username ? (
                  <Button id="logout-button" onClick={handleLogout}>
                    Logout
                  </Button>
                ) : (
                  <>
                    <Link to="login">
                      {" "}
                      <Button id="login-button">Login</Button>
                    </Link>
                    <Link to="signup">
                      {" "}
                      <Button id="signup-button">Signup</Button>
                    </Link>{" "}
                  </>
                )}
                {user.username ? <Avatar src={user.picture} /> : null}
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div></div>
    </div>
  );
}

export default TopNav;
