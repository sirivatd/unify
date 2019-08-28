import React from 'react';
import UserFavoriteItemsContainer from './../user_favorite_items/user_favorite_items_container';
import SchoolInfoContainer from './../school_info/school_info_container';
import CategorySelectContainer from './../category_select/category_select_container';
import RecentItemsContainer from './../recent_items/recent_items_container';
import CategoryViewContainer from './../category_view/category_view_container';

import './styles.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedCategory } = this.props;

    const renderLanding = () => (
      <div>
        <SchoolInfoContainer />
        <br className="home-break-line" />
        <CategorySelectContainer />
        <br className="home-break-line" />
        <RecentItemsContainer />
      </div>
    );

    const renderCategoryView = () => (
      <div>
        <CategoryViewContainer />
      </div>
    )
    return (
      <div>
        <div className="main-content-section">
          { Object.keys(selectedCategory).length > 0 ? renderCategoryView() : renderLanding() }
        </div>
        <UserFavoriteItemsContainer />
      </div>
    );
  }
}

export default Home;