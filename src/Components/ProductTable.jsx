import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import { useSelector } from 'react-redux';

const ProductTable = () => {
	const products = useSelector(state => state.productsReducer.products);
	const { filterText, inStockOnly } = useSelector(state => state.searchReducer);

	let lastCategory = null;

	const categories = products.reduce((arr, product) => {
		if (product.name.indexOf(filterText) === -1 || (!product.stocked && inStockOnly)) {
			return arr;
		}
		if (product.category !== lastCategory) {
			arr.push(
				<ProductCategoryRow
					category={product.category}
					key={product.category}
				/>
			);
		}
		arr.push(
			<ProductRow
				name={product.name}
				price={product.price}
				key={product.name}
			/>
		)

		lastCategory = product.category;

		return arr;
	}, []);

	return (
		<table className="ProductTable">
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{categories}
			</tbody>
		</table>
	);
};

export default ProductTable;