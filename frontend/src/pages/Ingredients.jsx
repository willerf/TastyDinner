
import React, { useState } from 'react';
import axios from "axios";
import { Button, Select } from "antd";

import ingredientsStyles from "../styles/ingredients.module.css"

import CurrentIngredients from "../components/CurrentIngredients"

function Ingredients() {

  
  let ingredientData = [""];
  let newIngredientData = {ingredients: []};
  const [selectedFile, setSelectedFile] = useState();

  async function getIngredients() {
    const response = await fetch(`http://localhost:3001/getIngredients`);
    const data = await response.json();
    ingredientData = data;
    console.log(ingredientData);
  }
 
  function fileChangedHandler(event) {
    setSelectedFile(event.target.files[0]);
  }

  function uploadHandler() {
    console.log(selectedFile)
    const data = new FormData()
    data.append(
      'test',
      selectedFile,
      selectedFile.name
    )

    axios.post('http://localhost:3001/file-upload', data).then(data => {
      console.log(data);
    })
  }

  function logIngredient(newIngredients) {
    newIngredientData = newIngredients;
    console.log(newIngredientData);
  }

  function sendData() {
    axios.post('http://localhost:3001/typed-upload', newIngredientData).then(data => {
      console.log(data);
    })
  }

  return (
    <div>
      <div className={ingredientsStyles.backgroundImage}>
        <div className={ingredientsStyles.titleBox}>
          <div className={ingredientsStyles.title}>Ingredients</div>
          <div className={ingredientsStyles.description}>View your ingredients, and add new ones you just picked up.</div>
        </div>
      </div>
      <div className={ingredientsStyles.bottomHalf}>
        <div className={ingredientsStyles.inputContainer}>
          <div className={ingredientsStyles.enterIngredients}>
            <Select mode="tags" style={{width: "60%"}} onChange={logIngredient} tokenSeparators={[',']} placeholder="Enter New Ingredients">
              
            </Select>
            <Button onClick={sendData} style={{width: "30%", marginLeft: "10%"}}>
              Upload Ingredients
            </Button>
          </div>
          <div className={ingredientsStyles.uploadIngredients}>
            <input type="file" onChange={fileChangedHandler}></input>
            <button onClick={uploadHandler}>Upload!</button>
          </div>
        </div>
        <div className={ingredientsStyles.tagIngredients}>
            <CurrentIngredients></CurrentIngredients>
        </div>
      </div>
      <div className={ingredientsStyles.bottomBackground}>

      </div>
    </div>
  )
}

export default Ingredients;