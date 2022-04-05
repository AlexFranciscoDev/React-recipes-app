import React from "react";
import './App.css';
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetail from "./ItemDetail";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/shop" element={<Shop/>} />
          <Route path="/shop/:id" element={<ItemDetail/>} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)


export default App;
