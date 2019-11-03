import React from 'react';
import axios from 'axios';

import Auth from './AuthParentContainer';
import Form from '../services/form';

import { Default, Login } from '../services/validation';

export default class AuthContainer extends React.PureComponent {
  footerLinks = [
    {
      id: 0,
      text: 'Регистрация',
      link: '/register',
    },
    {
      id: 1,
      text: 'Забыл пароль',
      link: '/forgot',
    },
  ];

  inputs = [
    {
      id: 0,
      name: 'login',
      placeholder: 'Введите логин',
      type: 'login',
    },
    {
      id: 1,
      name: 'password',
      placeholder: 'Введите пароль',
      type: 'password',
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      errors: {},
    };
  }

  action = inputs => {
    axios
      .post('/auth/login', {
        ...inputs,
      })
      .then(response => {
        const { status, body } = response.data;

        switch (status) {
          case 404:
            this.setState(state => ({
              errors: { ...state.errors, ...body.errors },
            }));
            break;

          case 400:
            this.setState(state => ({
              errors: { ...state.errors, ...body.errors },
            }));
            break;

          case 200:
            alert('Вы вошли успешно');
            break;

          default:
            break;
        }
      });
  };

  render() {
    const {
      footerLinks,
      inputs,
      action,
      state: { errors },
    } = this;
    return (
      <Form inputs={inputs} errors={errors} action={action} validation={[Default, Login]}>
        <Auth title="Авторизация" button="Войти в аккаунт" links={footerLinks} />
      </Form>
    );
  }
}
