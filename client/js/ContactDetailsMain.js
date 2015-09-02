Template.ContactDetailsMain.helpers({
	edit_mode: function(){
		return Session.get("editMode");
	}

});

Template.ContactDetailsMain.events({
	"click .btn-edit": function(event){
		Session.set("editMode", !Session.get("editMode") );		
	},
	"submit #edit_contact_form": function(event){
		// Prevent default browser form submit
		event.preventDefault();

		Contacts.update( this._id,{
			$set: {
				firstname: event.target.firstname.value,
			} 
		});

		Session.set("editMode", false );

	}
});
