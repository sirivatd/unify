import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import HeaderContainer from './header/header_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";


import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './styles.scss';

const App = () => (
  <div>
    <HeaderContainer />
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

      </Switch>
    </div>
);

export default App;