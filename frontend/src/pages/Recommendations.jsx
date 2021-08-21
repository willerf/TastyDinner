
import React from 'react'
import recommendationStyles from "../styles/recommendations.module.css"

function Recommendations() {
  return (
    <div className={recommendationStyles.backgroundImage}>
      <div className={recommendationStyles.titleBox}>
        <div className={recommendationStyles.title}>Recommendations</div>
        <div className={recommendationStyles.description}>Check out delicious dinner for inspiration and to driven your stomach</div>
      </div>
   </div>
  )
}

export default Recommendations;