Template.ContactDetailsMain.helpers({
	edit_mode: function(){
		return Session.get("editMode");
	}

});

Template.ContactDetailsMain.events({
	"click .btn-edit": function(event){
		Session.set("editMode", !Session.get("editMode") );		
	},
	
	//form submit also trigger the click event on tyep="submit"
	"click .btn-update": function(event){
		// Prevent default browser form submit
		event.preventDefault();

		var form_target = $('#edit_contact_form');


		Contacts.update( this._id,{
			$set: {
				firstname: form_target[0].firstname.value,
				lastname: form_target[0].lastname.value,
				sex: form_target[0].sex.value,
				phone: form_target[0].phone.value,
				email: form_target[0].email.value,
				birthday: form_target[0].birthday.value,
				facebook: form_target[0].facebook.value,
				linkedin: form_target[0].linkedin.value,
				line: form_target[0].line.value,
				wechat: form_target[0].wechat.value				
			} 
		});

		Session.set("editMode", false );
	}

});
