import React from 'react';
import { t, props } from 'tcomb-react';
import { intl, FlexView } from 'Basic';
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
      <FlexView column>
        {this.props.child}
      </FlexView>
    );
  }

}
