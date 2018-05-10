function initMap()
{
  var initialLocation = {lat: 40.7291, lng: -73.9965};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: initialLocation,
    mapTypeId:'satellite'
  });
  var marker = new google.maps.Marker({
    position: initialLocation,
    map: map
  });

  map.data.loadGeoJson('https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson');

  map.data.setStyle(function(feature){

    var color = 'green';
    if(feature.getProperty('BoroCD')>=100 && feature.getProperty('BoroCD')<=120)
    {
      color = 'yellow';
    }
    if(feature.getProperty('BoroCD')>=200 && feature.getProperty('BoroCD')<=220)
    {
      color = 'red';
    }
    if(feature.getProperty('BoroCD')>=300 && feature.getProperty('BoroCD')<=320)
    {
      color = 'magenta';
    }
    if(feature.getProperty('BoroCD')>=400 && feature.getProperty('BoroCD')<=420)
    {
      color = 'blue';
    }
    if(feature.getProperty('BoroCD')>=501 && feature.getProperty('BoroCD')<=520)
    {
      color = 'cyan';
    }
    return ({
      fillColor: color,
      strokeWeight: 2,
      fillOpacity: 0.3
    });
  });
}
