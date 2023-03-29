import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import App from "./DemoRouter";
import DemoRouter from "./DemoRouter";
import CrudDemo from "./CrudDemo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CrudDemo />);
