import React from 'react';
import '../styles/paginator.scss';


const Paginator = (props) => {


	return(
		<div className="paginator-wrapper">
			<button onClick={props.onPrev}>PREV</button>
			<div>PAGE <span>{props.pageNumber}</span></div>
			<button onClick={props.onNext}>NEXT</button>
		</div>
	)
}

export default Paginator;