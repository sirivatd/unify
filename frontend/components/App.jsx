import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import ItemFormContainer from './item_form/item_form_container';

import HeaderContainer from './header/header_container';
import HomeContainer from './home/home';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Landing from './landing/landing';

const App = () => (
  <div>
    <header>
      // import Google fonts
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
      <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:500"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300|Poppins:300|Source+Sans+Pro:600"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Knewave|Monoton|Orbitron"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Mukta"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Barlow:300|Biryani"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Prompt:300"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-vis/dist/style.css"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap" rel="stylesheet" />
    </header>
    <HeaderContainer />
      <Switch>
        <AuthRoute exact path="/" component={Landing} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/home" component={HomeContainer} />
        <ProtectedRoute exact path="/items/new" component={ItemFormContainer} />
      </Switch>
    </div>
);

export default App;