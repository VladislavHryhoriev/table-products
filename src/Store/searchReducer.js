const defaultState = {
	filterText: '',
	inStockOnly: false
}

const CHANGE_TEXT = "CHANGE_TEXT";
const CHANGE_STOCK = "CHANGE_STOCK";

export const searchReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_TEXT:
			return { ...state, filterText: state.filterText = action.text };
		case CHANGE_STOCK:
			return { ...state, inStockOnly: !state.inStockOnly };
		default: return state;
	}
}

export const changeTextAction = (text) => ({ type: CHANGE_TEXT, text })
export const changeStockAction = () => ({ type: CHANGE_STOCK })