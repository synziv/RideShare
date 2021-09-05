import React, { createRef, useEffect, useRef, useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapViewDirections from 'react-native-maps-directions';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = '…';
let map: any;
//https://stackoverflow.com/questions/44094183/how-can-i-show-a-route-map-from-the-current-location-to-some-destination-some-a
const Home =(props:any)=>{
    const mapRef: React.MutableRefObject<null | HTMLElement> = useRef(null); 
    const [mapReady, setMapReady] = useState(false);

      
    const mapStyles = {
        width: '100%',
        height: '100%',
    };

    const initMap=(mapRef:any)=> {
        if(mapReady){
            console.log("/////////////////////////////////maps");
            console.log(mapRef);
       
           const directionsService = new google.maps.DirectionsService();
           const directionsRenderer = new google.maps.DirectionsRenderer();
           const map = new google.maps.Map(
               mapRef.current,
               {
                 zoom: 4,
                 center: { lat: -25.344, lng: 131.036 },
               }
             );
       
           directionsRenderer.setMap(map);
           calculateAndDisplayRoute(directionsService, directionsRenderer);
       
           
           
           return directionsRenderer.getMap();
        }
        return null
      }
    
        return(
            <div id="map" ref={element => {
                console.log(element)
                mapRef.current = element;
                if(element!=null)
                    setMapReady(true);
                }}>
                {initMap(mapRef)}
            </div>
            
        )
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyACPW9eejqQaNzOzbNuh8wEx_Wjg1wnRo0'
  })(Home);
  

  
  function calculateAndDisplayRoute(
    directionsService: google.maps.DirectionsService,
    directionsRenderer: google.maps.DirectionsRenderer
  ) {
    var haight = new google.maps.LatLng(37.7699298, -122.4469157);
    var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);
    directionsService
      .route({
        origin: haight,
        destination: oceanBeach,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to "));
  }