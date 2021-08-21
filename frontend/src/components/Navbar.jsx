
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import navbarStyles from '../styles/navbar.module.css'

const { SubMenu } = Menu;


function Navbar() {

  const [curPage, setCurPage] = useState ("home");

  const handleClick = (e) => {
    setCurPage(e.key)
  }

  return (
    <div className={navbarStyles.navbarHeader}>
      <div onClick={handleClick}>
        <Link to="/">Instant Meal</Link>
      </div>
      <div>
        <Menu mode="horizontal" onClick={handleClick} selectedKeys={[curPage]}>
          
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="recommendations">
            <Link to="/recommendations">Recommendations</Link>
          </Menu.Item>

          <Menu.Item key="uploadIngredients">
            <Link to="/upload/ingredients">Upload Ingredients</Link>
          </Menu.Item>

          <Menu.Item key="viewIngredients">
            <Link to="/view/ingredients">View Ingredients</Link>
          </Menu.Item>
        
        </Menu>
      </div>
    </div>
  )

}

export default Navbar;
