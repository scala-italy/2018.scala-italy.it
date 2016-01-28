import { App } from 'revenge';
import getQueries from 'queries';
import getCommands from 'queries';

const cleanupState = o => Object.keys(o).reduce((ac, k) => {
  if (typeof o[k] !== 'undefined' && o[k] !== null) {
    ac[k] = o[k];
  }
  return ac;
}, {});

export default class RevengeApp extends App { // eslint-disable-line no-copy-paste-default-export/default
  constructor({ API, db, data, remote }) {
    const queries = getQueries(API);
    super({
      queries,
      data,
      remote,
      state: {
        token: db.getToken()
      }
    });

    this.API = API;
    this.db = db;

    const commands = getCommands(API, queries);
    Object.keys(commands).forEach(id => {
      this[id] = (...args) => this.wrapCommand(
        id,
        commands[id],
        this.db.getToken(),
        ...args
      );
    });
  }

  getState({ params, query }) {
    return {
      token: this.db.getToken(),
      ...cleanupState(query),
      ...cleanupState(params)
    };
  }

  isAuthenticated() {
    return !!this.db.getToken();
  }

}
