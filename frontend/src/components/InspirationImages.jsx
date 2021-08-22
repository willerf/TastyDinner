
import React from 'react';
import axios from "axios";

import inspirationStyles from '../styles/inspiration.module.css'

function ImageSet(props) {

  return(
    <div className={inspirationStyles.imageSection}>
      {props.data.photos.map((image, index) =>
        <div className={inspirationStyles.oneImage}>
          <img src={image}></img>
        </div>
      )}
    </div>
  )
}

export default class InspirationImages extends React.Component {
  
  constructor(props) {
    super();

    this.state = {
      isLoaded: false,
      recipeData: null
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/getPhotos`).then(res => {
      const data = res.data;
      this.state.imageData = data;
      console.log(this.state.imageData);

      let index = this.state.imageData.photos.length;
      while(index != 0) {
        let randomIndex = Math.floor(Math.random() * index);
        index--;

        [this.state.imageData.photos[index], this.state.imageData.photos[randomIndex]] = [this.state.imageData.photos[randomIndex], this.state.imageData.photos[index]];
      }

      this.state.isLoaded = true;
      this.forceUpdate();
    })
  }


  render() {
    return (
      <div>
        {this.state.isLoaded ? <ImageSet data={this.state.imageData}></ImageSet> : null}
      </div>
    )
  }
}