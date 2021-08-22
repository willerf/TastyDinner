
import React from 'react'
import recommendationStyles from "../styles/recommendations.module.css"

function Recommendations() {
  return (
    <div className={recommendationStyles.backgroundImage}>
      <div className={recommendationStyles.titleBox}>
        <div className={recommendationStyles.title}>Recommendations</div>
        <div className={recommendationStyles.description}>Check out delicious dinner for inspiration and to driven your stomach</div>
        <div className={recommendationStyles.popularPlates}>Popular Plates</div>
        <div className={recommendationStyles.yummy}>Delicius Meals</div>
      </div>

      <div className={recommendationStyles.containerImages}>
        <div className={recommendationStyles.image}>
        <h1>Image name</h1>
        <img src="https://spoonacular.com/recipeImages/641759-312x231.jpg" alt="food"></img>
        </div>
        <div className={recommendationStyles.image}>
        <h1>Image name</h1>
        <img src="https://spoonacular.com/recipeImages/641759-312x231.jpg" alt="food"></img>
        </div>
        <div className={recommendationStyles.image}>
        <h1>Image name</h1>
        <img src="https://spoonacular.com/recipeImages/641759-312x231.jpg" alt="food"></img>
        </div>
        <div className={recommendationStyles.image}>
        <h1>Image name</h1>
        <img src="https://spoonacular.com/recipeImages/641759-312x231.jpg" alt="food"></img>
        </div>
        <div className={recommendationStyles.image}>
        <h1>Image name</h1>
        <img src="https://spoonacular.com/recipeImages/641759-312x231.jpg" alt="food"></img>
        </div>

        <div className={recommendationStyles.image}>
        <h1>Image name</h1>
        <img src="https://spoonacular.com/recipeImages/641759-312x231.jpg" alt="food"></img>
        </div>
        <div className={recommendationStyles.image}>
        <h1>Image name</h1>
        <img src="https://spoonacular.com/recipeImages/641759-312x231.jpg" alt="food"></img>
        </div>
        <div className={recommendationStyles.image}>
        <h1>Image name</h1>
        <img src="https://spoonacular.com/recipeImages/641759-312x231.jpg" alt="food"></img>
        </div>
        <div className={recommendationStyles.image}>
        <h1>Image name</h1>
        <img src="https://spoonacular.com/recipeImages/641759-312x231.jpg" alt="food"></img>
        </div>
        <div className={recommendationStyles.image}>
        <h1>Image name</h1>
        <img src="https://spoonacular.com/recipeImages/641759-312x231.jpg" alt="food"></img>
        </div>
        <div className={recommendationStyles.containerDelicius}>
        <div className={recommendationStyles.deliciusMeal}>
        <img src="https://cdn.pixabay.com/photo/2017/03/26/11/53/hors-doeuvre-2175326_960_720.jpg" alt="DeliciusMeal" className="center"></img>
        </div>
      
      </div>
      </div>

      </div>

  )
}

export default Recommendations;