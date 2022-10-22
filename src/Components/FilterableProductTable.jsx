import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = () => {
	return (
		<div className="FilterableProductTable">
			<SearchBar />
			<ProductTable />
		</div>
	);
};

export default FilterableProductTable;