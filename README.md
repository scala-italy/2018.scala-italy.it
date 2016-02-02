# revenge webseed
A base application for [revenge](http://github.com/buildo/revenge) web applications.

## Setup
- Run `npm install`
- create a `config.json` in the project root (refer to the example files)

## Development
```sh
npm start
```

It will start a webpack-dev-server, running at hostname/port specified in the `config.json`.

# What you get
A basic revenge application, with some common functionalities already in place.

## Table of Contents
1. [Queries]('#queries')
2. [Authentication]('#authentication')
3. [i18n]('#i18n')
4. [Basic components]('#basic-components')

## Queries
`revenge` provides a `@queries` decorator for declaring data dependencies on components. An example of `@queries` usage is shown in `app/containers/AuthContainer.js`, that uses the `user` query.

Queries definitions are in `app/queries.js`. This webseed comes with an example query, which is the aforementioned `user` query.

## Authentication
In `app/routes.js` you'll find two main route trees under `App`:

- `LoginRoute`
- `AuthenticatedRoute`

`LoginRoute` displays a login interface, with username and password fields. When the form is submit, it invokes the `doLogin` action defined in `App.js`. The HTTP request is stubbed and it returns a fake token, which is stored in a cookie.

`LoginRoute` automatically automatically redirects to `/` whenever immediately after a successful login and/or when navigating to it with a token already present. The redirection destination can be configured using the `authenticatedPath` prop.

`AuthenticatedRoute` is the dual of `LoginRoute`. When navigating to it without a token, it automatically redirects to `/login` (again, this can be configured, using the `loginRoute` prop). Also, it listens to changes of the app state and if the token is invalidated (i.e. removed), it performs the same redirection.

## i18n
Several i18n facilities are provided (built on top of `react-intl`).

`app/Hello/Hello.js` shows an example of using the `intlMethods` decorator to access the i18n facilities.

The greeting displayed to the user is translated using `this.formatMessage` (injected by the decorator).

```js
const greeting = this.formatMessage('Hello.hello');
```

This looks for the `Hello.hello` translation key for the current locale, whose definition file is placed in `app/locales/{localeName}.json`. For instance, `en.json` contains:

```json
{
  "locales": ["en"],
  "messages": {
    "Hello": {
      "hello": "hello"
    }
  }
}
```

so `greeting` will evaluate to `"Hello"`.

In order to keep the bundle size as small as possible, locale files are dynamically requested according to the user's preferred language (this uses the webpack bundle splitting feature).

Same goes for the `Intl` polyfill required by some browsers (e.g. Safari): it is provided as a separate bundle and requested only if needed.

## Basic components
Basic components are building blocks for all the application's components. They are highly reusable components, and they are often customization over third parties components.

This webseed comes with a dependency on `buildo-react-components` and some of them are cherry-picked in `app/components/Basic/index.js`.

An example of customization over a third-party component is `app/components/Basic/LoadingSpinner/LoadingSpinner.js`.
