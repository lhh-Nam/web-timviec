import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/scss/App.scss";
import "./assets/scss/reset.scss";
import Footer from "./components/atoms/footer";
import Header from "./components/atoms/header";
import HomePage from "./pages/HomePage";
import JobDetailPage from "./pages/JobDetailPage";
import JobsPage from "./pages/JobsPage";
import UserLoginPage from "./pages/UserLoginPage";
import UserRegisterPage from "./pages/UserRegisterPage";
import jwt_decode from "jwt-decode";
import io from "socket.io-client";

import {
  GetAllPost,
  GetAllLocation,
  GetAllPosition,
  GetAllCategory,
  GetAllUser,
} from "./common/api/GetAll";

import EmployerRegisterPage from "./pages/EmployerRegisterPage";
import EmployerPostPage from "./pages/EmployerPostPage";

import cookie from "js-cookie";
import axios from "axios";

import Admin_Dashboard from "./components/layouts/admin/Admin_Dashboard";
import Admin_User from "./pages/Admin_User";
import Admin_Post from "./pages/Admin_Post";
import Admin_Category from "./pages/Admin_Category";
import Admin_Position from "./pages/Admin_Position";
import Admin_Location from "./pages/Admin_Location";
import Admin_Add_Position from "./pages/Admin_Add_Position";
import Admin_Add_Category from "./pages/Admin_Add_Category";
import Admin_Add_Location from "./pages/Admin_Add_Location";

/* GET cookie */
let getCookie = () => {
  const userCookie = cookie.get("x_auth");
  if (userCookie) {
    const user = jwt_decode(userCookie);
    return user;
  } else {
    return "";
  }
};

function App() {
  const [user, setUser] = useState(getCookie());
  const [socket, setsocket] = useState(null);
  const setUpSocket = () => {
    const token = cookie.get("x_auth");
    if (token && !socket) {
      const newSocket = io("http://localhost:5000", {
        query: {
          token: token,
        },
      });
      newSocket.on("disconnect", () => {
        setsocket(null);
        setTimeout(setUpSocket, 3000);
        console.log("Socket disconnected !");
      });
      newSocket.on("connection", () => {
        console.log("Socket connected !");
      });
      setsocket(newSocket);
    }
  };
  useEffect(() => {
    setUpSocket();
  }, []);
  /* Check user */
  const userOnRedux = useSelector((state) => state.LoginReducer);
  let isLogin = userOnRedux.user.success;
  let isToken = userOnRedux.user.token;

  if (isToken) {
    var userDecode = jwt_decode(isToken);
  }

  /* call Api */
  GetAllPost();
  GetAllLocation();
  GetAllPosition();
  GetAllCategory();
  GetAllUser();

  if (user || userDecode) {
    axios.get("/user/profile").then(function (response) {
      // handle success
    });
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          {user ? null : (
            <Route path="/user-login">
              <UserLoginPage setUpSocket={setUpSocket} />
            </Route>
          )}
          <Route path="/admin-dashboard">
            <Admin_Dashboard />
          </Route>
          <Route path="/admin-category">
            <Admin_Category />
          </Route>
          <Route path="/admin-add-position">
            <Admin_Add_Position />
          </Route>
          <Route path="/admin-add-category">
            <Admin_Add_Category />
          </Route>
          <Route path="/admin-add-location">
            <Admin_Add_Location />
          </Route>
          <Route path="/admin-position">
            <Admin_Position />
          </Route>
          <Route path="/admin-location">
            <Admin_Location />
          </Route>
          <Route path="/admin-user">
            <Admin_User />
          </Route>
          <Route path="/admin-post">
            <Admin_Post />
          </Route>
          <Route path="/user-register">
            <UserRegisterPage />
          </Route>

          <Route path="/employer-register">
            <EmployerRegisterPage />
          </Route>

          <Route path="/employer-post">
            <Header user={user} userDecode={userDecode} />
            <EmployerPostPage />
          </Route>

          <Route path="/job-detail/:id">
            <Header user={user} userDecode={userDecode} />
            <JobDetailPage
              user={user}
              userDecode={userDecode}
              socket={socket}
            />
            <Footer />
          </Route>

          <Route path="/jobs">
            <Header user={user} userDecode={userDecode} />
            <JobsPage />
            <Footer />
          </Route>

          <Route path="/">
            <Header user={user} userDecode={userDecode} />
            <HomePage />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
