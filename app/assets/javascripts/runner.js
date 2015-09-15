function initMap(latitude, longitude) {
  var myLatLng = {lat: latitude, lng: longitude};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: true,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
}

$(document).ready(function() {
  initMap(40.733275, -73.9598257);

  $('#button').on('click', function() {
    $(this).hide();
    $.get("https://data.cityofnewyork.us/resource/h9gi-nx95.json")
    .then(function(e) {
      console.log(e);

      var dataHTML = printData(e);
      $('#list').append(dataHTML);
    });
  });

  $(document).on('click', '#locate-button', function(e) {
    var latitude = parseFloat(e.target.dataset.lat);
    var longitude = parseFloat(e.target.dataset.lng);
    initMap(latitude, longitude);
  });
});
