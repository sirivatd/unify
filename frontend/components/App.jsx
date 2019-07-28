import React from 'react';
import { Route} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

import './styles.scss';

const App = () => (
  <div>
    <div className="header-menu">
      <img src="https://i.ibb.co/tYRyxH5/unify-logo-white.png" className="header-logo" />
      <GreetingContainer />

      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </div>
  </div>
);

export default App;