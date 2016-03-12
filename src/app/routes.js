import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'AppContainer';
import Landing from 'LandingContainer';

export default (
  <Route path='/(speakers/:speakerName)' component={App} handler={App}>
    <IndexRoute component={Landing} handler={Landing} />
  </Route>
);
