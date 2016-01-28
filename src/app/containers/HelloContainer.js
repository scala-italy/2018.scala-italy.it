import React from 'react';
import { props, t, skinnable } from 'revenge';
import { intl } from 'Basic';
import Hello from 'Hello/Hello';

const intlProps = {
  messages: t.Any,
  locales: t.list(t.Str),
  formats: t.Any
};

@intl
@skinnable()
@props({
  app: t.Obj,
  params: t.Obj,
  ...intlProps
})
export default class HelloContainer extends React.Component {

  getLocals() {
    const { username } = this.props.params;

    return {
      username
    };
  }

  template({ username }) {
    return (
      <Hello username={username} />
    );
  }

}
