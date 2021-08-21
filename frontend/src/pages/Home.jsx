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

                <div className={homeStyles.container}>
                <h1 className={homeStyles.tastyfood}>TastyFood</h1>
                <h1 className={homeStyles.purpose}>WE HELP DELIVER HEALTHY DINNER</h1>
                <p>Upload Ingredients</p>
                <p>Type your ingredients or take a shot of your goodies, we'll recommend the best recipe for you.</p>
                <img src = "https://www.jocooks.com/wp-content/uploads/2013/07/summer-fruit-salad-with-lemon-dressing-500x375.jpg" className={homeStyles.image}/>
                </div>
              
            </body>

          </html>
        
        

        </div>
      </div>
    )
}

export default Home;