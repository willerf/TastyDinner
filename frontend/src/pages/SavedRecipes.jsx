import React from 'react'
import savedStyles from "../styles/saved.module.css"

function SavedRecipes() {
  return (
    <div className={savedStyles.backgroundImage}>
      <div className={savedStyles.titleBox}>
        <div className={savedStyles.title}>Your saved recipes</div>
        <div className={savedStyles.description}>Come back take a look to your favorite meals.</div>
      </div>
  </div>
  )
}

export default SavedRecipes;