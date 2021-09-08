export function calculateAndDisplayRoute(
    directionsService: google.maps.DirectionsService,
    directionsRenderer: google.maps.DirectionsRenderer,
    startLocation:google.maps.LatLng,
    destinationLocation:google.maps.LatLng
  ) {
    if(!isUndefined(startLocation) && !isUndefined(destinationLocation)){
      const start = new google.maps.LatLng(startLocation.lat() , startLocation.lng());
      const destination = new google.maps.LatLng(destinationLocation.lat(), destinationLocation.lng());

      directionsService
      .route({
        origin: start,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to "));
    }


  }
  const isUndefined=(x: any)=>{
    if(!x || x==null || typeof x == 'undefined')
      return true;
    return false;
  }