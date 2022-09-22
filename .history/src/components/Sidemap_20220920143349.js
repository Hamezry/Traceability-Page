import React from 'react'
import GoogleMapReact from 'google-map-react';

// import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';


function Sidemap({ lat, long }) {


  const center = { lat, lng: long }


  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  // });

  // if (!isLoaded) {
  //   return <h1>Loading</h1>
  // }
  return (

    <div class="h-[600px] w-full lg:h-[calc(100vh-90px)] lg:w-[70%]">

      <div className='hidden lg:block p-4 lg:p-0 lg:w-full h-[100%]'>

        <div style={{width:"100%", height:"100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD0jXG6tZX5eypxrx-NqpzHsyFAWKT1Y2w" }}
          center={center}
          defaultZoom={15}
        >
           {/* <Marker position={center}/>  */}
           <div lat={lat} lng={long} >My Marker</div>

        </GoogleMapReact>
        </div>
        {/*<GoogleMap
          mapContainerStyle={{width:'100%', height:'100%'}}
          center={center} zoom={15}
          options={{
            zoomControl:false,
            streetViewControl:false,
            mapTypeControl:false,
            fullscreenControl:false,
          }}
          >
            <Marker position={center}/> 

        </GoogleMap>*/}

      </div>

      <div className='lg:hidden p-4 lg:p-0 lg:w-full h-[100%]'>
        {/* <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '50px' }}
          center={center} zoom={15}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker position={center} />

        </GoogleMap> */}
      </div>


    </div>

  )
}

export default Sidemap








