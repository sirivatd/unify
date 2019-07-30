import React from 'react';

import './styles.scss';
class Landing extends React.Component {
  render() {
    return (
      <div>
      <img className="splash-image" src="https://i.ibb.co/MkpkstQ/unify-cover.png" alt="unify-cover" border="0" />
      <div className="header-title animated fadeInDown">
        <h2>Welcome to the</h2>
        <br />
        <h2>campus marketplace.</h2>
      </div>
      <button className="sign-up-button animated fadeInUp delay-1s">Sign Up</button>
    </div>
    );
  }
}

export default Landing;