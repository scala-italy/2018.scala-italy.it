import React from 'react';
import { t, props } from 'tcomb-react';
import { pure, skinnable } from 'revenge';
import LoadingSpinnerBuildo from 'buildo-react-components/src/loading-spinner';

import 'buildo-react-components/lib/loading-spinner/loadingSpinner.css';
// import colors from 'theme/variables.scss';

@pure
@skinnable()
@props({
  message: t.maybe(t.Str),
  size: t.maybe(t.union([t.Str, t.Num])),
  color: t.maybe(t.Str),
  overlayColor: t.maybe(t.Str)
})
export default class LoadingSpinner extends React.Component {

  static defaultProps = {
    message: '',
    overlayColor: '#fff'
  };

  getLocals() {
    const { color, overlayColor } = this.props;
    const message = {
      content: this.props.message,
      color: this.props.message && color
    };
    const { size } = this.props;
    return {
      color,
      overlayColor,
      message,
      size
    };
  }

  template(locals) {
    return (
      <LoadingSpinnerBuildo {...locals} />
    );
  }
}
