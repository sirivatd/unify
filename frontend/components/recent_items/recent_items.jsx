import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './styles.scss';

class RecentItems extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    const { items } = this.props;

    return (
      <div className="recent-items-section">
        <h2 className="recent-items-header">
          Recently uploaded items
        </h2>
        <div className="item-content-section">
          {items.map((item) => (
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
          ))}
        </div>
      </div>
    );
  }
}

export default RecentItems;