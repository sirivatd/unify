import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="header-links">
      <Link className="link" to="/about">About</Link>
      <Link className="link" to="/contact">Contact</Link>
      <Link className="link" to="/login">Login</Link>
      <Link className="link" to="/signup">Sign up</Link>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.email_address}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  )

  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;