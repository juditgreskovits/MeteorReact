ButtonComponent = React.createClass({

  onButtonClick() {

    this.props.onClick();
  },

	render() {

    const style = {
      padding: '4px 16px 5px 16px',
      marginBottom: '10px',
      backgroundColor: '#ffffff',
      border: '2px solid #ff69B4',
      outline: '0',
      color: '#ff69B4',
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      cursor: 'pointer'
    };

		return (

			<button style={style} onClick={this.onButtonClick}>
				{this.props.children}
			</button>
		)
	}
});
