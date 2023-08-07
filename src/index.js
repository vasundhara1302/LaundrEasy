import React from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import App from "./App";
import '../src/components/popup-form-dashboard/index.css';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
