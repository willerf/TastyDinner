
import React, { useState } from 'react';
import axios from "axios";
import { Select } from "antd";

import ingredientsStyles from "../styles/ingredients.module.css"

function Ingredients() {

  const [selectedFile, setSelectedFile] = useState();
 
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

  function logIngredient() {

  }


  return (
    <div>
      <div className={ingredientsStyles.backgroundImage}>
        <div className={ingredientsStyles.titleBox}>
          <div className={ingredientsStyles.title}>Ingredients</div>
          <div className={ingredientsStyles.description}>View your ingredients, and add new ones you just picked up.</div>
        </div>
      </div>
      <div className={ingredientsStyles.inputContainer}>
        <div className={ingredientsStyles.enterIngredients}>
          <Select mode="tags" style={{width: "100%", boxShadow:"0px 2px 18px rgba(158, 158, 158, 0.5)"}} onChange={logIngredient} tokenSeparators={[',']} placeholder="Enter New Ingredients">
            
          </Select>
        </div>
        <div className={ingredientsStyles.uploadIngredients}>
          <input type="file" onChange={fileChangedHandler}></input>
          <button onClick={uploadHandler}>Upload!</button>
        </div>
      </div>
      <div className={ingredientsStyles.bottomBackground}>

      </div>
    </div>
  )
}

export default Ingredients;