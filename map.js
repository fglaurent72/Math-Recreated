
let map;
let directionsService, directionsRenderer;
let geocoder;
let infowindow;





function initMap() {
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  geocoder = new google.maps.Geocoder();

  const coordinates = { lat:19.7025729 , lng:  -72.40510139999999 };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: coordinates,
  });

  directionsRenderer.setMap(map);

  // Add a click listener for the alert
  map.addListener("click", (e) => {
    const latLng = e.latLng;
    alert(`Latitude: ${latLng.lat()}, Longitude: ${latLng.lng()}`);
  });
}
  //window.initMap = initMap;



function placeMarker() {
  // Get the address from the input
  const address = document.getElementById('markerAddress').value;

  geocoder.geocode({ 'address': address }, (results, status) => {
    if (status === 'OK') {
      const location = results[0].geometry.location;
      new google.maps.Marker({
        map: map,
        position: location,
      });
    } else {
      alert('Error: ' + status);
    }
  });
}


function calcRoute() {
  const start = document.getElementById('origin').value;
  const end = document.getElementById('destination').value;
  const request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, (result, status) => {
    if (status === 'OK') {
      directionsRenderer.setDirections(result);
    } else {
      alert('Error: ' + status);
    }
  });
  
}
