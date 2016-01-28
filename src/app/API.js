import debug from 'debug';

const log = debug('app:API');

export default class API {
  constructor(impl) {
    this.impl = impl;
    Object.keys(impl).forEach(m => {
      this.constructor.prototype[m] = (args) => {
        if (process.env.NODE_ENV === 'development') {
          log(`${m}(%o)`, args);
        }
        return impl[m](args);
      };
    });
  }
}
