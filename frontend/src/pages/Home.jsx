import React from "react";
import homeStyles from "../styles/home.module.css";
import { Link } from 'react';

function Home() {

  return(
      <div>

          <head>
              <title>Tasty Food</title>
              <link href='./App.css' rel='stylesheet'></link>
          </head>

          <body>

              <div className={homeStyles.container}></div>
              <div className={homeStyles.purpose}>WE HELP FIND #TASTYDINNER</div>
              <div className={homeStyles.slogan}>Type your ingredients or take a shot of your goodies, <br/>we'll recommend the best recipe for you. <br/><br/>Or browse our inspiration page to <br/>fill your cravings.</div>

          </body>

      </div>
    )
}

export default Home;