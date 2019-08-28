import React from 'react';
import { withRouter } from 'react-router-dom';

import './styles.scss';

class ItemPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;

    return (
      <div className="item-preview-section" key={item.id}>
        <div className="item-preview-img-section">
          <img className="item-preview-img" src={item.image_urls[0]} />
        </div>
        <div className="item-preview-info-section">
          <h2 className="item-preview-name">{item.name}</h2>
          <h4 className="item-preview-price">${item.price}</h4>
        </div>
        <br className="home-break-line" />
        <div className="favorites-section">
          <img className="favorite-heart-icon" src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fgrey-heart.png?alt=media&token=85b1c4d3-a474-41a7-a73b-181daba6bfa3" />
        </div>
      </div>
    );
  }
}

export default ItemPreview;