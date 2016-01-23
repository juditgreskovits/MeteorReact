const {
	State,
	History
} = ReactRouter;

Feedback = React.createClass({

	mixins: [ReactMeteorData, State, History],

	getMeteorData() {

		const feedbackId = this.props.params.feedbackId;
		const ratingsSubHandle = Meteor.subscribe('ratings');
		const loading = !ratingsSubHandle.ready();

		return {
			rating: Ratings.findOne({_id:feedbackId}),
			loading: loading
		}
	},

	onBackClick() {

		this.history.pushState(null, '/feedback');
	},

	render() {

		const loading = this.data.loading;

		if(loading) {
			return <Loading />
		}

		const style = {
			padding: '20px'
		};

		const descriptionStyle = {
			maxWidth: '500px',
			marginBottom: '24px',
			marginLeft: 'auto',
			marginRight: 'auto',
			textAlign: 'left'
		};

		const starRatingOptions = {
			outerRadius : 20,
			innerRadius : 10,
			points : 5
		};

		const rating = this.data.rating;
		const ratingRating = rating.rating;
		const ratingDescription = rating.description ? rating.description : 'Looks like there\'s no more feedback here!';

		return (
			<div style={style}>
				<StarRatingsComponent rating={ratingRating} options={starRatingOptions} />
				<p style={descriptionStyle}>{ratingDescription}</p>
				<ButtonComponent onClick={this.onBackClick}>Back</ButtonComponent>
		  </div>
		);
	}
});
