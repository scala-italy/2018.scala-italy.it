import { PropTypes } from 'react';
import debug from 'debug';
import { listener } from 'revenge';

const log = debug('revenge:@authenticated');

export default function authenticated(loginPathname = '/login') {
  return function (Component) {

    Component.contextTypes = {
      router: PropTypes.object
    };

    listener(function () {
      const app = this.props.app;
      if (!app.isAuthenticated()) {
        log(`listening... user is not authenticated, redirecting to ${loginPathname}...`);
        this.context.router.push(loginPathname);
      }
    })(Component);

  };
}
