import React from 'react';
import { storage } from './../../../src/firebase';

import './styles.scss'

export default class ItemImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = e => {
    if(e.target.files[0]) {
      const image = e.target.files[0]
      this.setState(() => ({image}), () => {
        this.handleUpload();
      });
    }
  }

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
      (snapshot) => {
        // progress
      }, 
      (error) => {
        console.log(error);
      }, 
      () => {
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
          console.log(url);
        })
      });
  }

  render() {
    return (
      <div className="image-upload-container">
        <input className="image-upload-input" type="file" id="file" onChange={this.handleChange} />
        <label for="file" className="image-upload-label">
          <img className="upload-image-icon" src="https://i.ibb.co/8PSR6PP/unify-plus-icon.png"/>
        </label>
        <div className="empty-images-section">
          <img className="empty-images-icon" src="https://icon-library.net/images/image-icon/image-icon-1.jpg"></img>
          <p>Images will appear here once you start adding them.</p>
        </div>
      </div>
    )
  }
}