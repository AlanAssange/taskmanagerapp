import React from "react";
import ReactDOM from "react-dom/client";
import "bootswatch/dist/lux/bootstrap.min.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App title="Task Manager" />
  </React.StrictMode>
);
