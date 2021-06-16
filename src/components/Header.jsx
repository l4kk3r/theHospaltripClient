import React, { useContext, useEffect } from "react";
import SignUp from "./modal/SignUp";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import MenuListPop from "./modal/MenuListPop";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBarLeft from "./modal/AppBarLeft";
import { NavLink } from "react-router-dom";

const Header = observer(() => {
  const { user } = useContext(Context);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isSocial = useMediaQuery(theme.breakpoints.down("md"));

  const localDelete = () => {
    user.setIsAuth(false);
    localStorage.clear();
  };

  return (
    <>
      {isMatch ? (
        <div className="header_sm">
          <div className="logo">
            <div className="header_img">
              <img
                className="header_img_logo"
                src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1619371352504x449869396619451140%2FFrame%25206%2520%25283%2529.png?w=48&amp;h=48&amp;auto=compress&amp;fit=crop&amp;dpr=1"
              />
            </div>
            <div>
              <h2 className="header_logo_title">Hospaltrip.com</h2>
            </div>
          </div>
          <div>
            <AppBarLeft />
          </div>
        </div>
      ) : (
        <>
          <div className="header">
            <div className="logo">
              <div className="header_img">
                <NavLink to="/">
                  <img
                    className="header_img_logo"
                    src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1619371352504x449869396619451140%2FFrame%25206%2520%25283%2529.png?w=48&amp;h=48&amp;auto=compress&amp;fit=crop&amp;dpr=1"
                  />
                </NavLink>
              </div>
              <div>
                <h2 className="header_logo_title">
                  {" "}
                  <NavLink to="/" className="header_logo_title">
                    {" "}
                    Hospaltrip.com
                  </NavLink>
                </h2>
              </div>
            </div>
            <div className="header_ul">
              <div className="header_li">
                <NavLink to="/hospital" className="header_logo_title_h4">
                  <div>
                    <h4 className="header_logo_title_h4">Find a hospital</h4>
                  </div>
                  <p className="header_logo_title_p4">
                    Find a clinics worldwide
                  </p>
                </NavLink>
              </div>
              <div className="header_li">
                <div>
                  <h4 className="header_logo_title_h4">Treatments </h4>
                </div>
                <p className="header_logo_title_p4">Choose medical area</p>
              </div>
              <div className="header_li">
                <div>
                  <h4 className="header_logo_title_h4">Medical trip </h4>
                </div>
                <p className="header_logo_title_p4">
                  Flight, hotel, visa, etc.
                </p>
              </div>
              <div className="header_li">
                <div>
                  <h4 className="header_logo_title_h4">How it works </h4>
                </div>
                <p className="header_logo_title_p4">About Hospaltrip service</p>
              </div>
              {isSocial ? (
                <></>
              ) : (
                <div className="header_li_icon">
                  <div className="header_icon">
                    <img
                      className="header_icon_img"
                      src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1613083018246x124501254279942620%2Ficonfinder_1_Facebook_colored_svg_copy_5296499.png?w=48&amp;h=48&amp;auto=compress&amp;fit=crop&amp;dpr=1"
                    />
                  </div>
                  <div className="header_icon">
                    <img
                      className="header_icon_img"
                      src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1613083105302x340079118087011080%2Ficonfinder_1_Twitter2_colored_svg_5296515.png?w=48&amp;h=48&amp;auto=compress&amp;fit=crop&amp;dpr=1"
                    />{" "}
                  </div>
                  <div className="header_icon">
                    <img
                      className="header_icon_img"
                      src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1613083127000x357939430071305660%2Ficonfinder_1_Instagram_colored_svg_1_5296765.png?w=48&amp;h=48&amp;auto=compress&amp;fit=crop&amp;dpr=1"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="button_log">
              {user.isAuth ? <MenuListPop onClick={localDelete} /> : <SignUp />}
            </div>
          </div>
        </>
      )}
    </>
  );
});

export default Header;
