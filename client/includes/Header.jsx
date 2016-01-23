const {
	Link
} = ReactRouter;

Header = React.createClass({

	render() {

		const style = {
			position: 'fixed',
			top: 0,
			width: '100%',
			zIndex: '1000',
			paddingTop: '18px',
			paddingBottom: '18px',
			textAlign: 'center',
			backgroundColor: '#ffffff',
			borderBottom: '1px solid #cccccc'
		};

		const linkStyle = {
			margin: '12px 8px',
			fontSize: '12px',
			fontWeight: 'bold',
			textDecoration: 'none',
			textTransform: 'uppercase',
			color: '#666666'
		};

		const activeLinkStyle = {
			color: '#333333',
			borderBottom: '3px solid #ff69B4'
		};

		return (
			<div style={style}>
				<Link style={linkStyle} activeStyle={activeLinkStyle} to="/entry">Rate!</Link>
				<Link style={linkStyle} activeStyle={activeLinkStyle} to="/results">Results</Link>
				<Link style={linkStyle} activeStyle={activeLinkStyle} to="/feedback">Feedback</Link>
		  </div>
		);
	}
});
