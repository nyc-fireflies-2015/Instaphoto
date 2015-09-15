function printData(data) {
  var html = "";
  for(var i=0;i<50;i++) {
    var borough = data[i].borough;
    var vehicle1 = data[i].contributing_factor_vehicle_1;
    var vehicle2 = data[i].contributing_factor_vehicle_2;
    if (data[i].location && data[i].location.latitude) {
      var lat = data[i].location.latitude;
    } else {
      var lat = '';
    };
    console.log(data[i]);
    if (data[i].location && data[i].location.longitude) {
      var lng = data[i].location.longitude;
    } else {
      var lng = '';
    };
    var personsKilled = data[i].number_of_persons_killed;
    var date = data[i].date;

    html += '<div class="incident-summary"><div class="borough">Borough: ';
    html += borough;
    html += '</div><div class="vehicle1">Vehicle 1: ';
    html += vehicle1;
    html += '</div><div class="vehicle2">Vehicle 2: ';
    html += vehicle2;
    html += '</div><div class="casualties">Num of Casualties: ';
    html += personsKilled;
    html += '</div><div class="date">Date of Occurrence: ';
    html += date;
    html += '</div><input type="button" value="Find on map" data-lat="';
    html += lat;
    html += '" data-lng="';
    html += lng;
    html += '" id="locate-button"></input></div>';
  }

  return html;
}
