import React, { useEffect, useRef, useState } from 'react';
import {  GoogleApiWrapper } from 'google-maps-react';
import './home.css';
import { calculateAndDisplayRoute } from '../functions/mapFunctions';
import MapsSearchBar from './MapsSearchBar';
import SearchItinary from './SearchItinary';

let map: google.maps.Map | null  = null;

const Home =()=>{
    const mapRef: React.MutableRefObject<HTMLElement | null> = useRef(null);
    const [mapReady, setMapReady] = useState(false);
    const [start, setStart] = useState<google.maps.LatLng>();
    const [destination, setDestination] = useState<google.maps.LatLng>();
    const directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();

    useEffect(() => {
      initiateMap();
      setMapReady(true);
    }, []);

  const handleClick = ()=>{
    generateMap();
  }
  const initiateMap = ()=>{
    const uluru = { lat: 0, lng: 0 };
    const input = mapRef.current as HTMLDivElement;
    map = new google.maps.Map(
      input,
      {
        zoom: 2,
        center: uluru
      }
    );
  }
  const resetMap = ()=>{
    map = new google.maps.Map(mapRef.current as HTMLDivElement);
  }
  const generateMap = () => {
    resetMap();
    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer, start!, destination!);
    setMapReady(true);
  }
  const handleDestination=(destination:google.maps.LatLng)=>{
    setDestination(destination);
  }
  const handleStart=(start:google.maps.LatLng)=>{
    setStart(start);
  }
  const renderMapsSearchBar = ()=>{
    if(mapReady)
      return(<SearchItinary map={map!} handleStart={handleStart} handleDestination = {handleDestination} handleClick={handleClick}/> )
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


  
  