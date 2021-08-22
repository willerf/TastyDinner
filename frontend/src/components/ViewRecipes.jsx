
import React, { useState } from 'react';
import axios from "axios";
import recipeStyles from "../styles/recipes.module.css";
import { Button, Popover } from 'antd';

function RecipeInfo(props) {

  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = visible => {
    setVisible(true);
  };

  return(
    <div>
      <div className={recipeStyles.sectionTitle}>
        Recipe Ideas!
      </div>
      <div className={recipeStyles.foodSection}>
        {props.data.map((recipe, index) =>
          <div className={recipeStyles.foodModule}>
            <div className={recipeStyles.foodTitle}>
              {recipe.title}
            </div>
            <div className={recipeStyles.foodImage}>
              <img src={recipe.image}></img>
            </div>
            <div className={recipeStyles.ingredientList}>
              <div className={recipeStyles.ingredientColumn}>
                <h3>Inventory</h3>
                {recipe.usedIngredients.map((ingredient, ingredIndex) =>
                  <>
                    {ingredient.name}<br/>
                  </>
                )}
              </div>
              <div className={recipeStyles.ingredientColumn}>
                <h3>Needed</h3>
                {recipe.missedIngredients.map((ingredient, ingredIndex) =>
                  <>
                    {ingredient.name}<br/>
                  </>
                )}
              </div>
            </div>
            <div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default class ViewRecipes extends React.Component {
  
  constructor(props) {
    super();

    this.state = {
      isLoaded: false,
      recipeData: null
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/getAllRecipes`).then(res => {
      const data = res.data;
      this.state.recipeData = data;
      console.log(this.state.recipeData);
      this.state.isLoaded = true;
      this.forceUpdate();
    })
  }


  render() {
    return (
      <div>
        {this.state.isLoaded ? <RecipeInfo data={this.state.recipeData}></RecipeInfo> : null}
      </div>
    )
  }
}