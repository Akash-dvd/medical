Template.index_workplace.helpers({
  c_Workplace: function() {
    return Workplace.find();
  }
});

Template.index_workplace.rendered = function () {
    $("span.pie").peity("pie", {
        fill: ['#1ab394', '#d7d7d7', '#ffffff']
    })
};
