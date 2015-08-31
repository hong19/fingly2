
Router.configure({
	//set the default allplication layout
	//for special condtion, use this.layout("ApplicationLayout");
	layoutTemplate: "ApplicationLayout"
});

Router.route('/', function(){
	this.render("Header", { to: 'header'} );
	this.render("ContactListMain", { to: 'main_region' });
});