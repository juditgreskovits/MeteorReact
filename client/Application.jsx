const {
	State,
} = ReactRouter;

Application = React.createClass({

	mixins: [State],

	componentWillMount() {

		this.onWindowResize();
	},

	componentDidMount() {

		window.addEventListener('resize', this.onWindowResize);
	},

	onWindowResize() {

		const windowWidth = Math.min(window.innerWidth, 600);
		this.setState({ windowWidth : windowWidth });
	},

	getChildrenWithProps(props) {

		const childrenWithProps = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, props);
    });

    return childrenWithProps;
	},

	render() {

		const style = {
			paddingTop: '60px',
			textAlign: 'center'
		};

		const windowWidth = this.state.windowWidth;
		const childrenWithProps = this.getChildrenWithProps({ windowWidth : windowWidth });

		return (
			<div>

				<Header/>

				<div style={style}>
         	{childrenWithProps}
        </div>

		  </div>
		);
	}
});
