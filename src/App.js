import React, { useState } from "react";
import { Route, NavLink } from "react-router-dom";

import itemsData from "./data/itemsData";
import purchasesData from "./data/purchasesData";

function App() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState(itemsData);
  const [purchases, setPurchases] = useState(purchasesData);

  return <div>test</div>;
}

export default App;
