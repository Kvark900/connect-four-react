import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/"  component={App} exact/>
          <Route path="/login"  component={Login} exact/>
          <Route path="/register"  component={Register} exact/>
        </Switch>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
