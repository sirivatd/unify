import React from "react";
import { withRouter } from "react-router-dom";
import ItemImageForm from './../item_image_form/item_image_form';

import './styles.scss';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      price: 0,
      subtitle: "",
      name: "",
      expiration_date: "",
      condition: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const item = Object.assign({ user_id: this.props.currentUser.id }, this.state);
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
    return (
      <div className="item-form-container">
        <form onSubmit={this.handleSubmit} className="item-form-box">
          <label className="item-form-header">List an item on Unify.</label>
          <br/>
          <div className="item-form">
            <div className="image-input-section">
              <ItemImageForm />
            </div>
            <div className="text-input-section">
              <div className="header-info-text-section">
                <p className="header-info-text">By posting, you confirm that this listing complies with Unify's Commerce Policies and all applicable laws.</p>
              </div>
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="item-form-input"
                placeholder="Category"
              />
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
                placeholder="Subtitle (put something to catch people's attention here"
              />
              <br/>
              <input type="number"
                value={this.state.price}
                onChange={this.update('price')}
                className="item-form-input"
                placeholder="Price"
                min="0.00"
                max="10000.00"
                step="0.01"
              />
              <br/>
              <input type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="item-form-input"
                placeholder="Description"
              />
              <br/>
              <input type="text"
                value={this.state.condition}
                onChange={this.update('condition')}
                className="item-form-input"
                placeholder="Condition"
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