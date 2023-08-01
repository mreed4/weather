import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { AppProvider } from "./AppContext";

import "../css/index.css";
import "../css/weather-icons.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
