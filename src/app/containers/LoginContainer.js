import React from 'react';
import { pure, props, t, skinnable } from 'revenge';
import { FlexView } from 'Basic';
import Login from 'Login/Login';

@pure
@skinnable()
@props({
  app: t.Obj,
  params: t.Obj
})
export default class LoginContainer extends React.Component {

  doLogin = ({ username, password }) => {
    return this.props.app.doLogin(username, password);
  };

  getLocals() {
    const { doLogin } = this;

    return { doLogin };
  }

  template({ doLogin }) {
    return (
      <FlexView
        height="100%"
        width="100%"
        hAlignContent="center"
        vAlignContent="center"
        style={{ position: 'relative' }}
      >
        <Login doLogin={doLogin} />
      </FlexView>
    );
  }

}
