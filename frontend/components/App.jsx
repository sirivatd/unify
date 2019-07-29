import React from 'react';
import { Route} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './styles.scss';

const App = () => (
  <div>
    <div className="header-menu">
      <img src="https://i.ibb.co/tYRyxH5/unify-logo-white.png" className="header-logo" />
      <GreetingContainer />
      <div>
        <img className="splash-image" src="https://i.ibb.co/MkpkstQ/unify-cover.png" alt="unify-cover" border="0" />
        <div className="header-title">
          <h2>Welcome to the</h2>
          <br />
          <h2>campus marketplace.</h2>
        </div>
        <button className="sign-up-button">Sign Up</button>
      </div>

      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </div>
  </div>
);

export default App;