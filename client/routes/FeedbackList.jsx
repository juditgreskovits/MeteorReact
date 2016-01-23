const {
	State,
	History
} = ReactRouter;

FeedbackList = React.createClass({

	mixins: [ReactMeteorData, State, History],

	getMeteorData() {

		const ratingsSubHandle = Meteor.subscribe('ratings');
		const loading = !ratingsSubHandle.ready();

		return {
			ratings: Ratings.find().fetch(),
			loading: loading
		}
	},

	renderRatings() {

		const ratings = this.data.ratings;

		return ratings.map((rating, index) => {

			const ratingId = rating._id;
			const ratingRating = rating.rating;
			const ratingDescription = rating.description;

			return (
				<FeedbackItemComponent key={ratingId} ratingId={ratingId} ratingIndex={index} rating={ratingRating} description={ratingDescription} />
			)
		});
	},

	render() {

		const loading = this.data.loading;

		if(loading) {
			return <Loading />
		}

		const ratings = this.renderRatings();

		return (
			<div>
				{ratings}
		  </div>
		);
	}
});
