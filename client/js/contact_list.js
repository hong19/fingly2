
Template.contact_list_main.helpers({
    contacts: function(){
    	return Contacts.find({} , { sort: {createdAt: -1 }});
    }
});

Template.contact_list_main.events({
	"submit #new_contact_form": function(event) {
		// Prevent default browser form submit
		event.preventDefault();

		//Get value from form element
		var new_contact = {
			firstname: event.target.firstname.value,
			lastname: event.target.lastname.value,
			phone: event.target.phone.value,
			email: event.target.email.value,
			birthday: event.target.birthday.value,
			createdAt: new Date(),
			edit_mode: false
		};

		// Insert a contact into the collection
		Contacts.insert( new_contact );

		// Clear form
		event.target.firstname.value = "";
		event.target.lastname.value = "";
		event.target.phone.value = "";
		event.target.email.value = "";
		event.target.birthday.value = "";
		
	},


	"click .btn-edit": function( event ){
		//Blaze.renderWithData( Template.edit_form, {}, event.currentTarget.parentNode.parentNode.parentNode );
		Contacts.update( this._id,{ 
			$set: { edit_mode:  !this.edit_mode }
		});
	},

	"click .btn-delete": function(){
		// _id is the identifier of object in mongoDB
		Contacts.remove( this._id )
	}


});

Template.contact.events({
	"click .btn-success": function(event){
		console.log("submit edit_contact_form");
		console.log( this );
		console.log( event.target );
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