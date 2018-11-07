export default function list(state = [], action) {
	switch (action.type) {
		case 'ADD_LIST':
			return [action.obj];
		default:
			return state;
	}
}
