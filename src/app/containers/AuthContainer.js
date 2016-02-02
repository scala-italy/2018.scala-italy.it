import React from 'react';
import { queries, props, t } from 'revenge';
import { User } from 'domain';

@queries(['user'])
@props({
  app: t.Object,
  child: t.ReactChild,
  params: t.Object,
  user: t.maybe(User),
  readyState: t.Object
})
export default class AuthContainer extends React.Component {

  render() {
    const { user, child, readyState, ...other } = this.props;
    return user ? (
      React.cloneElement(child, { user, ...other })
    ) : null;
  }

}
