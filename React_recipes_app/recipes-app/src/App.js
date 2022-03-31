import React, {useEffect, useState} from "react";
import './App.css';
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "daf1ab73";
  const APP_KEY = "d6b6e23fe9e54d588ba770494ec6d406";
  const req_example = 
  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(""); // query to make to the API


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_KEY}&query=${query}&maxFat=30&addRecipeInformation=true&number=5`);
    const data = await response.json();
    // Change our array of recipes
    console.log(data.results);
    setRecipes(data.results);
  }

  // Change search value throught the search input
  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    // Set the query to the value of input
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      { recipes.map(recipe => (
        <Recipe 
          key={recipe.id} 
          title={recipe.title} 
          image={recipe.image} 
          calories={recipe.nutrition.nutrients[0].amount}
          ingredients={recipe.missedIngredients}/>
      ))}
      </div>
    </div>
  );
}

export default App;
