import React, { useState } from "react";
import { Route, NavLink } from "react-router-dom";

import itemsData from "./data/itemsData";
import purchasesData from "./data/purchasesData";
import usersData from "./data/usersData";

import Home from "./components/Home";
import Items from "./components/Items";
import Points from "./components/Points";
import Login from "./components/Login";

import "./styles.css";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(0);
  const [items, setItems] = useState(itemsData);
  const [purchases, setPurchases] = useState(purchasesData);

  function addPurchase() {
    const obj = {
      id: purchases.length + 1,
      user: user,
      amount: cart,
      month: new Date().getMonth() + 1,
    };
    purchases.push(obj);
  }

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">
          Welcome {user ? usersData[user] : "Please log-in"}
        </h1>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/items">Shop</NavLink>
          <NavLink to="/points">Points</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>

      <Route exact path="/">
        <Home />
      </Route>
      <Route
        exact
        path="/items"
        render={(props) => (
          <Items
            {...props}
            items={items}
            setCart={setCart}
            cart={cart}
            addPurchase={addPurchase}
            user={user}
          />
        )}
      />
      <Route
        exact
        path="/points"
        render={(props) => (
          <Points {...props} purchases={purchases} user={user} />
        )}
      />
      <Route
        exact
        path="/login"
        render={(props) => <Login {...props} setUser={setUser} />}
      />
    </div>
  );
}

export default App;
