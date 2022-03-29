import React, {useEffect, useState} from "react";
import './App.css';
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "daf1ab73";
  const APP_KEY = "219392c8d71b4c379437525eef7faef3";
  const req_example = 
  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_KEY}&query=pasta&maxFat=25&number=2`);
    const data = await response.json();
    // Change our array of recipes
    console.log(data.results);
    setRecipes(data.results);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      { recipes.map(recipe => (
        <Recipe key={recipe.id} title={recipe.title} image={recipe.image} calories={recipe.nutrition.nutrients[0].amount}/>
      ))}
    </div>
  );
}

export default App;
