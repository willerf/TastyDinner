import React from "react";
import homeStyles from "../styles/home.module.css";
import { Link } from 'react';

function Home() {

  return(
      <div>
        <div>
          <html>

            <head>
                <title>Tasty Food</title>
                <link href='./App.css' rel='stylesheet'></link>
            </head>

            <body>

                <div className={homeStyles.container}></div>
                <div className={homeStyles.titleBox}>
                <div className={homeStyles.purpose}>WE HELP DELIVER HEALTHY DINNER</div>
                <p >Type your ingredients or take a shot of your goodies, <br></br>we'll recommend the best recipe for you.</p>
                </div>
                
                
              
            </body>

          </html>

        </div>
      </div>
    )
}

export default Home;