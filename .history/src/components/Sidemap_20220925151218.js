import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

function Sidemap({ lat, long }) {
  const center = { lat, lng: long };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCchGLWMITMXG1idSuksKIp-oLacr7yXa0",
  });

  if (!isLoaded) {
    return <h1>Loading</h1>;
  }
  return (
    <div class="h-[600px] w-full lg:h-[calc(100vh-90px)] lg:w-[70%]">
      
      <div className="bg-white h-[75px] w-[200px] ">hello</div>

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
          <Marker className position={center} />
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
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
}

export default Sidemap;
