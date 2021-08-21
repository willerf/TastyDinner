
import React, { useState } from 'react';
import axios from "axios";


function Ingredients() {

  const [selectedFile, setSelectedFile] = useState();
 
  function fileChangedHandler(event) {
    setSelectedFile(event.target.files[0]);
  }

  function uploadHandler() {
    console.log(selectedFile)
    const data = new FormData()
    data.append(
      'test',
      selectedFile,
      selectedFile.name
    )

    axios.post('http://localhost:3001/file-upload', data).then(data => {
      console.log(data);

    })
  }


  return (
    <div>
      <h1>Ingredients</h1>
      <input type="file" onChange={fileChangedHandler}></input>
      <button onClick={uploadHandler}>Upload!</button>
    </div>
  )
}

export default Ingredients;