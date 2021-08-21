import React, { Component } from "react";

import axios from 'axios';

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
      let usefulData = data.data
      console.log(usefulData)
    })
  }

 

 render(){
  return(
    <div>
      <input type="file" onChange={this.fileChangedHandler}></input>
      <button onClick={this.uploadHandler}>Upload!</button>
    </div>
    )
  }

}
