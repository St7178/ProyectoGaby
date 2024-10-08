import React, { createContext, useEffect, useState } from 'react';
import datos_productos from '../Components/Assets/data.js';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 301; index++) {
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  
  useEffect(() => {
    fetch('http://localhost:4000/allproducts')
      .then(response => response.json())
      .then(data => setAll_Product(data))
      .catch(err => console.error("Error fetching products:", err));

    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/getcart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(err => console.error("Error fetching cart:", err));
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error("Error adding to cart:", err));
    }
  };

  const removeCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      if (localStorage.getItem('auth-token')) {
        fetch('http://localhost:4000/removedfromcart', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "itemId": itemId }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error("Error removing from cart:", err));
      }
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(product => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.precio_nuevo * cartItems[item];
        } else {
          console.warn(`Producto no encontrado para id: ${item}`);
        }
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }
  
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    datos_productos,
    cartItems,
    addToCart,
    removeCart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
