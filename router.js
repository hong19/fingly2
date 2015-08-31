
Router.configure({
	//set the default allplication layout
	//for special condtion, use this.layout("ApplicationLayout");
	layoutTemplate: "ApplicationLayout"
});

Router.route('/', function(){
	this.render("header", { to: 'header'} );
	this.render("contact_list_main", { to: 'main_region' });
});