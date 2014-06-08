Meteor.publish('workplace', function() {
  return Workplace.find();
});
