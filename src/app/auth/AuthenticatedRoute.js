import React from 'react';
import { Route } from 'react-router';
import authenticated from './authenticated';

const requireAuth = loginPath => function(transition, replaceWith) {
  if (!this.app.isAuthenticated()) {
    replaceWith(loginPath);
  }
};

export default ({ loginPath, component, children, ...other }) => {
  authenticated(loginPath)(component);
  return (
    <Route
      component={component}
      handler={component}
      onEnter={requireAuth(loginPath)}
      {...other}
    >
      {children}
    </Route>
  );
};
