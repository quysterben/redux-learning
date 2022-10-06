import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DataProvider from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <DataProvider>
        <App />
    </DataProvider>
);
