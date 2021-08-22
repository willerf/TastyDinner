
import React from 'react';
import axios from "axios";
import { Tag } from 'antd';

function IngredientInfo(props) {

  function removeIngredient(e) {
    console.log(e);
  }

  return(
    <div>
      <div>
        <div>
          Your Current Ingredients
        </div>
        {props.data.map((tempIngredientsList, index) =>
        <>
          {tempIngredientsList.ingredients.map((tempIngredient, anotherIn) =>
            <Tag closable onClose={removeIngredient} style={{margin: "3px"}}>
              {tempIngredient}
            </Tag>
          )}
          </>
        )}
      </div>
    </div>
  )
}

export default class CurrentIngredients extends React.Component {
  
  constructor(props) {
    super();

    this.state = {
      isLoaded: false,
      ingredientData: null
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/getIngredients`).then(res => {
      const data = res.data;
      this.state.ingredientData = data;
      console.log(this.state.ingredientData);
      this.state.isLoaded = true;
      this.forceUpdate();
    })
  }


  render() {
    return (
      <div>
        {this.state.isLoaded ? <IngredientInfo data={this.state.ingredientData}></IngredientInfo> : null}
      </div>
    )
  }
}