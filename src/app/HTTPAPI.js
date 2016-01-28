import API from './API';

const impl = {
  getUser() {
    return fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json => json.results[0].user);
  }
};

export default new API(impl);
