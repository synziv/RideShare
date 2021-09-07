import React, { useEffect, useRef, useState } from 'react';

interface IMapsSearchBarProps{
  map: google.maps.Map
}

const MapsSearchBar =(props: IMapsSearchBarProps)=>{
  const searchBarRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);

  // Create the search box and link it to the UI element.
  const input = searchBarRef.current as HTMLInputElement;
  const searchBox = new google.maps.places.SearchBox(input);
  
  let markers: google.maps.Marker[] = [];
  const bounds = new google.maps.LatLngBounds();
  let places: any[] | undefined = [];

  useEffect(() => {
    
    props.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
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
      generatePlaces();
      });
  }
  const generatePlaces = ()=>{
    if(typeof places !== 'undefined'){
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
        const icon = {
          url: place.icon as string,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        }; 
  
        // Create a marker for each place.
        // markers.push(
        //   new google.maps.Marker({
        //     map,
        //     icon,
        //     title: place.name,
        //     position: place.geometry.location,
        //   })
        // );
  
        // if (place.geometry.viewport) {
        //   // Only geocodes have viewport.
        //   bounds.union(place.geometry.viewport);
        // } else {
        //   bounds.extend(place.geometry.location);
        // }
      });
      props.map.fitBounds(bounds);
    };
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
      <input
      id="pac-input"
      className="controls"
      type="text"
      placeholder="Search Box"
      ref={element=>searchBarRef.current = element}
    />
    </div>

  )
}


export default MapsSearchBar;
  