import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import Header from "./components/Header";
import Content from "./pages/Content";
import FindHospPage from "./pages/FindHospPage";
import HospPage from "./pages/HospPage";
import { BrowserRouter, Route } from "react-router-dom";
import {
  getAllHospital,
  getAllCountries,
  getAllTypes,
  getAllDepartment,
} from "./http/hospitalApi";
import { observer } from "mobx-react-lite";
import { Context } from "./index";

const App = observer(() => {
  const { hosp } = useContext(Context);
  useEffect(() => {
    getAllCountries().then((data) => hosp.setCountries(data.countries));
    getAllTypes().then((data) => hosp.setTypes(data.hospitaltypes));
    getAllDepartment().then((data) => hosp.setDepartment(data.departments));
  }, []);
  return (
    <BrowserRouter>
      <Header />

      <Route exact path="/" component={Content} />
      <Route exact path="/hospital" component={FindHospPage} />
      <Route path="/hospital/id" component={HospPage} />
    </BrowserRouter>
  );
});

export default App;
