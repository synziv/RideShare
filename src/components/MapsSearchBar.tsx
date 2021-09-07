import { TextField } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';

interface IMapsSearchBarProps{
  map: google.maps.Map
}

const MapsSearchBar =(props: IMapsSearchBarProps)=>{
  const searchBarRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);

  // Create the search box and link it to the UI element
  let searchBox:  google.maps.places.SearchBox;
  let markers: google.maps.Marker[] = [];
  const bounds = new google.maps.LatLngBounds();
  let places: google.maps.places.PlaceResult[] | undefined = [];

  const [placeId, setPlaceId] = useState<string | undefined>('');
  useEffect(() => {
    const input = searchBarRef.current as HTMLInputElement;
    searchBox = new google.maps.places.SearchBox(input);
    //props.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    addBounds_changedListener();
    iniatiateMarkers();

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    //console.log(searchBox);
    addPlaces_changedListener();
  }, []);

  const addBounds_changedListener = ()=>{
    props.map.addListener("bounds_changed", () => {
      searchBox.setBounds(props.map.getBounds() as google.maps.LatLngBounds);
    });
  }

  const addPlaces_changedListener = ()=>{
    searchBox.addListener("places_changed", () => {
      places= searchBox.getPlaces();
      if (typeof places !== 'undefined' && places.length == 0) {
        return;
      };
      // For each place, get the icon, name and location.
      console.log(places?places[0]:"")
      setPlaceId(places?places[0].place_id:"")
      });
  }


  const iniatiateMarkers = ()=>{
 // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null)
    });
    markers = [];
    
  }
  return (
    <div >
      <h1>Searchbar</h1>
      <TextField 
        id="standard-basic pac-input" 
        className="controls" 
        label="Standard" 
        inputRef={element=>{searchBarRef.current = element}}/>
    </div>

  )
}


export default MapsSearchBar;
  