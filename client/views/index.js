Template.index.rendered = function () {

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Clinic 1",
            value: 12
        }, {
            label: "Clinic 2",
            value: 30
        }, {
            label: "Clinic 3",
            value: 20
        }],
        resize: true,
        colors: ['#87d6c6', '#54cdb4','#1ab394'],
    });

};

