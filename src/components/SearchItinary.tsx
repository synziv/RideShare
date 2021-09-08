import { Card, TextField } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import MapsSearchBar from './MapsSearchBar';

interface ISearchItinaryContainerProps{
  map: google.maps.Map
  handleStartId: Function
  handleDestinationId: Function
}

const SearchItinary =(props: ISearchItinaryContainerProps)=>{
 
  return (
    <div>
        <Card>
            <MapsSearchBar map={props.map} handlePlaceId={(id: any)=>{props.handleStartId(id)}}/>
            <MapsSearchBar map={props.map} handlePlaceId={(id: any)=>{props.handleDestinationId(id)}}/>
        </Card>
        
    </div>

  )
}


export default SearchItinary;
  