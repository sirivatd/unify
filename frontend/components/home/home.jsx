import React from 'react';

const Home = ({ currentUser, logout }) => {
  return (
    <div>
      { currentUser ? currentUser.first_name : "No one logged in" }
    </div>
  );
}

export default Home;