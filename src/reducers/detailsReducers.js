export default function itemDetails(state = [], action) {
	switch (action.type) {
		case 'DETAIL':
			return [action.item];
		default:
			return state;
	}
}
