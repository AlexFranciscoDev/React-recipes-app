import React from "react";
import './App.css';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ItemDetail() {
    let params = useParams();
    useEffect(() => {
        fetchItem();
    }, [])

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${params.id}`);
        const data = await fetchItem.json();
        console.log(data.data)
        setItem(data.data);
    }

    return (
        <div className="App">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <img src={item.images.icon} alt={item.name}/>
        </div>
    );
}

export default ItemDetail;
