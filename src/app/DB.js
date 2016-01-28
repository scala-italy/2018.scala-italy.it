export default class DB {

  constructor(initialState) {
    this.state = initialState;
  }

  toJSON() {
    return this.state;
  }

  static getDefaultData(token) {
    return {
      token
    };
  }

  setToken(token) {
    this.state.token = token;
  }

  getToken() {
    return this.state.token;
  }

}
