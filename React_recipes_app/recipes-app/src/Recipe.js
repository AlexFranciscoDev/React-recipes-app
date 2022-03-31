import React from "react";
import style from "./recipe.module.css";


const Recipe = ({title, image, calories}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt={title}/>
        </div>
    );
}

export default Recipe;