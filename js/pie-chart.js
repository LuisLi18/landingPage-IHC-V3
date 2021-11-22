google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
    ['Age Range', 'Frecuency'],
    ['18 a 23 años',      9],
    ['24 a 29 años',     12],
    ['30 a 35 años',      6],
    ['36 a 41 años',      6],
    ['42 a 47 años',      4]
]);

var options = {
    title: 'Frecuencia de uso de probadores virtuales en base a diferentes edades',
    is3D: true,
    backgroundColor: '#F6F6F6',
};

var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
chart.draw(data, options);
}