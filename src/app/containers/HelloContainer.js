import React from 'react';
import { queries, props, t, skinnable } from 'revenge';
import Hello from 'Hello/Hello';

const intlProps = {
  messages: t.Any,
  locales: t.list(t.Str),
  formats: t.Any
};

@queries(['user'])
@skinnable()
@props({
  app: t.Obj,
  params: t.Obj,
  user: t.maybe(t.Obj),
  readyState: t.Obj,
  ...intlProps
})
export default class HelloContainer extends React.Component {

  getLocals() {
    const username = this.props.user ? this.props.user.name.first : null;

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
