import React from 'react';
import { t, skinnable, props, pure } from 'revenge';
import { intlMethods } from 'intlHelpers';
import { FlexView } from 'Basic';

import './hello.scss';

@intlMethods
@pure
@skinnable()
@props({
  username: t.String
})
export default class Hello extends React.Component {

  getLocals() {
    const { username } = this.props;
    const greeting = this.formatMessage('Hello.hello');

    return {
      username,
      greeting
    };
  }

  template({ greeting, username }) {
    return (
      <FlexView className='hello'>
        <h2>{greeting} {username}</h2>
      </FlexView>
    );
  }

}
