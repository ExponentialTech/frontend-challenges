import data from '../data.json'

export const apiMethods = {
	getImpacts: (start, end) => data.slice(start, end),
}





