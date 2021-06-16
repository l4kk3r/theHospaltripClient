import React, { useState, useEffect, useContext } from "react";
import PinDropIcon from "@material-ui/icons/PinDrop";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import PublicIcon from "@material-ui/icons/Public";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import LocationCityOutlinedIcon from "@material-ui/icons/LocationCityOutlined";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import Rating from "@material-ui/lab/Rating";
import FindMaps from "../components/maps/FindMaps";
import { getAllHospital } from "../http/hospitalApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { useHistory } from "react-router-dom";
import { useQueryParams } from "../hooks/useQueryParams";

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: teal[800],
      },
      track: {
        color: teal[500],
      },
      rail: {
        color: "black",
      },
    },
  },
});

function valuetext(value) {
  return `${value}$`;
}

const FindHospPage = observer(() => {
  const { hosp } = useContext(Context);
  const history = useHistory();
  const [value, setValue] = useState(30);
  const [valueRange, setValueRange] = useState([20, 337]);
  const [typesValue, setTypesValue] = useState("");
  const [age_brand, setAge_brand] = useState("");
  const query = useQueryParams();

  const queryCountry = query.get("country");
  const queryType = query.get("type");

  const handleChangeSelBrand = (event) => {
    setAge_brand(event.target.value);
    if (!queryType) {
      history.push("?country=" + event.target.value);
    } else
      history.push(
        `hospital?country=` + event.target.value + `&type=` + typesValue
      );

    hosp.setSelectedCountries(event.target.value);
  };
  const handleChangeSelTypes = (event) => {
    console.log("wdwd", age_brand);
    setTypesValue(event.target.value);
    if (!age_brand) {
      history.push(`hospital?type=` + event.target.value);
    } else
      history.push(
        `hospital?country=` + age_brand + `&type=` + event.target.value
      );

    hosp.setSelectedTypes(event.target.value);
  };

  useEffect(() => {
    //console.log("wdwd", age_brand);
    try {
      getAllHospital(queryCountry, queryType)
        .then((data) => hosp.setHospitals(data.hospitals))
        .catch(function (error) {
          if (error.response) {
            //alert(error.response.data.message);
            alert(error.response.data.message);
          }
        });
    } catch (e) {
      console.log(e.message);
    }
  }, [age_brand, typesValue, queryType, queryCountry]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event, newValue) => {
    setValueRange(newValue);
  };
  const refreshFilter = () => {
    setAge_brand();
  };
  return (
    <>
      <div className="findHospPage">
        <div className="findHospPage_first">
          <FindMaps className="findHospPage_first_position" />
        </div>
      </div>
      <div className="findHospPage_second">
        <div className="findHospPage_second_h">
          <h2 className="findHospPage_second_hhh">
            Finding top-level clinics abroad
          </h2>
        </div>
        <div className="findHospPage_second_content">
          <div className="countries_isprav">
            <div className="countries_icon">
              <div>
                <button className="countries_icon_b">
                  <PinDropIcon className="countries_icon_button razmer" />
                </button>
              </div>
              <div className="bubble-element_inputttttt_div">
                <input
                  type="text"
                  className="bubble-element_inputttttt"
                  placeholder="Location"
                />
              </div>
            </div>
          </div>
          <div className="countries_isprav_border_none">
            <div>
              <p className="findHospPage_second_d_p_netot">
                Radius:{" "}
                <a className="findHospPage_second_d_p_netot_a">{value} miles</a>
              </p>
            </div>
            <div>
              <ThemeProvider theme={muiTheme}>
                <Slider
                  className="findHospPage_second_d_radius_slider"
                  max={50}
                  value={typeof value === "number" ? value : 0}
                  onChange={handleSliderChange}
                  aria-labelledby="input-slider"
                />
              </ThemeProvider>
            </div>
          </div>
          <div className="countries_isprav">
            <div className="countries_icon">
              <div>
                <button className="countries_icon_b">
                  <PublicIcon className="countries_icon_button razmer" />
                </button>
              </div>
              <div className="bubble-r-box">
                <select
                  className="bubble-element_isprav "
                  // value={(e) => setCountriesValue(e.target.value)}
                  value={age_brand}
                  onChange={handleChangeSelBrand}
                >
                  <option
                    className="dropdown-choice_dropdown-placeholder"
                    value=""
                    disabled=""
                  >
                    All countries
                  </option>

                  {hosp.countriesss.map((country) => (
                    <option
                      className="dropdown-choice"
                      value={country.nameTranslit}
                      key={country.nameTranslit}
                      //onChange={(e) => setCountriesValue(e.target.value)}
                      //onClick={(e) => setCountriesValue(e.target.value)}
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="countries_isprav">
            <div className="countries_icon">
              <div>
                <button className="countries_icon_b">
                  <LocalHospitalIcon className="countries_icon_button razmer" />
                </button>
              </div>
              <div className="bubble-r-box">
                <select
                  className="bubble-element_isprav "
                  value={typesValue}
                  onChange={handleChangeSelTypes}
                >
                  <option
                    className="dropdown-choice_dropdown-placeholder"
                    value=""
                    disabled=""
                  >
                    All types of hospitals
                  </option>

                  {hosp.typesss.map((types) => (
                    <option
                      key={types._id}
                      className="dropdown-choice"
                      value={types.nameTranslit}
                    >
                      {types.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="countries_isprav">
            <div className="countries_icon">
              <div>
                <button className="countries_icon_b">
                  <EnhancedEncryptionIcon className="countries_icon_button razmer" />
                </button>
              </div>
              <div className="bubble-r-box">
                <select className="bubble-element_isprav ">
                  <option
                    className="dropdown-choice_dropdown-placeholder"
                    value=""
                    disabled=""
                  >
                    All departments
                  </option>
                  {hosp.departmentsss.map((departments) => (
                    <option
                      className="dropdown-choice"
                      value={departments.nameTranslit}
                      key={departments._id}
                    >
                      {departments.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="countries_isprav_border_none">
            <div>
              <p className="findHospPage_second_d_p_netot">
                Price range:{" "}
                <a className="findHospPage_second_d_p_netot_a">
                  {" "}
                  ${valueRange[0]} to ${valueRange[1]}
                </a>
              </p>
            </div>
            <div>
              <Slider
                max={1000}
                value={valueRange}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
              />
            </div>
          </div>
          <div className="countries_isprav_border_none">
            <p className="findHospPage_second_d_p">
              {hosp.hospitalsss.length} Results found!
            </p>
          </div>
          <div className="countries_isprav_border_none_align">
            <button className="button_log_butt" onClick={refreshFilter}>
              REFRESH
            </button>
          </div>
        </div>

        <div className="findHospPage_second_hospital_list">
          {hosp.hospitalsss.map((hospit) => (
            <div className="findHospPage_second_hospital_block">
              <div className="findHospPage_second_hospital_block_picture">
                <img
                  className="findHospPage_second_hospital_block_picture_img"
                  src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1618185201588x309689701925794240%2Fhttps___s3.amazonaws.com_appforest_uf_f1614538791654x743566161866933400_unnamed-2.jpg?w=1024&h=506&auto=compress&dpr=1&fit=max"
                  alt=""
                />
              </div>
              <div className="findHospPage_second_hospital_block_info">
                <div className="findHospPage_second_hospital_block_rating">
                  <Rating
                    name="disabled"
                    value={4}
                    disabled
                    className="findHospPage_second_hospital_block_rating_sam_ratenig"
                  />
                </div>
                <div className="findHospPage_second_hospital_block_title">
                  <h3 className="findHospPage_second_hospital_block_title_h">
                    {hospit.title}
                  </h3>
                </div>
                <div className="findHospPage_second_hospital_block_descrip">
                  <div className="findHospPage_second_hospital_block_first">
                    <div className="findHospPage_second_hospital_block_location">
                      <PinDropOutlinedIcon className="findHospPage_second_hospital_block_location_icon" />
                      <p className="findHospPage_second_d_p_next">
                        {hospit.city} ,{hospit.country.name}
                      </p>
                    </div>
                    <div className="findHospPage_second_hospital_block_location">
                      <LocationCityOutlinedIcon className="findHospPage_second_hospital_block_location_icon" />
                      <p className="findHospPage_second_d_p_next">
                        {hospit.hospitalType}
                      </p>
                    </div>
                  </div>
                  <div className="findHospPage_second_hospital_block_second">
                    <FavoriteRoundedIcon className="findHospPage_second_hospital_block_second_icon" />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

export default FindHospPage;
