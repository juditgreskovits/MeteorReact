RatingResults = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {

		const ratingsSubHandle = Meteor.subscribe('ratings');
		const loading = !ratingsSubHandle.ready();

		return {
			ratings: Ratings.find().fetch(),
			loading: loading
		}
	},

	render() {

		const loading = this.data.loading;

		if(loading) {
			return <Loading />
		}

		const outerRadius = this.props.windowWidth/12;
		const innerRadius = outerRadius/2;

		const options = {
			outerRadius : outerRadius,
			innerRadius : innerRadius,
			points : 5
		};

		const ratings = this.data.ratings;
		let rating = 0;
		ratings.forEach(function(r) {
			rating += r.rating/ratings.length;
		});

		rating = Math.round(rating);

		return (
			<div id="home">
				<p>Collated ratings below!</p>
				<StarRatingsComponent rating={rating} options={ options } />
		  </div>
		);
	}
});
