import React, { Component } from "react";

import axios from "axios";

import homeStyles from "../styles/home.module.css";
import { Link } from 'react';

export default class Home extends Component {

 state = { selectedFile: null }
 
  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }



  uploadHandler = () => {
    console.log(this.state.selectedFile)
    const data = new FormData()
    data.append(
      'test',
      this.state.selectedFile,
      this.state.selectedFile.name
    )

    axios.post('http://localhost:3001/file-upload', data).then(data => {
      console.log(data);

    })
  }

 render(){
  return(
    <div>
      
      <input type="file" onChange={this.fileChangedHandler}></input>
      <button onClick={this.uploadHandler}>Upload!</button>

      <html>

        <head>
            <title>Instant Food</title>
            <link href='./App.css' rel='stylesheet'></link>
        </head>

        <body>

            <div class = "container">
            <h1 class="tastyfood">TastyFood</h1>
            <h1 class="purpose">WE HELP DELIVER HEALTHY DINNER</h1>
            <a href= "./search.html">SEARCH RECIPE</a>
            <p>Type your ingredients or take a shot of your goodies, we'll recommend the best recipe for you.</p>
            <img src = "https://www.jocooks.com/wp-content/uploads/2013/07/summer-fruit-salad-with-lemon-dressing-500x375.jpg" />
            </div>
          
        </body>

      </html>
      
      

      
    </div>
    )
  }

}
