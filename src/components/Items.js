import React from "react";

function Items(props) {
  return (
    <div className="items-list-wrapper">
      {props.items.map((item) => (
        <div className="item-card" key={item.id}>
          <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Items;
