Template.index_notifications_list.helpers({
  counter:function() {
    count=1;
    return count;
  },
  synapse: function() {
    return this.contents[0].message;
  },
  time: function() {
    time = this.contents[0].created_at.toString().split(/\s+/).slice(4,5);
    return time;
  }
});
