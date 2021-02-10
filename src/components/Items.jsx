import React, { useState, useContext } from "react";
import { ItemsContext } from '../App.js';

export default function Items() {
  const itemsStateObject = useContext(ItemsContext);

  const [selectedItemIndex, setSelectedItemIndex] = useState();

  const setItemSelected = (item, index) => {
    itemsStateObject.setItemDetail(index);
    setSelectedItemIndex(index);
  };

  return (
    <div className="col-sm">
      <div className="items">
        {itemsStateObject.items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={index === selectedItemIndex ? "item selected" : "item"}
            onClick={() => setItemSelected(item, index)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
