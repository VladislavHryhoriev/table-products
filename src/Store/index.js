import { combineReducers, createStore } from "redux";
import { searchReducer } from "./searchReducer";
import { productsReducer } from "./productsReducer"

const rootReducer = combineReducers({
	searchReducer,
	productsReducer
})

export const store = createStore(rootReducer);