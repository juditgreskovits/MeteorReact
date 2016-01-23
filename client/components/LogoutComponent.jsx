const {
  History
} = ReactRouter;

LogoutComponent = React.createClass({

	mixins: [History],

  onLogout() {

		var react = this;

		Meteor.logout(function(error) {
			if(error){
				console.log('Meteor.logout error = ' + error);
			}
			else {
				react.history.pushState(null, '/entry');
			}
		});
	},

	render() {

    const style = {
			position: 'fixed',
			top: '0',
			width: '100%',
			zIndex: '500',
			padding: '60px 0 6px 0',
			textAlign: 'right',
			backgroundColor: '#eeeeee'
		};

		const linkStyle = {
			padding: '6px 12px',
			fontSize: '12px',
			fontWeight: 'bold',
			textTransform: 'uppercase',
			color: '#ff69B4',
      cursor: 'pointer'
		};

		return (

      <div style={style}>
        <a style={linkStyle} onClick={this.onLogout}>Log out</a>
      </div>
		)
	}
});
