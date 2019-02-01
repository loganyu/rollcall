import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ClubIndexContainer from './search/club_index_container';
import ClubShowContainer from './club_show/club_show_container';
import ClubFormContainer from './club_form/club_form_container';


const App = () => (
  <div>
    <header>
      <h1>Rollcall</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/clubs/new" component={ClubFormContainer} />
      <Route path="/clubs/:clubId" component={ClubShowContainer} />
      <Route exact path="/" component={ClubIndexContainer} />
    </Switch>
  </div>
);

export default App;