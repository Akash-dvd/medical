Meteor.publish('notifications', function() {
  return Notifications.find();
});
Meteor.publish('images', function() {
  return Images.find();
});
Meteor.publish('blood_requests', function() {
  return Blood_Requests.find();
});
Meteor.publish('health_profile', function() {
  return Health_Profile.find();
});
Meteor.publish('fake_user', function() {
  return Fake_User.find();
});
Meteor.publish('events', function() {
  return Events.find();
});
Meteor.publish('reminders', function() {
  return Reminders.find();
});
Meteor.publish('cases', function() {
  return Cases.find();
});
Meteor.publish('appointments', function() {
  return Appointments.find();
});
//Meteor.publish('users', function() {
//  return Users.find();
//});
Meteor.publish('doctor', function() {
  return Doctor.find();
});
Meteor.publish('workplace', function() {
  return Workplace.find();
});
Meteor.publish('wk_desc', function() {
  return wk_desc.find();
});
