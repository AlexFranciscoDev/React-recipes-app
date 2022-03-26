import React, {useEffect, useState} from "react";
import './App.css';

const App = () => {
  const APP_ID = "daf1ab73";
  const APP_KEY = "219392c8d71b4c379437525eef7faef3";
  const req_example = 
  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_KEY}&query=pasta&maxFat=25&number=2`);
    const data = await response.json();
    console.log(data);

  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
