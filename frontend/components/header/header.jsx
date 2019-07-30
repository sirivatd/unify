import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Header = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="header-links">
      <Link className="link" to="/about">About</Link>
      <Link className="link" to="/contact">Contact</Link>
      <Link className="link" to="/login">Login</Link>
      <Link className="link" to="/signup">Sign up</Link>
    </nav>
  )

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.email_address}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  )

  return (
    <div className="fixed-nav-bar">
      <img className="logo-img" src="https://i.ibb.co/tYRyxH5/unify-logo-white.png" />
      {currentUser ? personalGreeting() : sessionLinks()}
      <section className="hero-content">
        <img className="hero-image" src="https://i.ibb.co/MkpkstQ/unify-cover.png" />
      </section>
    </div>
  )
 }

 export default Header;