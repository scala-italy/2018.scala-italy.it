const cleanupState = o => Object.keys(o).reduce((ac, k) => {
  if (typeof o[k] !== 'undefined' && o[k] !== null) {
    ac[k] = o[k];
  }
  return ac;
}, {});

export default class RevengeApp { // eslint-disable-line no-copy-paste-default-export/default

  getState({ params, query }) {
    return {
      ...cleanupState(query),
      ...cleanupState(params)
    };
  }

}
