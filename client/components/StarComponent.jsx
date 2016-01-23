StarComponent = React.createClass({

	getInitialState() {

		return {
			style : {
        polygon : {
  				stroke: 'orange',
          fill: 'yellow',
          strokeWidth:'1'
        }
			},
      options : {
  			innerRadius : 5,
  			outerRadius : 12,
        points : 5
      }
		};
	},

  getOptions() {

    if(this.props.options) {
      const { innerRadius, outerRadius, points } = this.props.options;
      if(!isNaN(innerRadius) && !isNaN(outerRadius) && !isNaN(points)) {
        return this.props.options;
      }
    }
    return this.state.options;
  },

	generatePolygon(innerRadius, outerRadius, points) {

		const starAngle = Math.PI/points;
		const l = points*2;

		let polygon = [];
		let angle = Math.PI;

		for (let i=0; i<l; i++) {
			const hypotenuse = i%2 === 0 ? outerRadius : innerRadius;
			const x = Math.sin(angle) * hypotenuse + outerRadius;
			const y = Math.cos(angle) * hypotenuse + outerRadius;
			polygon.push({ x: x, y: y });
			angle += starAngle;
		}
		return polygon;
	},

	render() {

		const options = this.getOptions();
    const { innerRadius, outerRadius, points } = options;
    const polygon = this.generatePolygon(innerRadius, outerRadius, points);
    const style = this.props.style ? this.props.style : this.state.style;

    let polygonPoints = polygon.map(function(point) {
			return point.x + ', ' + point.y + ' ';
		});

		return (
			<svg style={style} width={outerRadius*2} height={outerRadius*2}>
				<polygon points={polygonPoints} style={style.polygon}/>
			</svg>
		)
	}
});
