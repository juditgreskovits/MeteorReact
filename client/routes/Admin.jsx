const {
  History
} = ReactRouter;

Admin = React.createClass({

	mixins: [ReactMeteorData, History],

  getMeteorData() {

    return {
      authenticated : Meteor.userId() !== null
    }
  },

  authenticate() {

    if (!this.data.authenticated) {
      this.history.pushState(null, '/login');
    }
  },

  componentWillMount() {

    this.authenticate();
  },

  componentDidUpdate(prevProps, prevState) {

    this.authenticate();
  },

	render() {

		const style = {
			paddingTop: '20px'
		}

		return (
			<div>

				<LogoutComponent/>

				<div style={style}>
         	{this.props.children}
        </div>

    </div>
		);
	}
});
