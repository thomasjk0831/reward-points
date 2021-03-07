import React, { useState } from "react";
import { Route, NavLink } from "react-router-dom";

import itemsData from "./data/itemsData";
import purchasesData from "./data/purchasesData";

import Home from "./components/Home";
import Items from "./components/Items";
import Points from "./components/Points";
import Login from "./components/Login";

import "./styles.css";

function App() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState(itemsData);
  const [purchases, setPurchases] = useState(purchasesData);

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Welcome</h1>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/items">Shop</NavLink>
          <NavLink to="/points">Points</NavLink>
          <NavLink to="/login">Log-in</NavLink>
        </div>
      </nav>

      <Route exact path="/">
        <Home />
      </Route>
      <Route
        exact
        path="/items"
        render={(props) => <Items {...props} items={items} />}
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
