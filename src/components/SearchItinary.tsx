import { Button, Card, TextField } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import MapsSearchBar from './MapsSearchBar';

interface ISearchItinaryContainerProps{
  map: google.maps.Map
  handleStart: Function
  handleDestination: Function
  handleClick: Function
}

const SearchItinary =(props: ISearchItinaryContainerProps)=>{
 
  return (
    <div>
        <Card>
            <MapsSearchBar map={props.map} handlePlace={(x: any)=>{props.handleStart(x)}}/>
            <MapsSearchBar map={props.map} handlePlace={(x: any)=>{props.handleDestination(x)}}/>
            <Button variant="contained" color="primary" onClick={()=>{props.handleClick()}}>Primary</Button>
        </Card>
        
    </div>

  )
}


export default SearchItinary;
  