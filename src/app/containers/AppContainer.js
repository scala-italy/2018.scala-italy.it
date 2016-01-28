import React from 'react';
import { props, t } from 'revenge';
import { intl } from 'Basic';
import { intlMethods } from 'intlHelpers';

const intlProps = {
  messages: t.Any,
  locales: t.list(t.Str),
  formats: t.Any
};

@intl
@intlMethods
@props({
  app: t.Obj,
  params: t.Obj,
  child: t.ReactChild,
  ...intlProps
})
export default class AppContainer extends React.Component {

  render() {
    return (
      <div style={{ height: '100%' }}>
        <h1>{this.formatMessage('App.title')}</h1>
        {this.props.child}
      </div>
    );
  }

}
