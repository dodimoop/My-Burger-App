import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
	<div className="BuildControl" style={classes}>
		<div className="Label" style={classes}>{props.label}</div>
		<button 
			className="Less" 
			style={classes}
			onClick={props.remove} 
			disabled={props.disabled}>Less</button>
		<button 
			className="More"
			style={classes}
			onClick={props.added}>More</button>
	</div>
)

export default buildControl