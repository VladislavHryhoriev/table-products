import React from 'react';
import { useDispatch } from 'react-redux';
import { changeStockAction, changeTextAction } from '../Store/searchReducer';

const SearchBar = () => {
	const dispatch = useDispatch();

	const switchStock = () => {
		dispatch(changeStockAction());
	}

	const changeFilterText = (text) => {
		dispatch(changeTextAction(text));
	}


	return (
		<div className="SeacrhBar">
			<input type="text" placeholder='Search...' onChange={(e) => changeFilterText(e.target.value)} />
			<label htmlFor="checkBoxText">
				<input type="checkbox" id='checkBoxText' onChange={(e) => switchStock(e.target.checked)} />
				<span>Only show product in stock</span>
			</label>
		</div>
	);
};

export default SearchBar;