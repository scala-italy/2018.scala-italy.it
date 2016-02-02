import React from 'react';
import { queries, props, t } from 'revenge';
import { User } from 'domain';

@queries(['user'])
@props({
  app: t.Obj,
  child: t.ReactChild,
  params: t.Obj,
  user: t.maybe(t.Obj),
  readyState: t.Obj
})
export default class AuthContainer extends React.Component {

  render() {
    const { user, child, readyState, ...other } = this.props;
    return user ? (
      React.cloneElement(child, { user, ...other })
    ) : null;
  }

}
