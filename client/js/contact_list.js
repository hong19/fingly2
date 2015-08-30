
Template.contact_list_main.helpers({
    contacts: function(){
    	return Contacts.find({});
    }
});

Template.contact_list_main.events({
	"submit .new-contact": function(event, template) {
		console.log("submit");
		// Prevent default browser form submit
		event.preventDefault();

		//Get value from form element
		var new_contact = {
			firstname: event.target.firstname.value,
			lastname: event.target.lastname.value,
			phone: event.target.phone.value,
			email: event.target.email.value,
			birthday: event.target.birthday.value
		};

		// Insert a contact into the collection
		Contacts.insert( new_contact );

		// Clear form
		event.target.firstname.value = "";
		event.target.lastname.value = "";
		event.target.phone.value = "";

	}
});