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

import NavigationContainer from './navigation/navigation_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ClubIndexContainer from './search/club_index_container';
import ClubShowContainer from './club_show/club_show_container';
import EventShowContainer from './event_show/event_show_container';
import CreateClubFormContainer from './club_form/create_club_form_container';
import EditClubFormContainer from './club_form/edit_club_form_container';
import CreateEventFormContainer from './event_form/create_event_form_container';
import EditEventFormContainer from './event_form/edit_event_form_container';

const App = () => (
  <div>
    <header>
      <NavigationContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/clubs/new" component={CreateClubFormContainer} />
      <ProtectedRoute exact path="/clubs/edit/:clubId" component={EditClubFormContainer} />
      <Route exact path="/clubs/:clubId" component={ClubShowContainer} />
      <ProtectedRoute exact path="/clubs/:clubId/events/new" component={CreateEventFormContainer} />
      <Route exact path="/clubs/:clubId/events/:eventId" component={EventShowContainer} />
      <ProtectedRoute exact path="/clubs/:clubId/events/edit/:eventId" component={EditEventFormContainer} />
      <Route exact path="/" component={ClubIndexContainer} />
    </Switch>
  </div>
);

export default App;