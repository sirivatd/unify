import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './styles.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        <h2 className="header-name">Hi, {this.props.currentUser.first_name}</h2>
        <button className="header-button" onClick={this.props.logout}>Log Out</button>
      </hgroup>
    )
  
    return (
      <div className="fixed-nav-bar">
        <div
          onClick={() => this.props.history.push("/")}
        >
          <img className="logo-img" src="https://i.ibb.co/tYRyxH5/unify-logo-white.png" />
  
        </div>
        {this.props.currentUser ? personalGreeting() : sessionLinks()}
      </div>
    )
  }
 }

 export default withRouter(Header);