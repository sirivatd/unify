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
      this.setState(() => ({image}));
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
      <div>
        <input type="file" onChange={this.handleChange} />
        <button onClick={this.handleUpload}>Upload</button>
      </div>
    )
  }
}