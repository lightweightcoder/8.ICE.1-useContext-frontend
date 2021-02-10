import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

import Cart from './components/Cart.jsx';
import Items from './components/Items.jsx';
import ItemDetail from './components/ItemDetail.jsx';

const BACKEND_URL = 'http://localhost:3004';

// create empty global state for items
export const ItemsContext = React.createContext(null);

export default function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedItemIndex, setSelectedItem] = useState();

  const addToCart = (item, quantity) => {
    const cartItem = { quantity, ...item };
    setCart([cartItem, ...cart]);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const setItemDetail = (itemIndex) => {
    setSelectedItem(itemIndex);
  };

  const getItems = () => {
    axios.get(BACKEND_URL+'/items').then((result) => {
      console.log(result);
      setItems(result.data.items);
    });
  };

  const selectedItem = items[selectedItemIndex];

  return (
    <div className="container">
      <div className="row">
        <h1 className="page-title">Wow Shopping!</h1>
        <ItemsContext.Provider value={{items, setItemDetail, selectedItem, addToCart}} >
          <Items />
          {items.length === 0 && (
            <button type="button" onClick={getItems}>
              Get Items
            </button>
          )}
          <ItemDetail />
          <Cart items={cart} emptyCart={emptyCart} />
        </ItemsContext.Provider>
      </div>
    </div>
  );
}
