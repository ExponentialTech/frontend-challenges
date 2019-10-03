import React from 'react';
import ESGScore from './esg-score'


const TableRow = (props) => {
	
	//put these here so they are converted to strings before regex is done on them
	const co21Adjusted =  props.impact["CO2 Scope 1 & 2 Adjusted"].toString()
	const co21RevAdjusted = props.impact["CO2 Scope 1 & 2 Revenue Adjusted"].toString();
	const co23Adjusted = props.impact["CO2 Scope 3 Adjusted"].toString();
	const co23RevAdjusted = props.impact["CO2 Scope 3 Revenue Adjusted"].toString();
	return(
		<tr className="regular-row">
			<td className="company-name regular-cell">{props.impact["Company Name"]}</td>
			<td className="regular-cell">{props.impact["ISIN"]}</td>
			<td className="regular-cell">{props.impact["Total Revenue"]}</td>
			<td className="regular-cell">{props.impact["Company Market Cap"]}</td>

			<td className="border-gap managers-row regular-cell">{props.impact["Women Managers"]}</td>
			<td className="regular-cell">{props.impact["Women Employees"]}</td>

			<td className="border-gap regular-cell">{co21Adjusted.replace(/[{()}]/g, '')}</td>
			<td className="regular-cell">{co21RevAdjusted.replace(/[{()}]/g, '')}</td>

			<td className="border-gap regular-cell">{co23Adjusted.replace(/[{()}]/g, '')}</td>
			<td className="regular-cell">{co23RevAdjusted.replace(/[{()}]/g, '')}</td>
			<ESGScore score={props.impact["ESG Score"]}/>

		</tr>
	)
}

export default TableRow;