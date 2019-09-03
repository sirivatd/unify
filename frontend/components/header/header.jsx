import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBar from "./../search_bar/search_bar";

import './styles.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllItems();
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  showMenu() {
    const menu = document.getElementsByClassName("account-settings-menu")[0];
    menu.classList.toggle("hidden-menu");
  }

  handleClick(e) {
    const button = document.getElementById("account-button");

    if(
      document
        .getElementsByClassName("account-settings-menu")[0]
        .contains(e.target) ||
      button.contains(e.target)
    ) {
      return;
    }
    this.handleClickOutside();
  }

  handleClickOutside() {
    const menu = document.getElementsByClassName("account-settings-menu")[0];
    if (menu.classList.contains("hidden-menu")) {
    } else {
      menu.classList.toggle("hidden-menu");
    }
  }

  render() {
    const sessionLinks = () => (
      <nav className="header-links">
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/login">Login</Link>
        <Link className="link signup-link" to="/signup">Sign up</Link>
      </nav>
    )

    const accountSettings = () => (
      <div className="account-settings-menu hidden-menu">
        <div className="account-settings-stats">
          <h3 className="account-settings-name">
            {this.props.currentUser.first_name}{" "}
            {this.props.currentUser.last_name}{" "}
          </h3>
          <h4 className="account-settings-email">
            {this.props.currentUser.email_address}
          </h4>
        </div>
        <hr className="account-setting-divider" />
        <ul
          className="account-settings-list"
          onClick={() => this.props.logout(this.props.currentUser)}
        >
          <li className="account-settings-item">Logout</li>
        </ul>
      </div>
    )
  
    const accountLinks = () => (
      <div>
        {accountSettings()}
        <hgroup className="header-group">
          <Link  className="link" to="/about">About</Link>
          <Link className="link" to="/conversations">Messages</Link>
          <Link className="link" to="/items/new">Sell on Unify</Link>
          <button
            id="account-button"
            className="account-button"
            onClick={this.showMenu}
          >
            My Account
          </button>
        </hgroup>
        <SearchBar items={this.props.items} />
      </div>
    )
  
    return (
      <div className="fixed-nav-bar">
        <div
          onClick={() => this.props.history.push("/")}
        >
          <img className="logo-img" src="https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Ffavicon.png?alt=media&token=f66966a8-2daf-46f7-98c5-1894f9aa3d6d" />
  
        </div>
        {this.props.currentUser ? accountLinks() : sessionLinks()}
      </div>
    )
  }
 }

 export default withRouter(Header);