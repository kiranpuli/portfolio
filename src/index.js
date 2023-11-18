import React from "react"
import ReactDOM from 'react-dom';
import {
  HashRouter as Router
} from "react-router-dom";

import App from './App';
import './bootstrap.css'

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);