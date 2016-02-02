import React from 'react';
import { pure, skinnable, props, t } from 'revenge';
import LoadingSpinnerBuildo from 'buildo-react-components/src/loading-spinner';

import 'buildo-react-components/src/loading-spinner/style.scss';
// import colors from 'theme/variables.scss';

const theme = t.enums.of(['light', 'dark']);

export const loadingSpinnerProps = {
  message: t.maybe(t.Str),
  theme: t.maybe(theme),
  size: t.maybe(t.union([t.Str, t.Num])),
  color: t.maybe(t.Str),
  overlayColor: t.maybe(t.Str)
};

export const loadingSpinnerDefaultProps = {
  message: '',
  theme: 'light'
};

@pure
@skinnable()
@props(loadingSpinnerProps)
export default class LoadingSpinner extends React.Component {

  static defaultProps = loadingSpinnerDefaultProps;

  getLocals() {
    const color = this.props.color;
    const overlayColor = this.props.overlayColor || (this.props.theme === 'light' ? colors.white90 : colors.gray90);
    const message = {
      content: this.props.message,
      color: this.props.message && this.props.color
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
