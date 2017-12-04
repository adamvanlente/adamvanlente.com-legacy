// Namespace for the coding challenge.  Not needed, but it is habit for me to
// create a safe environment for naming variables and functions.
var um = {};

um.populationDataUrl = 'http://adamvanlente.com/urbanmapping/population.json';

um.boundsForGoogleMaps = new google.maps.LatLngBounds();
um.googlePolygonHolder = [];
um.googlePolygonState = true;
um.largestPopulation = 0;
// How many states to count for Bar Chart.  Must be > 0 and <= 51.
um.numberOfStatesToChart = 10;

// Could be done cleaner with jQuery, no need to include that library.
um.getJsonObject = function(url) {
  var xmlRequest = new XMLHttpRequest();
  xmlRequest.open("GET",url,false);
  xmlRequest.send(null);
  return JSON.parse(xmlRequest.responseText);
};

// Create an object from the JSON.
um.populationData = um.getJsonObject(um.populationDataUrl);

// Initialize the actual map and append it to the document.
um.initGoogleMap = function() {
  var mapOptions = {
    center: new google.maps.LatLng(37.7833, -122.4167),
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    zoomControl: true
  };
  um.googleMap = new google.maps.Map(document.getElementById("google_map"), mapOptions);
};

// Using the um.populationData object, draw polygon(s) for each state.
um.drawGooglePolygons = function() {
  var data = um.populationData.features;
  for (var i = 0; i < data.length; i++) {
    var coords = data[i].geometry.coordinates;
    var name = data[i].properties.name;
    var population = data[i].properties.population;
    um.largestPopulation =
        population > um.largestPopulation ? population : um.largestPopulation;
    var type = data[i].geometry.type;
    // Decide whether we're dealing with one or more Polygons.  For
    // the sake of this challenge I'm not worried about cases other than
    // Polygon & MultiPolygon.
    if (type == 'Polygon') {
      var polygon = um.createGooglePolygon(coords, name, population);
      polygon.setMap(um.googleMap);
    } else if (type == 'MultiPolygon') {
      for (var j = 0; j < coords.length; j++) {
        var multiPolygon = um.createGooglePolygon(coords[j], name, population);
        multiPolygon.setMap(um.googleMap);
     }
    }
  }
};

// Pass in coordinates and return a polygon.  Inside this function
// also create a click listener for each polygon to display state
// name and population.
um.createGooglePolygon = function(coords, name, population) {
  var coordinates = um.googlePolygonCoords(coords);
  var polygon = new google.maps.Polygon({
      paths: coordinates,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
  // More display friendly format for population.
  population = um.formatPopulation(population);
  // Click listener for polygon - displays state name and population.
  google.maps.event.addListener(polygon, 'click', function() {
      var div = document.getElementById('population_map_data');
      div.innerHTML = 'The population of ' + name + ' is ' + population + '.';
    });
  // Push polygon to a global holder - helps toggle polygons on/off.
  um.googlePolygonHolder.push(polygon);
  return polygon;
};

// Pass in an array of coordinates and return a set formatted for the
// Google maps api.
um.googlePolygonCoords = function(coords, coordinates) { 
  coordinates = coordinates || [];
  for (var i = 0; i < coords.length; i++) {
   if (typeof coords[i][0] == 'object') {
     um.googlePolygonCoords(coords[i], coordinates);
   } else {
    var lat = coords[i][1];
    var lon = coords[i][0];
    var point = new google.maps.LatLng(lat, lon);
    um.boundsForGoogleMaps.extend(point);
    coordinates.push(point);
   }
  }
  return coordinates;
};

// Initializing function for the page.
um.initialize = function() {
  // Load Google Map.
  um.initGoogleMap();
  // Create polygons for the Google Map
  um.drawGooglePolygons();
  um.googleMap.fitBounds(um.boundsForGoogleMaps);
  um.buildChartData();
  um.addPieChart();
};

// Toggle the visibility of the polygons
um.toggleGooglePolygons = function() {
 var toggleButton = document.getElementById('poly_toggle');
 for (var i = 0; i < um.googlePolygonHolder.length; i++) {
  var polygon = um.googlePolygonHolder[i];
  if (um.googlePolygonState) {
    polygon.setMap(null);
    toggleButton.innerHTML = 'show polygons';
  } else {
    polygon.setMap(um.googleMap);
    toggleButton.innerHTML = 'hide polygons';
  }
 }
 um.googlePolygonState = !um.googlePolygonState;
};

// Using the populationData object, create a new object that will
// be easier to sort for a bar chart.
um.buildChartData = function() {
  var data = um.populationData.features;
  um.populationDataSimple = [];
  for (var i = 0; i < data.length; i++) {
    var name = data[i].properties.name;
    var population = data[i].properties.population;
    // Create a percentage, relative to the largest population number
    // that can be used to create a display element.
    var percentage = population/um.largestPopulation;
    percentage = (percentage * 100).toFixed(2);
    item = {'population': population,
            'percentage': percentage,
            'name' : name};        
    um.populationDataSimple.push(item);
  }
  um.displayChartData();
};

// Create a bar chart to display the population of a specified
// number of states.
um.displayChartData = function() {
  // Sort the list from largest to smallest population.
  um.populationDataSimple.sort(
    function(a,b){return b.population - a.population});
  // This is for our pie chart.
  um.populationForPieChart = [];
  var div = document.getElementById('population_bar_chart');
  for (var j = 0; j < um.numberOfStatesToChart; j++) {
    var barClass = j % 2 == 0 ? 'evenBar' : 'oddBar';
    var entry = um.populationDataSimple[j];
    if (j < 10) {
      um.populationForPieChart.push(entry); 
    }
    var name = entry.name;
    var population = entry.population;
    // More display friendly format for population.
    population = um.formatPopulation(population);
    var percentage = entry.percentage;
    var span = document.createElement('span');
    var label = document.createElement('label');
    label.innerHTML = name + ': ' + population;
    label.style.width = percentage + '%';
    label.className = barClass;
    span.appendChild(label);
    div.appendChild(span);
  } 
};

// Turn a number like 1000 into 1,000.
um.formatPopulation = function(num) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
};

// Function for adding NVD3 pie chart.
um.addPieChart = function() {
  nv.addGraph(function() {
      // Define size of pie chart.
      var width = 500,
          height = 500;

      var chart = nv.models.pieChart()
          .x(function(d) { return d.name })
          .y(function(d) { return d.population })
          .color(d3.scale.category10().range())
          .width(width)
          .height(height);

        d3.select("#pie_chart")
            .datum(um.populationForPieChart)
          .transition().duration(1200)
            .attr('width', width)
            .attr('height', height)
            .call(chart);
      chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
      return chart;
  });
};
