// Create the map object
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4,
  });

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the GeoJSON data.
let geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL/
d3.json(geoData).then(function (data) {
    // Once we get a response, send the data.features object to the createFeatures function.
    

    function getColor(depth){
        if (depth > 90){
            return "#FF0000";
         }
         else if (depth > 70){
            return "#ffa500";
         }
         else if (depth > 50){
            return "#FFFF00";
         }
         else if (depth > 30){
           return "#228B22";
         }
         else if (depth > 10){
           return "#7CFC00";
         }
         else {
           return "#CBECA5";
         }
     }

    function getRadius(magnitude)
    {
        if (magnitude == 0){
            return 1;
        }
        return magnitude * 5;
    };

    function styleInfo(feature){
        return {
            // Border color
            fillColor: getColor(feature.geometry.coordinates[2]),
            weight: 1,
            fillOpacity: 0.8,
            radius: getRadius(feature.properties.mag)
        }
    };



  // Create a new choropleth layer.
  L.geoJson(data, {

  pointToLayer: function (feature, latlng){
    return L.circleMarker(latlng);
  },

  
  style: styleInfo,

  // Binding a popup to each layer
  onEachFeature: function(feature, layer) {
    layer.bindPopup(`<h3>Location: ${feature.properties.place}</h3><hr><p>Magnitude: ${feature.properties.mag}</p>`);
  }
}).addTo(myMap);


let legend = L.control({
   position: "bottomright"
});


legend.onAdd = function() {
    let div = L.DomUtil.create('div', 'info legend'),
        limits = [-10, 10, 30, 50, 70, 90],
        colors = ["#CBECA5", "#7CFC00", "#228B22", "#FFFF00", "#ffa500", "#FF0000"],
        labels = [];

    // Generate a label with a colored square for each interval
    for (let i = 0; i < limits.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colors[i] + '; width: 18px; height: 18px; float: left; margin-right: 8px; opacity: 0.7;"></i> ' +
            limits[i] + (limits[i + 1] ? '&ndash;' + limits[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);


});

