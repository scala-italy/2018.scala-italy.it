import React from 'react';
import { Route } from 'react-router';
import App from 'AppContainer';
import Hello from 'HelloContainer';

// FIXME(gabro)
// revenge currently looks for the `handler`
// prop, no longer there in react-router 1.0+
// That's why `handler` is there.
export default (
  <Route component={App} handler={App}>
    <Route path='/' component={Hello} handler={Hello} />
  </Route>
);
