import React from 'react';
import '../styles/table.scss';


const TableHeader = (props) => {


	return (
		<th className={`${props.classString.toLowerCase().replace(/\s/g, "")} regular-header`} onClick={props.onSort}>
			{props.secondLineText ? props.text.split(" ")[0] : props.text}
			{props.secondLineText ? <div>{props.secondLineText}</div>: null}

		</th>
	)

}

export default TableHeader;