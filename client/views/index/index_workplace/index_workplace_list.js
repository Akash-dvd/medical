Template.index_workplace_list.helpers({
  name: function() {
    //var a = document.createElement('a');
    //a.href = this.name;
    //return a;
    return this.name;
  }
});


Template.index_workplace_list.rendered = function () {
    $("span.pie").peity("pie", {
        fill: ['#1ab394', '#d7d7d7', '#ffffff']
    })
    $(".bar-colours-1").peity("bar", {
        fill: ['#1ab394', '#d7d7d7', '#ffffff']
})

};
