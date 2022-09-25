import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import purch from "../Assets/purchase.svg";

function Sidemap({ lat, long }) {
  const center = { lat, lng: long };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCchGLWMITMXG1idSuksKIp-oLacr7yXa0",
  });

  if (!isLoaded) {
    return <h1>Loading</h1>;
  }
  return (
    <div class="relative h-[600px] w-full lg:h-[calc(100vh-90px)] lg:w-[70%]">
      <div className="hidden lg:block p-4 lg:p-0 lg:w-full h-[100%]">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={16}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker position={center}
          style={{
            backgroundColor: "#0000ff",
            fillColor: "#0000ff",
            strokeColor: "0000ff",
          }} />
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
              backgroundColor: "#0000ff",
              fillColor: "#0000ff",
              strokeColor: "0000ff",
            }}
          />
        </GoogleMap>
      </div>

      <div className="flex p-4 absolute top-[20%] rounded-3xl left-[30%] bg-white h-[150px] w-[500px] ">
        <img src={purch} alt="prc" className="h-[100px] w-[200px]" />

        <div className="flex flex-col gap-4">
          <h2>Farm Location</h2>
          <p>Kaduna South</p>
          <p>
            {" "}
            <span>106km</span> / <span>30min</span> from Warehouse{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidemap;
