// Define the tile layer for the street map
let streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Define the tile layer for the satellite map
let satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Define the tile layer for the outdoor map
let outdoorsLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});

// Create a base maps object with the street and topographic layers
let baseMaps = {
    "Street": streetLayer,
    "Satellite": satelliteLayer,
    "Outdoors": outdoorsLayer
};

// Add the street layer as the default layer
streetLayer.addTo(myMap);

// Define the URL for the additional GeoJSON data
let additionalGeoData = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

// Perform a GET request to the query URL for the additional GeoJSON data
d3.json(additionalGeoData).then(function (additionalData) {
    // Create a layer group for the additional GeoJSON data
    let additionalGeoJsonLayer = L.geoJson(additionalData);

    // Add tectonic plates layer to control layer
    let overlayMaps = {
        "Tectonic Plates": additionalGeoJsonLayer
    };

    // Create a control layer with the base maps and overlay maps
    L.control.layers(baseMaps, overlayMaps).addTo(myMap);

    // Add the tectonic plates layer to the map initially
    additionalGeoJsonLayer.addTo(myMap);


});
