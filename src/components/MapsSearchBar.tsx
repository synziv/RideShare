import React, { useRef, useState } from 'react';

interface IMapsSearchBarProps{
  map: google.maps.Map
}

const MapsSearchBar =(props: IMapsSearchBarProps)=>{
  const searchBarRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);

  // Create the search box and link it to the UI element.
  const input = searchBarRef.current as HTMLInputElement;
  const searchBox = new google.maps.places.SearchBox(input);
  props.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

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


  