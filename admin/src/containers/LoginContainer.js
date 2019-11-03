import React from 'react';

import LoginForm from '../components/LoginForm';
import LogoutForm from '../components/LogoutForm';

import { Context } from '../App';

class LoginContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      isLoading: null,
      isError: null,
      message: null,
    };
  }

  static contextType = Context;

  handleSubmit = async () => {
    this.setState({ isLoading: true });
    const { login, password } = this.state;

    if (login !== '' && password !== '') {
      const data = await this.context.doLogin({ login, password });
      console.log(data);
      this.setState(state => ({ ...data }));
    }
    this.setState({ isLoading: false });
  };

  handleLogout = () => {
    this.context.doLogout();
  };

  handleChange = (value, type) => {
    this.setState({ [type]: value });
  };

  render() {
    const {
      state: { isLoading, isError, message, ...state },
      handleSubmit,
      handleLogout,
      handleChange,
      context: { token },
    } = this;

    return (
      <>
        {token !== null ? (
          <LogoutForm action={handleLogout} />
        ) : (
          <LoginForm
            isLoading={isLoading}
            isError={isError}
            message={message}
            value={state}
            action={handleSubmit}
            change={handleChange}
          />
        )}
      </>
    );
  }
}

export default LoginContainer;
