import React from 'react';
import { withRouter } from 'react-router-dom';
import ImageSlider from './../image_slider/image_slider';
import ImageGalleryView from './../image_gallery_view/image_gallery_view';

import './styles.scss';
import { logoutCurrentUser } from '../../actions/session_actions';

class ItemShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      messageText: "Hi! I saw your item for sale on Unify and was interested in checking it out. Is it still available?"
    };

    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleMessageSubmit() {
    const { currentUser, item } = this.props;
    const { messageText } = this.state;

    const conversationObject = { sender_id: currentUser.id, recipient_id: item.user_id, item_id: item.id, body: messageText }
    this.props.createConversation(conversationObject);

    this.props.history.push('/conversations');
  }

  render() {
    const { item, items, favoriteItems } = this.props;
    const { showModal } = this.state;

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
            <div className="item-show-image-gallery-section">
              <ImageGalleryView imageUrls={item.image_urls} />
            </div>
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
            <button className="message-seller-button" onClick={() => this.setState({ showModal: true })}>Message seller</button>
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

    const renderMessageModal = () => (
      <div className="message-modal-section">
        <div className="message-modal-content animated fadeInUp">
          <div className="checkmark-section">
            <img className="checkmark-icon animated fadeInLeft delay-1s" src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fpaper-plane.png?alt=media&token=b101be41-5941-4539-9546-f4d3106379bd" />
          </div>
          <img className="message-modal-cancel-button" src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fmultiply.png?alt=media&token=07dffd65-9427-48b3-991e-3f6c5f8c8d9a" onClick={() => this.setState({ showModal: false })} />
          <h2 className="message-modal-header">Send a message to {this.props.item.seller_name}</h2>
          <div className="message-modal-input-section">
            <textarea className="message-modal-text-input" onChange={this.update('messageText')} cols="70" rows="3" value={this.state.messageText} />
          </div>
          <button className="message-modal-confirm-button" onClick={() => this.handleMessageSubmit()}>
            Send
          </button>
        </div>
      </div>
    )

    return (
      <div className="item-show-container">
        { Object.values(items).length > 0 ? itemInfo() : loader()}
        { showModal ? renderMessageModal() : null }
      </div>
    );
  }
}

export default withRouter(ItemShow);