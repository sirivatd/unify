import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import HeaderContainer from './header/header_container';
import HomeContainer from './home/home';
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import './styles.scss';

const App = () => (
  <div>
    <HeaderContainer />
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/home" component={HomeContainer} />
      </Switch>
    </div>
);

export default App;