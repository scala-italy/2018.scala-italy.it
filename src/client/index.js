import React from 'react';
import ReactDOM from 'react-dom';
import config from '../../config';
import { CookieSerializer, t } from 'revenge';
import { createRoutes, browserHistory, hashHistory, Router, RouterContext } from 'react-router';
import API from 'HTTPAPI';
import DB from 'DB';
import App from 'App';
import loadLocale from './loadLocale';
import debug from 'debug';
import routes from 'routes';

import 'assets';


if (process.env.NODE_ENV === 'development') {
  // Monkey-patch fixed data table so that expensive prop type checks are avoided in dev mode
  require('patch-fixed-data-table');

  // Make tcomb structs "strict"
  // TODO(gio): check this works for real
  // require('patch-tcomb-struct');

  // lighten stringify
  // TODO(gio): maybe not..
  // convert assert messages to lazy ones in all deps instead?
  t.stringify = String;

  // export for debug
  window.React = React;

  // fail loudly
  t.fail = function (message) {
    if (!t.fail.failed) {
      debugger; //eslint-disable-line no-debugger
      t.fail.failed = true;
    }
    throw new TypeError(message);
  };

  debug.enable(config.debug || '');
} else {
  debug.disable();
}

const log = debug('app:client');

function renderApp(mountNode: HTMLElement, _initialData: ?Object, data = {}) {

  return function renderAppWithLocale(intlData) {

    const initialData = _initialData ? _initialData : DB.getDefaultData(
      CookieSerializer.deserialize()
    );

    const db = new DB(initialData);
    const app = main.app = new App({ // eslint-disable-line no-use-before-define
      API, db, data,
      remote: config.remote ? '/__remote' : false
    });

    // don't fetch data during the first rendering
    // if currently running on iso setup
    let doFetch = !config.iso;

    const history = config.iso ? browserHistory : hashHistory;

    ReactDOM.render(
      <Router
        history={history}
        routes={createRoutes(routes)}
        render={(props) => {
          const { params, routes, location: { query } } = props;
          if (doFetch) {
            app.fetch(routes, app.getState({ params, query }));
          } else {
            doFetch = true;
          }
          return <RouterContext {...props} />;
        }}
        createElement={(Component, { params, children }) => {
          const props = { app, params, ...intlData };
          if (children) {
            props.child = children;
          }
          return <Component {...props} />;
        }}
      />
    , mountNode);

  };

}

const supportedLocales = require.context('locales/', false, /^\.\/[^\.]*$/).keys().map(localePath => localePath.split('/')[1]);

export function main(mountNode: HTMLElement, initialState: ?Object, initialCache, requiredLocale: ?string) {
  const localeSupported = supportedLocales.indexOf(requiredLocale) !== -1;
  const locale = localeSupported ? requiredLocale : 'en';

  log(`locale required: ${requiredLocale}, actual: ${locale}`);

  loadLocale(locale).then(renderApp(mountNode, initialState, initialCache)).catch(::console.error); // eslint-disable-line no-console
}
