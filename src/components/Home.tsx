import React, { useRef, useState } from 'react';
import {  GoogleApiWrapper } from 'google-maps-react';
import './home.css';
import { calculateAndDisplayRoute } from '../functions/mapFunctions';

const Home =()=>{
    const mapRef: React.MutableRefObject<HTMLElement | null> = useRef(null); 
    const [mapReady, setMapReady] = useState(false);
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

  const generateMap = () => {
    if (mapReady) {
      const map = new google.maps.Map(
        mapRef.current != null ? mapRef.current : new HTMLElement(),
        {
          //to be deleted, just to remember
          zoom: 15,
          center: { lat: -25.344, lng: 131.036 },
        }
      );
      directionsRenderer.setMap(map);
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    }
    return null
  }

  const checkMapReady=(element: HTMLElement | null)=>{
    mapRef.current = element;
    if (element != null && !mapReady)
      setMapReady(true);
  }

  return (
    <div id="map" ref={element => {checkMapReady(element)}}>
      {generateMap()}
    </div>

  )
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyACPW9eejqQaNzOzbNuh8wEx_Wjg1wnRo0'
})(Home);


  
  