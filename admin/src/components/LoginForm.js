import React from 'react';
import { Button, Segment, Message, Header, Form, Icon } from 'semantic-ui-react';
import InputBlock from './InputBlock';

const LoginForm = ({ change, value, action, isError = null, isLoading, message }) => {
  const handleChangeLogin = value => {
    change(value, 'login');
  };

  const handleChangePassword = value => {
    change(value, 'password');
  };

  return (
    <Segment>
      <Header as="h2">Вход</Header>

      <Form onSubmit={action}>
        <InputBlock
          required
          title="Ваш логин"
          placeholder="login"
          action={handleChangeLogin}
          value={value.login}
        />
        <InputBlock
          required
          title="Ваш пароль"
          placeholder="password"
          action={handleChangePassword}
          value={value.password}
          type="password"
        />
        <Message
          negative={isError === true ? true : null}
          success={isError === false ? true : null}
          icon
        >
          {isLoading && <Icon name="circle notched" loading />}
          <Message.Content>{message || 'Введите логин и пароль'}</Message.Content>
        </Message>

        <Button primary fluid type="submit">
          Войти
        </Button>
      </Form>
    </Segment>
  );
};

export default LoginForm;
