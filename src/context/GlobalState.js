import React, { useState } from 'react';

import ShopContext from './shop-context';

const GlobalState = props => {
  const products = [
      {id: 1, title: 'cup'},
      {id: 2, title: 'plate'},
      {id: 3, title: 'bowl'}
    ];
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    const newCart = [...cart, product];
    setCart(newCart)
  };

  const removeFromCart = productIndex => {
    const newCart = [...cart];
    newCart.splice(productIndex, 1);
    setCart(newCart)
  };


  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );

}

export default GlobalState;
