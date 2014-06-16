Template.index_search.rendered = function(){
  
   $('#calendar').fullCalendar({
        // put your options and callbacks here
    });
    
    $(function () {
    
        var colors = Highcharts.getOptions().colors;
        var categories =[];
        for (var i = 0; i < 24; i++) {
            categories.push(i);
          }
            name = 'Appointment Chart';

    
    
        // Build the data arrays
        var browserData = [];
        var versionsData = [];
        for (var i = 0; i < categories.length; i++) {
    
            // add browser data
            browserData.push({
                name: categories[i],
                y: 1,
                color: Highcharts.getOptions().colors[i]
            });
    
            // add version data
            for (var j = 0; j < 3; j++) {
                var brightness = 0.2 ;
                versionsData.push({
                    name: j*20 + 'minute to' + (j+1)*20 + 'minutes' ,
                    y: 1,
                    color: Highcharts.getOptions().colors[j]
                });
            }
        }
    
        // Create the chart
        $('#highcharts').highcharts({
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Browser market share, April, 2011'
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
        	    valueSuffix: '%'
            },
            series: [{
                name: 'Browsers',
                data: browserData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: 'Versions',
                data: versionsData,
                size: '60%',
                //innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;
                    }
                }
            }]
        });
    });
    

    
};
