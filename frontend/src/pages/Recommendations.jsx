
import React from 'react'
import recommendationStyles from "../styles/recommendations.module.css"

import InspirationImages from '../components/InspirationImages'

function Recommendations() {
  return (
    <div>
      <div className={recommendationStyles.backgroundImage}>
        <div className={recommendationStyles.titleBox}>
          <div className={recommendationStyles.title}>Inspiration</div>
          <div className={recommendationStyles.description}>Check out delicious dinner for inspiration and to excite your stomach.</div>
        </div>  
      </div>
      <div>
        <InspirationImages></InspirationImages>
      </div>
    </div>

  )
}

export default Recommendations;