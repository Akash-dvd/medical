Template.form_wizard.nam = function () {
    return Doctor.findOne();
};
Template.form_wizard.rendered = function() {
	$("#wizard").steps();
}; 
