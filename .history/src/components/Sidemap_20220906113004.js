import React from 'react'
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api';

const center = {lat:48.8584, lng:2.294}

function Sidemap() {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded){
    return <h1>Loading</h1>
  }
  return (

    <div class= "h-[600px] w-full lg:h-[calc(100vh-90px)] lg:w-[68%]">

      <div className='hidden lg:block p-4 lg:p-0 lg:w-full h-[100%]'>
          <GoogleMap
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

          </GoogleMap>
      </div>

      <div className='lg:hidden p-4 lg:p-0 lg:w-full h-[100%]'>
          <GoogleMap
          mapContainerStyle={{width:'100%', height:'100%', borderRadius:'50px'}}
          center={center} zoom={15}
          options={{
            zoomControl:false,
            streetViewControl:false,
            mapTypeControl:false,
            fullscreenControl:false,
          }}
          >
            <Marker position={center}/> 

          </GoogleMap>
      </div>


    </div>
    
  )
}

export default Sidemap








