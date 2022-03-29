import React from "react";


const Recipe = ({title, image, calories}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <img src={image} alt={title}/>
        </div>
    );
}

export default Recipe;