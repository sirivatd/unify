import React from 'react';
import { storage } from './../../../src/firebase';

import './styles.scss'

export default class ItemImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      imageURLs: []
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
          let imageURLs = this.state.imageURLs;
          imageURLs.push(url);

          this.setState({
            imageURLs: imageURLs
          });
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
          <img className="empty-images-icon" src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2F37578985_1775156602522224_8899954728813723648_n.jpg?alt=media&token=fab93530-e191-4f97-a2a9-0e0c7947af0a"></img>
          <p>Images will appear here once you start adding them.</p>
        </div>
      </div>
    )
  }
}