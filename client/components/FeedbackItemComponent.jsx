const {
	History
} = ReactRouter;

FeedbackItemComponent = React.createClass({

	mixins: [History],

	onFeedbackClick() {

		const ratingId = this.props.ratingId;
		this.history.pushState(null, '/feedback/' + ratingId);
	},

	truncateText(text, maxCharacters) {

		if(text.length <= maxCharacters) {
			return text;
		}

		text = text.substring(0, maxCharacters);
		const lastSpaceIndex = text.lastIndexOf(' ');
		text = text.substring(0, lastSpaceIndex);
		return text + '...';
	},

	render() {

		const backgroundColor = this.props.ratingIndex % 2 === 0 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.5)'

		const style = {
			display: 'block',
			padding: '10px',
			borderBottom: '1px solid #eeeeee',
			backgroundColor: backgroundColor,
			cursor: 'pointer'
		};

		const options = {
			outerRadius : 10,
			innerRadius : 5,
			points : 5
		};

		const { ratingId, rating, description } = this.props;
		const truncatedDescription = description ? <p>{this.truncateText(description, 36)}</p> : '';

		return (
			<a style={style} onClick={this.onFeedbackClick}>
					<StarRatingsComponent rating={rating} options={options} />
					{truncatedDescription}
			</a>
		);
	}
});
