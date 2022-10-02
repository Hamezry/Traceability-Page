import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import purch from "../Assets/farm.svg";
import locationIcon from "../Assets/Vector.svg";

function Sidemap({ lat, long, farmlat, farmlong }) {
  const center = { lat, lng: long };
  const farmer = {farmlat, lng:farmlong}

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyD0jXG6tZX5eypxrx-NqpzHsyFAWKT1Y2w",
  });

  if (!isLoaded) {
    return <h1>Loading</h1>;
  }

  function getDistanceFromLatLonInKm(lat, long, farmlat, farmlong) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(farmlat-lat);  // deg2rad below
    var dLon = deg2rad(farmlong-long); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat)) * Math.cos(deg2rad(farmlat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    console.log(farmer.farmlat, center.lat, center.lng.long)
    return d;
  }
  
  function deg2rad(deg) {
    return Number(deg) * (Math.PI/180)
  }

  return (
    <div className="relative h-[600px] w-full lg:h-[calc(100vh-90px)] lg:w-[70%]">
      <div className="hidden lg:block p-4 lg:p-0 lg:w-full h-[100%]">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={15}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker
            position={center}
            style={{
              backgroundColor: "#0000ff",
              fillColor: "#0000ff",
              strokeColor: "0000ff",
            }}
          />

          <Marker
            position={center}
            style={{
              backgroundColor: "#0000ff",
              fillColor: "#0000ff",
              strokeColor: "0000ff",
            }}
          />

          <Marker
            position={center}
            style={{
              backgroundColor: "#0000ff",
              fillColor: "#0000ff",
              strokeColor: "0000ff",
            }}
          />
        </GoogleMap>
      </div>

      <div className="lg:hidden p-4 lg:p-0 lg:w-full h-[100%]">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            borderRadius: "50px",
          }}
          center={center}
          zoom={15}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker
            position={center}
            style={{
              backgroundColor: "#38CB89",
              fillColor: "#38CB89",
              strokeColor: "#38CB89",
            }}
          />
        </GoogleMap>
      </div>

      <div className="flex absolute p-3 gap-4 top-[25%] text-[12px] md:text-[16px] rounded-3xl md:left-[35%] left-[9%] bg-white text-[#54565B] w-[320px] h-[140px] md:h-[150px] md:w-[420px] ">
        <div><img src={purch} alt="prc" /></div>

        <div className="flex  flex-col gap-4">
          <div className="flex md:text-[18px] font-bold gap-3">
            <img src={locationIcon} alt="prc" />
            <h2 className="text-[#54565B] font-[700]">Farm Location</h2>
          </div>
          <p>Kaduna South</p>
          <p>
            <span className="text-[#76AD94]">{getDistanceFromLatLonInKm()}km</span> <span className="text-[#76AD94]">0min</span> from Warehouse
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidemap;
