import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import { Provider } from "react-redux";
import App from "./App";
// store is the variable that have to provide for Provider
import store from "./app/store";
import "antd/dist/antd.css";
ReactDOM.render(
  <Router>
    {/* wrap App component with <Provider store={store}>
    the reason for this is to have all of App inside of Provider
     so every component in of App is going to have access to the store variable
    now that I have the Provider and the store, can create the first piece of data fetching
    functionality
     */}
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
