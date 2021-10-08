import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


import theme from './theme';



ReactDOM.render(

    <App />
   , document.getElementById("root"));
