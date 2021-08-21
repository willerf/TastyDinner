
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from "./components/Navbar"

import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import UploadIngredients from "./pages/UploadIngredients";
import ViewIngredients from "./pages/ViewIngredients";

import "antd/dist/antd.css"


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recommendations" component={Recommendations} />
          <Route exact path="/view/ingredients" component={ViewIngredients} />
          <Route exact path="/upload/ingredients" component={UploadIngredients} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
