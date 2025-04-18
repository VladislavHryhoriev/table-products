import React from 'react';

const ProductRow = ({ product }) => {
	return (
		<tr className="ProductRow">
			<td>{product.name}</td>
			<td>{product.price}</td>
		</tr>
	);
};

export default ProductRow;