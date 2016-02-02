import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { AuthenticatedRoute, LoginRoute } from './auth';
import App from 'AppContainer';
import Hello from 'HelloContainer';
import Login from 'LoginContainer';
import Auth from 'AuthContainer';

const authenticatedRoutes = (
  <IndexRoute component={Hello} handler={Hello} />
);

export default (
  <Route component={App} handler={App}>
    {LoginRoute({
      path: '/login',
      component: Login,
      authenticatedPath: '/'
    })}
    {AuthenticatedRoute({
      path: '/',
      component: Auth,
      loginPath: '/login',
      children: authenticatedRoutes
    })}
  </Route>
);
