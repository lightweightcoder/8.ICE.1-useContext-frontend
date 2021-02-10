import React, { useState, useContext } from "react";
import { ItemsContext } from '../App.js';

export default function ItemDetail({ item, addToCart }) {
  const itemsStateObject = useContext(ItemsContext);
  const [quantity, setQuantity] = useState(1);

  if (!itemsStateObject.selectedItem) {
    return <div></div>;
  }

  const handleSelectChange = (event) => {
    setQuantity(event.target.value);
  };

  const detailAddCart = () => {
    itemsStateObject.addToCart(itemsStateObject.selectedItem, quantity);
  };

  return (
    <div className="col-sm">
      <div className="item-detail">
        <h2>{itemsStateObject.selectedItem.name}</h2>
        <p>{itemsStateObject.selectedItem.description}</p>
        <p>
          <select
            className="item-quantity"
            value={quantity}
            onChange={handleSelectChange}
          >
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <option value={index + 1}>{index + 1}</option>
              ))}
          </select>
          <button type="button" onClick={detailAddCart}>
            Add To Cart
          </button>
        </p>
      </div>
    </div>
  );
}
