Template.index_search.rendered = function() {

	$('#calendar').fullCalendar({
		// put your options and callbacks here
	});

	var chart = AmCharts.makeChart("chartdiv", {

		"type": "pie",
    "theme": "light",
    "dataProvider": [
			{"title": "1","value": 1}, 
		  {"title": "2","value": 1}, 
		  {"title": "3","value": 1}, 
		  {"title": "4","value": 1}, 
		  {"title": "5","value": 1}, 
		  {"title": "6","value": 1}, 
		  {"title": "7","value": 1}, 
		  {"title": "8","value": 1}, 
		  {"title": "9","value": 1}, 
		  {"title": "10","value": 1}, 
		  {"title": "11","value": 1}, 
		  {"title": "12","value": 1},
		],
    "titleField": "title",
    "valueField": "value",
    "labelRadius": 5,
    "radius": "42%",
    "innerRadius": "60%",
    "labelText": "[[title]]"
		});
};
