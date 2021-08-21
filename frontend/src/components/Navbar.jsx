
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import navbarStyles from '../styles/navbar.module.css'

function Navbar() {

  const [curPage, setCurPage] = useState ("home");

  const handleClick = (e) => {
    setCurPage(e.key)
  }

  return (
    <div className={navbarStyles.navbarHeader}>
      <div onClick={handleClick}>
        <Link to="/" className={navbarStyles.titleName}>TastyFood</Link>
      </div>
      <div>
        <Menu mode="horizontal" onClick={handleClick} selectedKeys={[curPage]}>
          
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="recommendations">
            <Link to="/recommendations">Recommendations</Link>
          </Menu.Item>

          <Menu.Item key="ingredients">
            <Link to="/ingredients">Ingredients</Link>
          </Menu.Item>

          <Menu.Item key="savedRecipes">
            <Link to="/saved/recipes">Saved Recipes</Link>
          </Menu.Item>
        
        </Menu>
      </div>
    </div>
  )

}

export default Navbar;
