import React from "react";
import './App.css';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Shop() {

  useEffect(() => {
    fetchItems();
  }, [])

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v2/cosmetics/br/new");
    const items = await data.json();
    setItems(items.data.items);
  }

  return (
    <div className="App">
      <h1>Shop Page</h1>
      {items.map((item) => 
        <h3 key={item.id}>
        <Link to={`/shop/${item.id}`}>
        {item.name}
        </Link>
        </h3>
      )}
    </div>
  );
}

export default Shop;
