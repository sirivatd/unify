import React from 'react';
import ReactBnbGallery from "react-bnb-gallery";
import { withRouter } from "react-router-dom";

import './styles.scss';

class ImageGalleryView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { galleryOpened: false };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render () {
    const { imageUrls } = this.props; 

    let photos = imageUrls.map((image) => { return {photo: image, thumbnail: image} });

    return (
      <div>
        <button onClick={this.toggleGallery}>See more photos</button>
         <ReactBnbGallery
          show={this.state.galleryOpened}
          photos={photos}
          onClose={this.toggleGallery} />
      </div>
    )
  }
}

export default withRouter(ImageGalleryView);