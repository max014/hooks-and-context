import React, {useContext, useEffect} from 'react';
import { Card } from 'antd';
import ShopContext from '../context/shop-context';

const cart = (props) => {
	const context = useContext(ShopContext);

	useEffect(() => {
		console.log(context)
	},[]);

	const cart = context.cart.map((product, index) => {
		return <div key={index} onClick={() => context.removeFromCart(index)}>{product.title}</div>
	})
	return (
		<Card>
			{cart}
		</Card>
	)
};

export default cart;
