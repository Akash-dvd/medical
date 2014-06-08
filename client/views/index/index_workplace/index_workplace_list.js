Template.index_workplace_list.helpers({
  name: function() {
    var a = document.createElement('a');
    a.href = this.name;
    return a.hostname;
  }
});


