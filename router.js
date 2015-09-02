
Router.configure({
	//set the default allplication layout
	//for special condtion, use this.layout("ApplicationLayout");
	layoutTemplate: "ApplicationLayout"
});

Router.route('/', function(){
	this.render("Header", { to: 'header'} );
	this.render("ContactListMain", { to: 'main_region' });
});

Router.route('/single-contact/:contact_id', function(){
	this.render("Header", { to: 'header'} );
	var contact = Contacts.findOne( { _id: this.params.contact_id });
	this.render( "SingleContactMain" , { to: 'main_region', data: contact });
});
