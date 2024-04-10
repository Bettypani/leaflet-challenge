# Earthquake Data Visualization Project

This project aims to visualize earthquake data using Leaflet, a leading open-source JavaScript library for mobile-friendly interactive maps. We'll be utilizing datasets provided by the United States Geological Survey (USGS) that are updated every 5 minutes. Our goal is to create a map that not only plots earthquakes based on their geographical coordinates but also visually represents their magnitude and depth in a meaningful way.


Dataset
The USGS provides various earthquake datasets in different formats, including GeoJSON, which is perfect for web-based visualization.
Visit the USGS GeoJSON Feed page.
Select a dataset to visualize, such as "All Earthquakes from the Past 7 Days". You will be directed to a JSON representation of the data. Use the URL of this JSON as the data source for your visualization.

Project Setup
Create a basic HTML file to serve as the canvas for your map. Include links to the Leaflet CSS and JavaScript files.

Initialize your map using Leaflet in a JavaScript file or script tag. Set a variable for your map, specifying the initial view and zoom level.

Add a tile layer to your map to display geographical features and streets.

Load the earthquake data using the dataset URL from the USGS. You can use JavaScript's fetch API or a library like jQuery to get the JSON data.

Visualize the earthquakes on the map using markers. The marker size should reflect the earthquake's magnitude, and the color should indicate its depth.

Magnitude: Earthquakes with higher magnitudes should appear larger.
Depth: Deeper earthquakes should appear in a darker color.
Include popups for each marker to provide more information about the earthquake when clicked. This could include the location, magnitude, depth, and time of the earthquake.

Add a legend to your map to explain the color coding of depths and the scaling of magnitudes.

