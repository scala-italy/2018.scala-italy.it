import React from 'react';
import { Route } from 'react-router';
import App from 'AppContainer';
import Hello from 'HelloContainer';

export default (
  <Route component={App} handler={App}>
    <Route path='/' component={Hello} handler={Hello} />
  </Route>
);
