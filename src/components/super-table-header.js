import React from 'react';
import '../styles/table.scss';


const SuperTableHeader = (props) => {

	return (
		<th colSpan={props.text.length > 0 ? 2 : 1} className={props.text.length > 0 ? "super-header" : ""}>{props.text}</th>
	)
}

export default SuperTableHeader