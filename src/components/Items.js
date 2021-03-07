import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Items(props) {
  let history = useHistory();

  function addItemCart(e, price) {
    e.preventDefault();
    let newTotal = (props.cart + price).toFixed(2);
    newTotal = parseFloat(newTotal);
    props.setCart(newTotal);
  }

  function clearCart(e) {
    e.preventDefault();
    props.setCart(0);
  }

  function checkOut(e) {
    e.preventDefault();
    props.addPurchase();
    props.setCart(0);
    history.push("/points");
  }

  return (
    <div>
      <h3>Total: ${props.cart.toFixed(2)} </h3>
      <button onClick={checkOut} disabled={!props.user}>
        Checkout
      </button>
      <button onClick={clearCart}>Clear</button>
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
            <button onClick={(e) => addItemCart(e, item.price)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
