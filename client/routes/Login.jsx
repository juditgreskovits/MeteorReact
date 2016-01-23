const {
	State,
  History
} = ReactRouter;

Login = React.createClass({

	mixins: [State, History],

	getInitialState() {

		return {
			error: false
		};
	},

	formSubmitted(e) {

		e.preventDefault();

		const username = ReactDOM.findDOMNode(this.refs.username).value.trim();
		const password = ReactDOM.findDOMNode(this.refs.password).value.trim();

		var react = this;

		Meteor.loginWithPassword(username, password, function(error) {

			if(error) {

				react.setState({error: true});
			}
			else {

				react.setState({error: false});

				react.history.pushState(null, '/feedback');
			}
		});
	},

	render() {

    const style = {
      padding: '20px',
      textAlign: 'right',
			maxWidth: '600px',
			marginLeft: 'auto',
			marginRight: 'auto'
    }

		const ctaStyle = {
			textAlign: 'center'
		}

    const inputBorder = this.state.error ? '1px solid #ff69B4' : '1px solid #cccccc';

    const inputStyle = {
      width: '66%',
			maxWidth: '600px',
		  padding: '6px 6px',
		  marginBottom: '10px',
			border: inputBorder,
		  fontSize: '14px',
			color: '#666666'
    };

    const submitStyle = {
      padding: '4px 16px 5px 16px',
      marginBottom: '10px',
      backgroundColor: '#ff69B4',
      border: '1px solid #ff69B4',
      outline: '0',
      color: '#ffffff',
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      WebkitAppearance: 'none',
			cursor: 'pointer'
    };

		return (
			<div style={style}>
				<p style={ctaStyle}>Please log in to view detailed feedback!</p>
				<form onSubmit={this.formSubmitted}>
					<div>
						<label htmlFor="username">Username: &nbsp; </label>
						<input type="text" id="username" ref="username" style={inputStyle}/>
					</div>
					<div>
						<label htmlFor="password">Password: &nbsp; </label>
						<input type="password" id="password" ref="password" style={inputStyle}/>
					</div>
					<input type="submit" style={submitStyle}/>
				</form>
			</div>
		)
	}
});
