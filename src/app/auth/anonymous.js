import { PropTypes } from 'react';
import debug from 'debug';
import { listener } from 'revenge';

const log = debug('revenge:@anonymous');

export default function anonymous(loggedInPathname = '/') {
  return function (Component) {

    Component.contextTypes = {
      router: PropTypes.object
    };

    listener(function () {
      const app = this.props.app;
      if (app.isAuthenticated()) {
        log(`listening... user is authenticated, redirecting to ${loggedInPathname}...`);
        this.context.router.push(loggedInPathname);
      }
    })(Component);

  };
}
