import React from 'react';
import { withRouter } from 'react-router-dom';
import ImageSlider from './../image_slider/image_slider';
import ImageGalleryView from './../image_gallery_view/image_gallery_view';

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
      <div className="item-show-content">
        <div className="item-show-image-section">
          <div className="item-show-image-content">
            <ImageGalleryView imageUrls={item.image_urls} />
            <ImageSlider images={item.image_urls} />
          </div>
        </div>
        <div className="item-show-info-section">
          <div className="item-show-header-section">
            <h4 className="item-show-header-category">{item.category_name}</h4>
            <p className="item-show-header-created-at">Uploaded at {item.created_at}</p>
          </div>
          <h1 className="item-show-name">{item.name}</h1>
          <h3 className="item-show-subtitle">{item.subtitle}</h3>
          <h3 className="item-show-price">${item.price.toFixed(2)}</h3>
          <div className="item-show-user-action-section">
            <button className="message-seller-button">Message seller</button>
            <div className="favorite-heart-icon-section">
              { favoriteIds && favoriteIds.includes(item && item.id) ? greenHeart() : greyHeart() }
            </div>
          </div>

          <br className="item-show-break-line" />

          <div className="item-show-detail-row">
            <h4 className="item-show-detail-row-title">Category</h4>
            <h4 className="item-show-detail-row-value">{item.category_name}</h4>
          </div>

          <div className="item-show-detail-row">
            <h4 className="item-show-detail-row-title">Condition</h4>
            <h4 className="item-show-detail-row-value">{item.condition_name}</h4>
          </div>


          <div className="item-show-detail-row">
            <h4 className="item-show-detail-row-title">Uploaded by</h4>
            <h4 className="item-show-detail-row-value">{item.seller_name}</h4>
          </div>

          <div className="item-show-detail-row">
            <h4 className="item-show-detail-row-title">Posted on</h4>
            <h4 className="item-show-detail-row-value">{item.created_at}</h4>
          </div>

          <br className="item-show-break-line" />

          <div className="item-show-description-section">
            <h4 className="item-show-description-title">Description</h4>
            {item.description}
          </div>

        </div>
      </div>
    );

    return (
      <div className="item-show-container">
        { Object.values(items).length > 0 ? itemInfo() : loader()}
      </div>
    );
  }
}

export default withRouter(ItemShow);