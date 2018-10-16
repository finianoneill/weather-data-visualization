$.get('../Resources/city_weather_info.csv', function(data) {

// start the table
var html = '<table">';

// split into lines
var rows = data.split("\n");

// parse lines
rows.forEach( function getvalues(ourrow) {

// start a table row
html += "<tr>";

// split line into columns
var columns = ourrow.split(",");

html += "<td>" + columns[1] + "</td>";
html += "<td>" + columns[2] + "</td>";
html += "<td>" + columns[3] + "</td>";
html += "<td>" + columns[4] + "</td>";
html += "<td>" + columns[5] + "</td>";
html += "<td>" + columns[6] + "</td>";
html += "<td>" + columns[7] + "</td>";

// close row
html += "</tr>";
})
// close table
html += "</table>";

// insert into div
$('#CSVTable').append(html);

});