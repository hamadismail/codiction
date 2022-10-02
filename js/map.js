/*************************************************************
				google map js activation
**************************************************************/
google.maps.event.addDomListener(window, "load", init);

function init() {
  var mapOptions = {
    zoom: 11,
    scrollwheel: false,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(23.829445, 90.566594),

    styles: [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#444444",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#eff1f5",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 45,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#ddd" /* Map body color */,
          },
          {
            visibility: "on",
          },
        ],
      },
    ],
  };

  var mapElement = document.getElementById("map");
  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(23.829445, 90.566594),
    map: map,
    title: "Dhaka!",
    animation: google.maps.Animation.BOUNCE,
    icon: "images/map-marker.png",
  });
}
