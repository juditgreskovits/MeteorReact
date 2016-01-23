StarRatingsComponent = React.createClass({

	getInitialState() {

		return {
      selectedStyle : {
				margin: '2px',
        polygon : {
  				stroke: '#ff69B4',
          fill: '#ff69B4',
          strokeWidth:'1'
        }
      },
      deselectedStyle : {
				margin: '2px',
        polygon : {
  				stroke: '#ff69B4',
          fill: 'white',
          strokeWidth: '2',
        }
      },
			total : 5
		};
	},

	componentWillMount() {

		const rating = this.props.rating;
		this.setState({
			rating : rating,
			resetRating : rating
		});
	},

	onStarClick(starId) {

		const rating = starId + 1;
		this.setState({
			rating : rating,
			resetRating : rating
		});
		this.props.onStarClick(rating);
	},

	onStarEnter(starId) {

		const rating = starId + 1;
		this.setState({ rating : rating });
	},

	onStarLeave(starId) {

		const resetRating = this.state.resetRating;
		this.setState({
			rating : resetRating
		});
	},

  renderStars() {

		const selectedStyle = this.props.selectedStyle ? this.props.selectedStyle : this.state.selectedStyle;
		const deselectedStyle = this.props.deselectedStyle ? this.props.deselectedStyle : this.state.deselectedStyle;
		const interactive = this.props.interactive ? this.props.interactive : false;
		const total = this.props.total ? this.props.total : this.state.total;
    const rating = this.state.rating;

    let stars = [];
    while(stars.length < total) {
      const style = stars.length < rating ? selectedStyle : deselectedStyle;
			const starId = stars.length;
      const star = interactive ?
				<a key={starId} onClick={this.onStarClick.bind(this, starId)} onMouseEnter={this.onStarEnter.bind(this, starId)} onMouseLeave={this.onStarLeave.bind(this, starId)}><StarComponent key={stars.length} options={this.props.options} style={style} /></a> :
				<StarComponent key={stars.length} options={this.props.options} style={style} />;
      stars.push(star);
    }
    return stars;
  },

	render() {

		const style = {
			margin: '10px'
		};

		if(this.props.interactive) {
			style['cursor'] = 'pointer';
		}

    const stars = this.renderStars();

		return (
			<div style={style}>
        {stars}
			</div>
		)
	}
});
