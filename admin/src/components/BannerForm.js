import React, { useState } from 'react';
import { Button, Message, Header, Icon, Form, Segment } from 'semantic-ui-react';

import InputBlock from '../components/InputBlock';

const PostContainer = ({ isLoading, isError, message, isRendering, data, change, action }) => {
  const [valueData, setValue] = useState({
    image: {
      big: null,
      large: null,
      small: null,
      medium: null,
    },
    link: null,
    type: null,
  });

  return (
    <Segment loading={isRendering === true}>
      <Header as="h2">Параметры баннеров</Header>

      {data.map(({ image, link, type, _id }) => (
        <Segment>
          <Form>
            <Form.Group widths="equal">
              <InputBlock title="1280-1920" value={image.big} />
              <InputBlock title="768-1280" value={image.large} />
              <InputBlock title="480-768" value={image.medium} />
              <InputBlock title="320-480" value={image.small} />
              <InputBlock title="Ссылка" value={link} />
              <InputBlock title="Тип баннера" value={type} />
            </Form.Group>
            <Button basic onClick={() => action({ id: _id }, 'delete')}>
              Удалить
            </Button>
          </Form>
        </Segment>
      ))}

      <Segment>
        <Form>
          <Form.Group widths="equal">
            <InputBlock
              required
              action={value => {
                setValue({ ...valueData, image: { ...valueData.image, big: value } });
              }}
              title="1280-1920"
              value={valueData.image.big}
            />
            <InputBlock
              required
              action={value => {
                setValue({ ...valueData, image: { ...valueData.image, large: value } });
              }}
              title="768-1280"
              value={valueData.image.large}
            />
            <InputBlock
              required
              action={value => {
                setValue({ ...valueData, image: { ...valueData.image, medium: value } });
              }}
              title="480-768"
              value={valueData.image.medium}
            />
            <InputBlock
              required
              action={value => {
                setValue({ ...valueData, image: { ...valueData.image, small: value } });
              }}
              title="320-480"
              value={valueData.image.small}
            />

            <InputBlock
              required
              action={value => {
                setValue({ ...valueData, link: value });
              }}
              title="Ссылка"
              value={valueData.link}
            />
            <InputBlock
              required
              isSelect
              options={[
                {
                  value: 'order',
                  text: 'order',
                },
                {
                  value: 'global',
                  text: 'global',
                },
              ]}
              title="Модель"
              action={value => setValue({ ...valueData, type: value })}
              value={valueData.model}
            />
          </Form.Group>
          <Button primary onClick={() => action(valueData, 'create')}>
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
