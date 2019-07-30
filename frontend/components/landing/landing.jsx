import React from 'react';

class Landing extends React.Component {
  render() {
    return (
      <div>
      <img className="splash-image" src="https://i.ibb.co/MkpkstQ/unify-cover.png" alt="unify-cover" border="0" />
      <div className="header-title">
        <h2>Welcome to the</h2>
        <br />
        <h2>campus marketplace.</h2>
      </div>
      <button className="sign-up-button">Sign Up</button>
    </div>
    );
  }
}

export default Landing;