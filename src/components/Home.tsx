import React, { useEffect, useRef, useState } from 'react';
import {  GoogleApiWrapper } from 'google-maps-react';
import './home.css';
import { calculateAndDisplayRoute } from '../functions/mapFunctions';
import MapsSearchBar from './MapsSearchBar';
import SearchItinary from './SearchItinary';

let map: google.maps.Map|any  = null;

const Home =()=>{
    const mapRef: React.MutableRefObject<HTMLElement | null> = useRef(null);
    const [mapReady, setMapReady] = useState(false);
    
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

      setMapReady(true);
      console.log(map);
  }

  const renderMapsSearchBar = ()=>{
    if(mapReady){
      console.log(map);
      return(<SearchItinary map={map}/> )
    }
      
    return null;
  }
  return (
    <div>
        {renderMapsSearchBar()}
        <div id="map" ref={element => {mapRef.current = element}}>

        </div>
        
    </div>
    

  )
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyACPW9eejqQaNzOzbNuh8wEx_Wjg1wnRo0'
})(Home);


  
  