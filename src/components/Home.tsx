import React, { useEffect, useRef, useState } from 'react';
import {  GoogleApiWrapper } from 'google-maps-react';
import './home.css';
import { calculateAndDisplayRoute } from '../functions/mapFunctions';
import MapsSearchBar from './MapsSearchBar';

const Home =()=>{
    const mapRef: React.MutableRefObject<HTMLElement | null> = useRef(null); 
    let map = null
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    useEffect(() => {
      generateMap();
    }, []);


  const generateMap = () => {
      map = new google.maps.Map(
        mapRef.current != null ? mapRef.current : new HTMLElement());
      directionsRenderer.setMap(map);
      calculateAndDisplayRoute(directionsService, directionsRenderer);
  }

  return (
    <div>
      {/* <MapsSearchBar map={map}/> */}
        <div id="map" ref={element => {mapRef.current = element}}>

        </div>
        
    </div>
    

  )
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyACPW9eejqQaNzOzbNuh8wEx_Wjg1wnRo0'
})(Home);


  
  