import React, { useState, useEffect } from 'react';
import { Button, Message, Icon, Header, Form, Segment } from 'semantic-ui-react';

import InputBlock from './InputBlock';

const PostContainer = ({
  isLoading,
  isRendering,
  data: dataObj,
  change,
  action,
  isError,
  message,
}) => {
  const [idValue, setIdValue] = useState(null);
  const [typeValue, setTypeValue] = useState(null);
  const [modelValue, setModelValue] = useState(null);
  const [nameValue, setName] = useState(null);

  const [filter, setFilter] = useState({ type: null, model: null });
  const [data, setData] = useState(dataObj);

  useEffect(() => {
    setData(
      dataObj.filter(({ type, model }) => {
        const filterType = filter.type === null ? true : type === filter.type;
        const modelType = filter.model === null ? true : model === filter.model;

        return filterType && modelType;
      }),
    );
  }, [filter, dataObj]);

  return (
    <Segment loading={isRendering === true}>
      <Header as="h2">Параметры категорий</Header>
      <Segment>
        <Form>
          <Form.Group widths="equal">
            <InputBlock
              placeholder="Сортировка по типу"
              isSelect
              options={[
                {
                  value: null,
                  text: 'Все',
                },
                {
                  value: 'news',
                  text: 'Новости',
                },
              ]}
              value={filter.value}
              action={value => setFilter({ ...filter, type: value })}
            />
            <InputBlock
              placeholder="Сортировка по модели"
              isSelect
              options={[
                {
                  value: null,
                  text: 'Все',
                },
                {
                  value: 'category',
                  text: 'Категория',
                },
                {
                  value: 'fastlink',
                  text: 'Быстрая ссылка',
                },
              ]}
              value={filter.value}
              action={value => setFilter({ ...filter, model: value })}
            />
          </Form.Group>
        </Form>
      </Segment>

      {data.map(({ type, name, value, model, _id }, ind) => (
        <Segment key={ind}>
          <Form>
            <Form.Group widths="equal">
              <InputBlock title="Название" value={name} />
              <InputBlock title="ID" value={value} />
              <InputBlock title="Тип" value={type} />
              <InputBlock title="Модель" value={model} />
            </Form.Group>
          </Form>
          <Button onClick={() => action({ id: _id }, 'delete')} basic>
            Удалить
          </Button>
        </Segment>
      ))}
      <Segment>
        <Form>
          <Form.Group widths="equal">
            <InputBlock
              placeholder="Бизнес"
              title="Название"
              action={value => setName(value)}
              value={nameValue}
            />
            <InputBlock
              placeholder="business"
              title="ID категории или URL ссылки"
              action={value => setIdValue(value)}
              value={idValue}
            />
            <InputBlock
              isSelect
              options={[
                {
                  value: 'news',
                  text: 'Новости',
                },
                {
                  value: 'poster',
                  text: 'Афиша',
                },
              ]}
              title="Тип"
              action={value => setTypeValue(value)}
              value={typeValue}
            />
            <InputBlock
              isSelect
              options={[
                {
                  value: 'category',
                  text: 'Категория',
                },
                {
                  value: 'fastlink',
                  text: 'Быстрая ссылка',
                },
              ]}
              title="Модель"
              action={value => setModelValue(value)}
              value={modelValue}
            />
          </Form.Group>
        </Form>
        <Button
          primary
          onClick={() =>
            action(
              { value: idValue, name: nameValue, type: typeValue, model: modelValue },
              'create',
            )
          }
        >
          Создать
        </Button>
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
