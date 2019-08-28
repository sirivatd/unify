import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ItemPreviewContainer from './../item_preview/item_preview_container';

import './styles.scss';

class CategoryView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllFavorites();
    this.props.fetchAllCategoryItems(this.props.selectedCategory);
  }

  render() {
    const { categoryItems, favorites, selectedCategory } = this.props;
    const favoriteIds = favorites.map((fav) => fav.item_id);

    return (
      <div className="category-view-section">
        <img className="remove-category-icon" src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fleft-arrow.png?alt=media&token=8e44b88c-88d5-4e58-ac06-0b48e221f495" onClick={() => this.props.removeSelectedCategory()} />
        <h2 className="category-view-header">
          { selectedCategory }
        </h2>
        <div className="category-view-content-section animated fadeInUp">
          {categoryItems.map((item) => (
            <ItemPreviewContainer item={item} favoriteIds={favoriteIds} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default CategoryView;