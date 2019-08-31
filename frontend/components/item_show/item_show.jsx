import React from 'react';
import { withRouter } from 'react-router-dom';

import './styles.scss';

class ItemShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllItems();
    this.props.fetchAllFavoriteItems();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.favorites.length !== nextProps.favorites.length) {
      this.props.fetchAllFavoriteItems();
    }
  }

  render() {
    const { item, items, favoriteItems } = this.props;
    const loader = () => (
      <span className="cssload-loader">
        <span className="cssload-loader-inner" />
      </span>
    );
    const favoriteIds = favoriteItems.map((fav) => fav.id);

    const greenHeart = () => (
      <img onClick={() => this.props.deleteFavorite(item.id)} className="favorite-heart-icon" src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fgreen-heart.png?alt=media&token=e6d8ac33-d442-4a56-b270-e2adc6cf6f51" />
    );

    const greyHeart = () => (
      <img onClick={() => this.props.addFavorite(item.id)} className="favorite-heart-icon" src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fgrey-heart.png?alt=media&token=85b1c4d3-a474-41a7-a73b-181daba6bfa3" />
    );

    const itemInfo = () => (
      <div className="item-preview-section" key={item && item.id}>
      <div className="item-preview-img-section">
        <img className="item-preview-img" src={item && item.image_urls[0]} />
      </div>
      <div className="item-preview-info-section">
        <h2 className="item-preview-name">{item && item.name}</h2>
        <h4 className="item-preview-price">${item && item.price.toFixed(2)}</h4>
      </div>
      <br className="home-break-line" />
      <div className="favorites-section">
        { favoriteIds && favoriteIds.includes(item && item.id) ? greenHeart() : greyHeart() }
      </div>
    </div>
    );

    return (
      <div>
        { Object.values(items).length > 0 ? itemInfo() : loader()}
      </div>
    );
  }
}

export default withRouter(ItemShow);