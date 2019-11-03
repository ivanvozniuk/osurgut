import React from 'react';
import axios from 'axios';

import Auth from './AuthParentContainer';
import Form from '../services/form';

import { Default, Login, Register } from '../services/validation';

export default class AuthRegister extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
    };
  }

  footerLinks = [
    {
      id: 0,
      text: 'Войти в аккаунт',
      link: '/login',
    },
  ];

  inputs = [
    {
      id: 0,
      name: 'name',
      placeholder: 'Введите имя',
      type: 'name',
    },
    {
      id: 1,
      name: 'surname',
      placeholder: 'Введите фамилию',
      type: 'name',
    },
    {
      id: 2,
      name: 'email',
      placeholder: 'Введите почту',
      type: 'email',
    },
    {
      id: 3,
      name: 'login',
      placeholder: 'Введите логин',
      type: 'login',
    },
    {
      id: 4,
      name: 'password',
      placeholder: 'Введите пароль',
      dependence: 'password_repeat',
      type: 'password',
    },
    {
      id: 5,
      name: 'password_repeat',
      placeholder: 'Введите пароль еще раз',
      dependent: 'password',
      type: 'password',
    },
  ];

  action = inputs => {
    axios
      .post('/auth/register', {
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
            alert('Вы успешно создали аккаунт');
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
      <Form action={action} inputs={inputs} errors={errors} validation={[Default, Login, Register]}>
        <Auth title="Регистрация" button="Создать аккаунт" links={footerLinks} />
      </Form>
    );
  }
}
