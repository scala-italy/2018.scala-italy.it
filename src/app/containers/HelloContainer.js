import React from 'react';
import { props, t, skinnable } from 'revenge';
import Hello from 'Hello/Hello';
import { User } from 'domain';

@skinnable()
@props({
  app: t.Obj,
  params: t.Obj,
  user: t.maybe(t.Obj)
})
export default class HelloContainer extends React.Component {

  getLocals() {
    const username = this.props.user ? this.props.user.name : null;

    return {
      username
    };
  }

  template({ username }) {
    return (
      <div>
        {username && <Hello username={username} />}
      </div>
    );
  }

}
