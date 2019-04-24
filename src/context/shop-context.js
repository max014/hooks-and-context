import React from 'react';

export default React.createContext({
	products: [
		{id: 1, title: 'cup'},
		{id: 2, title: 'plate'},
		{id: 3, title: 'bowl'}
	],
	cart: []
})