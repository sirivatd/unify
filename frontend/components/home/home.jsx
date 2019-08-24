import React from 'react';
import UserFavoriteItemsContainer from './../user_favorite_items/user_favorite_items_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserFavoriteItemsContainer />
      </div>
    );
  }
}

export default Home;