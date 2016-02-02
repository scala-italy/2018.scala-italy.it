import React from 'react';
import { Route } from 'react-router';
import anonymous from './anonymous';

const redirectIfLoggedIn = authenticatedPath => function(transition, replaceWith) {
  if (this.app.isAuthenticated()) {
    replaceWith(authenticatedPath);
  }
};

export default ({ authenticatedPath, component, children, ...other }) => {
  anonymous(authenticatedPath)(component);
  return (
    <Route
      component={component}
      handler={component}
      onEnter={redirectIfLoggedIn(authenticatedPath)}
      {...other}
    >
      {children}
    </Route>
  );
};
