import React from 'react';
import UserFavoriteItemsContainer from './../user_favorite_items/user_favorite_items_container';

const Home = ({ currentUser, logout }) => {
  return (
    <div>
      <UserFavoriteItemsContainer />
    </div>
  );
}

export default Home;