export function addList(obj) {
	return {
		type: 'ADD_LIST',
		obj
	};
}

export function itemDetails(item) {
	return {
		type: 'DETAIL',
		item
	};
}
