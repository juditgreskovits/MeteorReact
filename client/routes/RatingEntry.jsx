const {
	Navigation,
	State,
	History
} = ReactRouter;

RatingEntry = React.createClass({

	mixins: [Navigation, State, History],

	onStarClick(rating) {

		this.setState({
			rating : rating
		});
	},

	onSubmit() {

		const rating = this.state.rating;
		const feedback = ReactDOM.findDOMNode(this.refs.feedbackInput).value.trim();

		const react = this;

		if(rating) {
			Meteor.call('enterRating', rating, feedback, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
				react.history.pushState(null, '/results');
			});
		}
	},

	render() {

		const style = {
			width: '86%',
			maxWidth: '600px',
		  padding: '12px 12px',
		  marginBottom: '20px',
			border: '1px solid #cccccc',
		  fontSize: '14px',
			color: '#666666',
      resize: 'none'
    }

		const outerRadius = this.props.windowWidth/12;
		const innerRadius = outerRadius/2;

		const options = {
			outerRadius : outerRadius,
			innerRadius : innerRadius,
			points : 5
		};

		return (
			<div>
				<p>Select the number of stars and submit!</p>
				<StarRatingsComponent ref={"starRatings"}
					rating={0}
					interactive={true}
					onStarClick={this.onStarClick}
					options={ options } />
					<div>
						<textarea ref="feedbackInput" style={style} rows="5" placeholder="Add your feedback (optional)"></textarea>
					</div>
				<ButtonComponent onClick={this.onSubmit}>Submit</ButtonComponent>
		  </div>
		);
	}
});
