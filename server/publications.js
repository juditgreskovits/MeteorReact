Meteor.publish('ratings', function(filter) {

	return Ratings.find();
});
