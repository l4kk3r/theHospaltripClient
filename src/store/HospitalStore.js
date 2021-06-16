import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._hospitals = [];
    this._countries = [];
    this._types = [];
    this._department = [];
    this._selectedCountries = "";
    this._selectedTypes = "";
    makeAutoObservable(this);
  }

  setHospitals(hospitals) {
    this._hospitals = hospitals;
  }
  setCountries(countries) {
    this._countries = countries;
  }
  setTypes(types) {
    this._types = types;
  }
  setDepartment(department) {
    this._department = department;
  }
  setSelectedCountries(countries) {
    this._selectedCountries = countries;
  }
  setSelectedTypes(selectedTypes) {
    this._selectedTypes = selectedTypes;
  }

  get hospitalsss() {
    return this._hospitals;
  }
  get countriesss() {
    return this._countries;
  }
  get typesss() {
    return this._types;
  }
  get departmentsss() {
    return this._department;
  }
  get selectedCountriesss() {
    return this._selectedCountries;
  }
  get selectedTypesss() {
    return this._selectedTypes;
  }
}
