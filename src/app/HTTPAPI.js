import API from './API';

const impl = {

  login() {
    return Promise.resolve({
      token: '123acb'
    });
  },

  getUser() {
    return fetch('http://uinames.com/api/')
      .then(res => res.json());
  }
};

export default new API(impl);
