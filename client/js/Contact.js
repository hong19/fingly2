
Template.Contact.events({
	"click .btn-success": function(event){
		// Prevent default browser form submit
		event.preventDefault();

		var form_target = $('#edit_contact_form');

		Contacts.update( this._id,{
			$set: {
				firstname: form_target[0].firstname.value,
				lastname: form_target[0].lastname.value,
				phone: form_target[0].phone.value,
				email: form_target[0].email.value,
				birthday: form_target[0].birthday.value,
				edit_mode: false
			} 
		});
	}
});
