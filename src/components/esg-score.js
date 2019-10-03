import React from 'react';
import '../styles/esg.scss';


const ESGScore = (props) => {

	return(
		<td className="border-gap">
			<div className="esg-wrapper">
				<div className="esg-text">{props.score.toFixed(2)}</div>
				<div className="esg-border"></div>
				<div className="esg-parent">
					<div style=
					{{
						opacity:Math.floor(props.score)*0.01,
						width:`${props.score}%`
					}} 
					className="esg-bar">
					</div>
				</div>
			</div>
		</td>
	)
}

export default ESGScore;