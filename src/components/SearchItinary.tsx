import { Card, TextField } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import MapsSearchBar from './MapsSearchBar';

interface IMapsSearchBarProps{
  map: google.maps.Map
}

const SearchItinary =(props: IMapsSearchBarProps)=>{
 
  return (
    <div>
        <Card>
            <MapsSearchBar map={props.map}/>
            <MapsSearchBar map={props.map}/>
        </Card>
        
    </div>

  )
}


export default SearchItinary;
  