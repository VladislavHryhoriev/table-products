import React from 'react';

const ProductRow = ({ name, price }) => {
	return (
		<tr className="ProductRow">
			<td>{name}</td>
			<td>{price}</td>
		</tr>
	);
};

export default ProductRow;