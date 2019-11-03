import React from 'react';
import { Button, Header, Form, Segment } from 'semantic-ui-react';

const LogoutForm = ({ action }) => {
  return (
    <Segment>
      <Header as="h2">Выход</Header>

      <Form onSubmit={action}>
        <Button primary onClick={action} type="submit">
          Выйти из аккаунта
        </Button>
      </Form>
    </Segment>
  );
};

export default LogoutForm;
