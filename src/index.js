import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Footer from "./components/Footer/Footer";

ReactDOM.render(
    <React.StrictMode>
      <App/>
      <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
