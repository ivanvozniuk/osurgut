import React from 'react';
import axios from 'axios';

import { API } from './settings';

export const Context = React.createContext(null);
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      refresh: null,
    };
  }

  componentWillMount() {
    this.setState(() => ({
      token: JSON.parse(localStorage.getItem('token')),
      refresh: JSON.parse(localStorage.getItem('refresh')),
    }));
  }

  doLogout = () => {
    localStorage.setItem('token', JSON.stringify(null));
    localStorage.setItem('refresh', JSON.stringify(null));
    window.location.reload();
  };

  doLogin = inputs => {
    return axios
      .post(`${API}/auth/admin/login`, {
        ...inputs,
      })
      .then(response => {
        const { status, body } = response.data;

        switch (status) {
          case 404:
            return {
              isError: true,
              message: body.errors.error,
            };

          case 400:
            return {
              isError: true,
              message: body.errors.error,
            };

          case 200:
            if (body.user.role === 1) {
              this.setState(state => ({
                token: body.user.token,
                refresh: body.user.refresh,
              }));
              localStorage.setItem('token', JSON.stringify(this.state.token));
              localStorage.setItem('refresh', JSON.stringify(this.state.refresh));
              return {
                isError: false,
              };
            }
            break;

          default:
            break;
        }
      });
  };

  checkToken = () => {
    if (this.state.token === null) return false;

    return axios
      .get(`${API}/auth/admin/token`, {
        crossDomain: true,
        headers: { Authorization: `Token ${this.state.token}` },
      })
      .then(res => {
        const { status, body } = res.data;

        switch (status) {
          case 401:
            return this.refreshToken();

          case 200:
            this.setState({ token: body.user.token });
            return true;

          default:
            return false;
        }
      });
  };

  refreshToken = () => {
    return axios.post(`${API}/auth/refresh`, { refresh: this.state.refresh }).then(res => {
      const { status, body } = res.data;

      switch (status) {
        case 401:
          return this.doLogout();

        case 200:
          this.setState(() => ({
            token: body.user.token,
            refresh: body.user.refresh,
          }));
          return true;

        default:
          return this.doLogout();
      }
    });
  };

  render() {
    const {
      checkToken,
      refreshToken,
      doLogin,
      doLogout,
      state: { token, refresh },
      props: { children },
    } = this;
    return (
      <Context.Provider value={{ doLogout, checkToken, refreshToken, doLogin, token, refresh }}>
        {children}
      </Context.Provider>
    );
  }
}

export default App;
