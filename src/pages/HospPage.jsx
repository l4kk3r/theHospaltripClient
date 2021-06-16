import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import LocationCityRoundedIcon from "@material-ui/icons/LocationCityRounded";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import GroupIcon from "@material-ui/icons/Group";

const HospPage = () => {
  const [valueRating, setValueRating] = React.useState(2);

  return (
    <div className="hospPage">
      <div className="hospPage_picture">
        <div className="hospPage_picture_grand">
          <img
            className="hospPage_picture_small_block_img"
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1618182849194x594769574486406500%2F20190911162121_hospital3.jpeg?w=1024&h=506&auto=compress&dpr=1&fit=max"
          />
        </div>
        <div className="hospPage_picture_small">
          <div className="hospPage_picture_small_block">
            <img
              className="hospPage_picture_small_block_img"
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1618182849194x594769574486406500%2F20190911162121_hospital3.jpeg?w=1024&h=506&auto=compress&dpr=1&fit=max"
            />
          </div>
          <div className="hospPage_picture_small_block">
            <img
              className="hospPage_picture_small_block_img"
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1618182849194x594769574486406500%2F20190911162121_hospital3.jpeg?w=1024&h=506&auto=compress&dpr=1&fit=max"
            />
          </div>
        </div>
      </div>
      <div className="hospPage_content">
        <div className="hospPage_content_info_div"></div>

        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <div className="hospPage_content_info_div">
              <div className="hospPage_content_info_rating">
                <Rating
                  name="disabled"
                  value={valueRating}
                  disabled
                  className="findHospPage_second_hospital_block_rating_sam_ratenig"
                />
              </div>
              <div className="hospPage_content_info_title">
                <h2 className="hospPage_content_info_title_h">
                  CHA Gangnam Medical Center
                </h2>
              </div>
              <div className="hospPage_content_info_location">
                <div className="hospPage_content_info_location_city">
                  <RoomOutlinedIcon className="hospPage_content_info_location_city_icon" />
                  <p className="hospPage_content_info_location_city_text">
                    pekin
                  </p>
                </div>
                <div className="hospPage_content_info_location_city">
                  <MapOutlinedIcon className="hospPage_content_info_location_city_icon" />
                  <p className="hospPage_content_info_location_city_text">
                    Israiel
                  </p>
                </div>
              </div>
              <div className="hospPage_content_info_description">
                <h3 className="hospPage_content_info_description_h">
                  Description
                </h3>
              </div>
              <div className="hospPage_content_info_description_text">
                <p className="hospPage_content_info_description_text_p">
                  CHA Gangnam Medical Center, CHA University, founded in 1960,
                  has become one of the most respected medical and health care
                  providers in the nation. Since then, we’ve established a
                  global network of medical services throughout Asia and the
                  Unites States. Although our hospital is renowned for its
                  outstanding OB/GYN and Fertility Center we also provide a full
                  range of health care services, including inpatient,
                  outpatient, and emergency care, as well as highly specialized
                  diagnostic and treatment procedures with the most up-to-date
                  medical equipments.
                </p>
              </div>
            </div>

            <Paper elevation={2} square className="hospPage_content_details">
              <div className="hospPage_content_details_title">
                <LocationCityRoundedIcon className="hospPage_content_details_title_icon" />
                <h3 className="hospPage_content_info_description_title_h">
                  Details
                </h3>
              </div>
              <div className="hospPage_content_details_content">
                <div className="hospPage_content_details_content_column">
                  <div>
                    <p className="hospPage_content_details_content_column_p">
                      Number of employees:{" "}
                      <a className="hospPage_content_details_content_column_a">
                        9:00am
                      </a>{" "}
                    </p>
                  </div>
                  <div>
                    <p className="hospPage_content_details_content_column_p">
                      Number of doctors:
                      <a className="hospPage_content_details_content_column_a">
                        9:00am
                      </a>{" "}
                    </p>
                  </div>
                  <div>
                    <p className="hospPage_content_details_content_column_p">
                      Opening hours (start):
                      <a className="hospPage_content_details_content_column_a">
                        9:00am
                      </a>{" "}
                    </p>
                  </div>
                  <div>
                    <p className="hospPage_content_details_content_column_p">
                      Office for International Patients:
                      <a className="hospPage_content_details_content_column_a">
                        9:00am
                      </a>{" "}
                    </p>
                  </div>
                </div>
                <div className="hospPage_content_details_content_column">
                  <div>
                    <p className="hospPage_content_details_content_column_p">
                      Number of beds:
                      <a className="hospPage_content_details_content_column_a">
                        9:00am
                      </a>{" "}
                    </p>
                  </div>
                  <div>
                    <p className="hospPage_content_details_content_column_p">
                      Number of hospitals:
                      <a className="hospPage_content_details_content_column_a">
                        9:00am
                      </a>{" "}
                    </p>
                  </div>
                  <div>
                    <p className="hospPage_content_details_content_column_p">
                      Opening hours (end)
                      <a className="hospPage_content_details_content_column_a">
                        9:00am
                      </a>{" "}
                    </p>
                  </div>
                  <div>
                    <p className="hospPage_content_details_content_column_p">
                      Languages:
                      <a className="hospPage_content_details_content_column_a">
                        9:00am
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Paper>
            <Paper elevation={2} square className="hospPage_content_details">
              <div className="hospPage_content_details_title">
                <EnhancedEncryptionIcon className="hospPage_content_details_title_icon" />
                <h3 className="hospPage_content_info_description_title_h">
                  Departments
                </h3>
              </div>
              <div className="hospPage_content_details_content">
                <div className="hospPage_content_details_content_column">
                  <div>
                    <img
                      className="hospPage_content_details_content_column_img"
                      src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1617299914536x674970377175720900%2Fprostate-cancer.jpg?w=24&h=24&auto=compress&dpr=1&fit=max"
                      alt=""
                    />
                    <a className="hospPage_content_details_content_column_a">
                      Urology
                    </a>{" "}
                  </div>
                </div>
                <div className="hospPage_content_details_content_column">
                  <div>
                    <img
                      className="hospPage_content_details_content_column_img"
                      src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1617299914536x674970377175720900%2Fprostate-cancer.jpg?w=24&h=24&auto=compress&dpr=1&fit=max"
                      alt=""
                    />
                    <a className="hospPage_content_details_content_column_a">
                      Urology
                    </a>{" "}
                  </div>
                </div>
              </div>
            </Paper>
            <Paper elevation={2} square className="hospPage_content_details">
              <div className="hospPage_content_details_title">
                <GroupIcon className="hospPage_content_details_title_icon" />
                <h3 className="hospPage_content_info_description_title_h">
                  Doctors
                </h3>
              </div>
              <div className="hospPage_content_details_content">
                <div className="hospPage_content_details_content_column_doc">
                  <div className="hospPage_content_column_doc_picture">
                    <img
                      className="hospPage_content_column_doc_picture_img"
                      src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1618231266120x286228213863545700%2F166%2520%25281%2529.jpeg?w=128&h=128&auto=compress&dpr=1&fit=max"
                      alt=""
                    />
                  </div>
                  <div className="hospPage_content_column_doc_infor">
                    <div className="hospPage_content_column_doc_infor_name">
                      <h4 className="hospPage_content_info_description_title_h4">
                        Dr. Woo Sik Lee
                      </h4>
                    </div>
                    <div className="hospPage_content_column_doc_infor_descr">
                      <p className="hospPage_content_column_doc_infor_descr_p">
                        31 years of experience 36,000 operations 100 IVF cycles
                        per month
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hospPage_content_details_content_column_doc">
                  <div className="hospPage_content_column_doc_picture">
                    <img
                      className="hospPage_content_column_doc_picture_img"
                      src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1618231266120x286228213863545700%2F166%2520%25281%2529.jpeg?w=128&h=128&auto=compress&dpr=1&fit=max"
                      alt=""
                    />
                  </div>
                  <div className="hospPage_content_column_doc_infor">
                    <div className="hospPage_content_column_doc_infor_name">
                      <h4 className="hospPage_content_info_description_title_h4">
                        Dr. Woo Sik Lee
                      </h4>
                    </div>
                    <div className="hospPage_content_column_doc_infor_descr">
                      <p className="hospPage_content_column_doc_infor_descr_p">
                        31 years of experience 36,000 operations 100 IVF cycles
                        per month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>

            <Paper elevation={2} square className="hospPage_content_details">
              xs=12 sm=6
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <div>
              <Paper elevation={2} square>
                xs=12 sm=6
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HospPage;
