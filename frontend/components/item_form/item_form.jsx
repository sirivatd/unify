import React from "react";
import { withRouter } from "react-router-dom";
import { storage } from './../../../src/firebase';
import MasonryGrid from './../masonry_grid/masonry_grid';

import './styles.scss';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      price: '',
      subtitle: "",
      name: "",
      condition: "",
      categories: ["Electronics", "Textbooks", "Apparel", "Tickets", "Sports & Outdoors", "Furniture", "Beauty & Health", "Other"],
      category: "",
      conditions: ["New", "Mint", "Excellent", "Good", "Fair", "Salvage"],
      image: null,
      url: '',
      images: []
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentWillUpdate(props) {
    if (Object.entries(props.items).length > 0) {
      this.props.history.push("/");
    }
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
          let images = this.state.images;
          images.push(url);

          this.setState({
            images: images
          });
        })
      });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemObject = { name: this.state.name, subtitle: this.state.subtitle, description: this.state.description, condition: this.state.condition, category: this.state.category, price: this.state.price, images: this.state.images }
    const item = Object.assign({ user_id: this.props.currentUser.id }, itemObject);
    this.props.addItem(item);
  }

  renderErrors() {
    return (
      <ul className="error-section">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const emptyImageSection = () => (
      <div className="empty-images-section">
        <img className="empty-images-icon" src="https://icon-library.net/images/image-icon/image-icon-1.jpg"></img>
        <p>Images will appear here once you start adding them.</p>
    </div>
    )

    const imageGallerySection = () => (
      <div className="image-gallery-section">
        <MasonryGrid images = {this.state.images} brakePoints={[350, 500, 750]} />
      </div>
    )

    const imageUploadSection = () => (
      <div className="image-upload-container">
      <input className="image-upload-input" type="file" id="file" onChange={this.handleChange} />
      <label for="file" className="image-upload-label">
        <img className="upload-image-icon" src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fadd_image_icon.png?alt=media&token=a9771772-7005-424d-85a0-bf43aea20d26"/>
      </label>
      {this.state.images.length > 0 ? imageGallerySection() : emptyImageSection()}
    </div>
    )

    const renderSuccessModal = () => (
      <div className="success-modal-section">
        <h2>You have successfully uploaded your item.</h2>
        <button className="success-modal-button" onClick={() => this.props.history.push("/")} value="Continue" />
      </div>
    )

    return (
      <div className="item-form-container">
        { this.props.item ? renderSuccessModal() : null }
        <form onSubmit={this.handleSubmit} className="item-form-box">
          <label className="item-form-header">List an item on Unify.</label>
          <br/>
          <div className="item-form">
            <div className="image-input-section">
              {imageUploadSection()}
            </div>
            <div className="text-input-section">
              <div className="header-info-text-section">
                <p className="header-info-text">By posting, you confirm that this listing complies with Unify's Commerce Policies and all applicable laws.</p>
              </div>
              <input list="categories"
                onFocus={() => this.setState({category: ""})}
                value={this.state.category}
                onChange={this.update('category')}
                className="item-form-input"
                placeholder="Category"
              />
              <datalist id="categories">
                {this.state.categories.map(category => {
                  return (
                    <option value={category} />
                  )
                })}
              </datalist>
              <br className="category-text-break-line" />
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="item-form-input"
                placeholder="Item name"
              />
              <br/>
              <input type="text"
                value={this.state.subtitle}
                onChange={this.update('subtitle')}
                className="item-form-input"
                placeholder="Subtitle (put something to catch people's attention here)"
              />
              <br/>
              <input type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="item-form-input"
                placeholder="Description"
              />
              <br/>
              <input list="conditions"
                onFocus={() => this.setState({condition: ""})}
                value={this.state.condition}
                onChange={this.update('condition')}
                className="item-form-input"
                placeholder="Condition"
              />
              <datalist id="conditions">
                {this.state.conditions.map(condition => {
                  return (
                    <option value={condition} />
                  )
                })}
              </datalist>
              <br/>
              <span className="dollar-sign">$</span>
              <input type="number"
                value={this.state.price}
                onChange={this.update('price')}
                className="item-form-input price-input"
                placeholder="0.00"
                min="0.00"
                max="10000.00"
                step="0.01"
              />
              <br/>
              {this.renderErrors()}
              <br/>
              <input className="item-form-submit" type="submit" value="List Item" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ItemForm);