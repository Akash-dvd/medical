Meteor.publish('workplace', function() {
  return Workplace.find();
});
Meteor.publish('notifications', function() {
  return Notifications.find();
});
