import React, { useState, useEffect, useContext } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

const mapStyles = {
  position: "fixed",

  width: "calc(100vh - 75px)",
  height: "calc(100vh - 75px)",
};

const FindMaps = observer((props) => {
  const { hosp } = useContext(Context);

  return (
    <Map
      google={props.google}
      zoom={3}
      style={mapStyles}
      initialCenter={{
        lat: 49.988358,
        lng: 36.232845,
      }}
    >
      {hosp.hospitalsss.map((hospit) => (
        <Marker
          key={hospit.url}
          title={hospit.title}
          name="dd"
          position={{ lat: hospit.latitudue, lng: hospit.longtitude }}
        />
      ))}
    </Map>
  );
});

export default GoogleApiWrapper({
  apiKey: "AIzaSyB9g34neu3aTs0JsiJA5QGck4YHfFwC_5k",
})(FindMaps);

// import React from "react";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

// const FindMaps = withScriptjs(
//   withGoogleMap((props) => (
//     <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//       <Marker position={{ lat: -34.397, lng: 150.644 }} />
//     </GoogleMap>
//   ))
// );

// <FindMaps
//   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
//   loadingElement={<div style={{ height: `100%` }} />}
//   containerElement={<div style={{ height: `400px` }} />}
//   mapElement={<div style={{ height: `100%` }} />}
// />;
