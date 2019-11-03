/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Button, Icon, Message, Header, Form, Segment } from 'semantic-ui-react';

import InputBlock from './InputBlock';

const PostContainer = ({ isLoading, isRendering, isError, message, data, action }) => {
  const [idValue, setIdValue] = useState(data.id || null);
  const [model, setModel] = useState();

  void useEffect(() => {
    setIdValue(data.id);
  }, [data.id]);

  return (
    <Segment loading={isRendering === true}>
      <Header as="h2">Параметры Горячего поста</Header>
      <Segment>
        <Form>
          <Form.Group widths="equal">
            <InputBlock
              required
              title="ID поста"
              action={value => setIdValue(value)}
              value={idValue}
            />

            <InputBlock
              required
              isSelect
              options={[
                {
                  value: 'news',
                  text: 'Новости',
                },
              ]}
              title="Модель горячего поста"
              action={value => setModel(value)}
              value={model}
            />
          </Form.Group>
          <Button primary onClick={() => action({ id: idValue, model }, 'create')}>
            Создать
          </Button>
        </Form>
      </Segment>

      <Message
        negative={isError === true ? true : null}
        success={isError === false ? true : null}
        icon
      >
        {isLoading && <Icon name="circle notched" loading />}
        <Message.Content>{message || 'Заполните форму'}</Message.Content>
      </Message>
    </Segment>
  );
};

export default PostContainer;
