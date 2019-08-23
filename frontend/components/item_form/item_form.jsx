import React from "react";
import { withRouter } from "react-router-dom";
import ItemImageForm from './../item_image_form/item_image_form';

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
      categories: ["Electronics", "Textbooks", "Apparel", "Tickets", "Furniture", "Beauty & Health", "Services", "Other"],
      category: "",
      conditions: ["New", "Mint", "Excellent", "Good", "Fair", "Salvage"]
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
            <div className="image-input-section animated fadeInLeft delay-1s">
              <ItemImageForm />
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