# Earthquake Data Visualization Project

This project, designed for the United States Geological Survey (USGS), aims to visually represent earthquake data to educate the public and assist government organizations. By leveraging the Leaflet JavaScript library, this tool visualizes real-time seismic activity data updated every 5 minutes. This visualization not only highlights the locations and magnitudes of earthquakes but also their depths, thereby aiding in understanding seismic activity in relation to tectonic movements.

Project Overview
The visualization includes two main components:

Earthquake Visualization: Plotting earthquakes using real-time data to show magnitude by marker size and depth by color.
Tectonic Plate Visualization: Illustrating the relationship between tectonic plates and earthquake occurrences.

Part 1: Earthquake Visualization

Data Source
Earthquake data is sourced from the USGS GeoJSON Feed. This project utilizes the "All Earthquakes from the Past 7 Days" dataset. Access to the USGS GeoJSON here: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

Setup
Create an HTML file as the visualization canvas.
Link to Leaflet's CSS and JavaScript files for mapping capabilities.

Map Initialization
Initialize a Leaflet map with a global view suitable for plotting earthquake data.
Add a tile layer to provide geographical context.

Data Visualization
Fetch earthquake data using the provided USGS GeoJSON URL.
Use longitude and latitude from the data to plot markers on the map.
Scale marker sizes according to the earthquake's magnitude and color them based on depth.
Integrate popups to display detailed information about each earthquake on marker click, such as location, magnitude, depth, and time.

Legend Creation
Add a legend to the map to explain the scaling of marker sizes and the color gradient of depths.

Part 2: Advanced Visualization
Additional Data Source
Plot data on tectonic plates from Fraxen's GitHub repository.

Enhanced Features
Multiple Base Maps: Include options such as satellite and street maps for different visual perspectives.
Data Layer Control: Implement toggle controls for tectonic plate data layers, allowing users to customize their view.

Steps to Implement Advanced Features
Fetch and integrate the tectonic plates dataset.
Extend the map initialization to include multiple base maps.
Plot tectonic plates with a distinct visual style.
Add controls for users to switch between different data visualizations and base maps.


This README provides a structured outline for the Earthquake Visualization Project, ensuring that USGS can effectively utilize the tool for educational and operational purposes.






