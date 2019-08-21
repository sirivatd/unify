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
            <br/>
            <label className="name-text">Name:
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="item-form-input"
              />
            </label>
            <br/>
            <label className="subtitle-text">Subtitle:
              <input type="text"
                value={this.state.subtitle}
                onChange={this.update('subtitle')}
                className="item-form-input"
              />
            </label>
            <br/>
            <label className="price-text">Price:
              <input type="number"
                value={this.state.price}
                onChange={this.update('price')}
                className="item-form-input"
              />
            </label>
            <br/>
            <label className="description-text">Description:
              <input type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="item-form-input"
              />
            </label>
            <br/>
            <label className="condition-text">Condition:
              <input type="text"
                value={this.state.condition}
                onChange={this.update('condition')}
                className="item-form-input"
              />
            </label>
            <label className="expiration-date-text">Expiration Date:
              <input type="date"
                value={this.state.expirationDate}
                onChange={this.update('expiration_date')}
                className="item-form-input"
              />
            </label>
            <br/>
            {this.renderErrors()}
            <br/>
            <ItemImageForm />
            <input className="item-form-submit" type="submit" value="List Item" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ItemForm);