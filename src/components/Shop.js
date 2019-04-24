import React, {useContext} from 'react';
import ShopContext from '../context/shop-context';

const shop = (props) => {
	const context = useContext(ShopContext);
	const shop = context.products.map((product, index) => {
		return <div key={index} onClick={() => context.addToCart(product)}>{product.title}</div>
	});
	return (
		<div>
			{shop}
		</div>
	);
}

export default shop;