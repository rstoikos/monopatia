      


  function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var start = new google.maps.LatLng(39.3280792, 23.1506217);
  var end = new google.maps.LatLng(39.3876414, 23.174311);

  var mapOptions = {
    zoom: 16,
    center: start
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsDisplay.setMap(map);

function calcRoute() {
  var request = {
    origin: start,
    destination: end,
    travelMode: 'WALKING'
  };
  directionsService.route(request, function(result, status) {
    
      directionsDisplay.setDirections(result);
    
  });

}
calcRoute(); /*  */
}


  //not needed 
  //    
 //initMap();

    //src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD-GWLI8Oec4D58yOrF1PWp9QkjrSdrngM&callback=initMap"
    
    
