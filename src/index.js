import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserStore from "./store/UserStore";
import HospitalStore from "./store/HospitalStore";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      hosp: new HospitalStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
