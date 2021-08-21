
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from "./components/Navbar"

import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import Ingredients from "./pages/Ingredients";
import SavedRecipes from "./pages/SavedRecipes";

import "antd/dist/antd.css"


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recommendations" component={Recommendations} />
          <Route exact path="/ingredients" component={Ingredients} />
          <Route exact path="/saved/recipes" component={SavedRecipes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
