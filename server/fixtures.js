if(Ratings.find().count() === 0) {

	var ratings = [
		{rating : 3, description : 'Cras venenatis lacus nec magna commodo, sed convallis nibh convallis. Nunc eget ipsum semper mauris auctor fermentum. Sed fermentum lacinia neque non congue. Fusce rhoncus sollicitudin fringilla. Cras tempus dui ut nulla aliquet hendrerit. Pellentesque nec odio sapien. Vivamus sodales mollis elit quis fringilla.'},
		{rating : 5, description : 'Cras porta ligula non sapien gravida rhoncus. Mauris tristique aliquam mattis. Morbi nulla ligula, volutpat sed ullamcorper in, cursus sed eros. Nulla facilisi. Fusce leo libero, aliquet a consectetur quis, gravida a urna. Fusce lobortis lorem at turpis vulputate egestas. Nam eleifend tellus consequat, volutpat dui ut, posuere neque.'},
		{rating : 4, description : 'Vestibulum a efficitur turpis, in lobortis est. Sed vel dignissim felis, at faucibus enim. Curabitur fringilla nec ex et scelerisque. Vivamus vestibulum imperdiet urna, quis sollicitudin libero. Nam ipsum erat, vehicula non lacinia a, commodo at nisi. Fusce aliquam varius nulla. Donec hendrerit et eros efficitur vulputate.'}
	];

	for( var i = 0; i< ratings.length; i++) {

		var rating = ratings[i];
		Ratings.insert(rating);
	}
}

if(Meteor.users.find().count() < 1) {
     Accounts.createUser({username: 'meteor', password: 'react'});
}
