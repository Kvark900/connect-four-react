import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Game from "./Game/Game";
import NavbarMenu from "./components/Navbar/Navbar";
import CustomAlert from "./components/Shared/CustomAlert";

export const GlobalContext = createContext(null);

export default function App() {
  let [showAlert, setShowAlert] = useState();
  let [alertMsg, setAlertMsg] = useState();
  let [user, setUser] = useState(getCurrentUser());

  function toggleShowAlert(flag) {
    setShowAlert(flag)
  }

  function updateAlertMsg(msg) {
    setAlertMsg(msg)
  }

  function updateUserSession(user) {
    setUser(user)
  }

  function getCurrentUser() {
    return localStorage.getItem("authUser");
  }

  return (
      <GlobalContext.Provider value={
        {
          showAlert, toggleShowAlert,
          alertMsg, updateAlertMsg,
          user, updateUserSession
        }}>
          <Router>
            <NavbarMenu/>
              <CustomAlert show={showAlert}
                           msg={alertMsg}/>
              <Switch>
                <Route path="/"
                       component={Game}
                       exact/>
                <Route path="/login"
                       component={Login}
                       exact/>
                <Route path="/register"
                       component={Register}
                       exact/>
              </Switch>
          </Router>
      </GlobalContext.Provider>
  );
}
