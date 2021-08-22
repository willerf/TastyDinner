
import React from 'react';
import axios from "axios";
import { Tag } from 'antd';

import recentStyles from "../styles/recents.module.css"

function RecentListIngredients(props) {

  return(
    <div>
      <div>
        <div>
          Recent Lists
        </div>
        
          {props.data.map((tempIngredientsList, index) =>
            <div className={recentStyles.listBox}>
              {' ' + tempIngredientsList.createdAt.substring(0, 10) + ' '}
              {tempIngredientsList.ingredients.map((tempIngredient, anotherIn) =>
                
                <Tag style={{margin: "3px"}}>
                  {tempIngredient}
                </Tag>
                  
              )}
            </div>
          )}
        
      </div>
    </div>
  )
}

export default class RecentLists extends React.Component {
  
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
        {this.state.isLoaded ? <RecentListIngredients data={this.state.ingredientData}></RecentListIngredients> : null}
      </div>
    )
  }
}