export function calculateAndDisplayRoute(
    directionsService: google.maps.DirectionsService,
    directionsRenderer: google.maps.DirectionsRenderer,
    startLocation:google.maps.places.PlaceGeometry,
    destinationILocation:google.maps.places.PlaceGeometry
  ) {
    const start = new google.maps.LatLng(startLocation.location?.lat, startLocation.location?.lng);
    const destination = new google.maps.LatLng(destinationLocation.location?.lat, destinationLocation.location?.lng);
    directionsService
      .route({
        origin: new map
        destination: destinationILocation,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to "));
  }