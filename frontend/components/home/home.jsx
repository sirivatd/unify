import React from 'react';
import UserFavoriteItemsContainer from './../user_favorite_items/user_favorite_items_container';
import SchoolInfoContainer from './../school_info/school_info_container';
import CategorySelectContainer from './../category_select/category_select_container';
import RecentItemsContainer from './../recent_items/recent_items_container';

import './styles.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="main-content-section">
          <SchoolInfoContainer />
          <br className="user-favorites-break-line" />
          <CategorySelectContainer />
          <br className="user-favorites-break-line" />
          <RecentItemsContainer />
        </div>
        <UserFavoriteItemsContainer />
      </div>
    );
  }
}

export default Home;